#!/usr/bin/env python3
"""Regenerate acornprover.org library docs with the Acorn CLI."""

from __future__ import annotations

import argparse
import json
import subprocess
import sys
from datetime import datetime, timezone
from pathlib import Path


def run(
    args: list[str],
    cwd: Path,
    *,
    capture: bool = True,
    check: bool = True,
) -> subprocess.CompletedProcess[str]:
    return subprocess.run(
        args,
        cwd=cwd,
        check=check,
        text=True,
        stdout=subprocess.PIPE if capture else None,
        stderr=subprocess.PIPE if capture else None,
    )


def output(args: list[str], cwd: Path) -> str:
    return run(args, cwd).stdout.strip()


def fail(message: str) -> None:
    print(f"error: {message}", file=sys.stderr)
    sys.exit(1)


def resolve_path(repo_root: Path, value: str) -> Path:
    path = Path(value)
    return path if path.is_absolute() else repo_root / path


def ensure_clean_lib(lib_path: Path, allow_dirty: bool) -> None:
    if not (lib_path / ".git").exists():
        fail(f"{lib_path} is not a git checkout; expected canonical acornlib input")
    status = output(["git", "status", "--short"], lib_path)
    if status and not allow_dirty:
        fail(
            f"{lib_path} has local changes; commit/stash them or rerun with --allow-dirty\n{status}"
        )


def write_provenance(repo_root: Path, lib_path: Path, docs_dir: Path, command: list[str]) -> None:
    acorn_version = output(["acorn", "--version"], repo_root)
    acornlib_commit = output(["git", "rev-parse", "HEAD"], lib_path)
    acornlib_remote = output(["git", "remote", "get-url", "origin"], lib_path)

    provenance = {
        "generated_at_utc": datetime.now(timezone.utc)
        .replace(microsecond=0)
        .isoformat()
        .replace("+00:00", "Z"),
        "generator": {
            "command": " ".join(command),
            "acorn_cli": acorn_version,
        },
        "source": {
            "name": "acornlib",
            "path": str(lib_path.relative_to(repo_root))
            if lib_path.is_relative_to(repo_root)
            else str(lib_path),
            "remote": acornlib_remote,
            "commit": acornlib_commit,
        },
    }

    provenance_path = docs_dir / "generated.json"
    provenance_path.write_text(json.dumps(provenance, indent=2) + "\n")
    print(f"Wrote {provenance_path}")


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Run acorn docs for the Acorn website library reference."
    )
    parser.add_argument("--repo-root", default=".", help="Path to acornprover.org")
    parser.add_argument("--lib", default="vendor/acornlib", help="Path to acornlib")
    parser.add_argument("--docs-dir", default="docs/library", help="Generated docs dir")
    parser.add_argument(
        "--allow-dirty",
        action="store_true",
        help="Allow generation from a dirty acornlib checkout",
    )
    parser.add_argument(
        "--skip-provenance",
        action="store_true",
        help="Do not write docs/library/generated.json",
    )
    args = parser.parse_args()

    repo_root = Path(args.repo_root).resolve()
    lib_path = resolve_path(repo_root, args.lib).resolve()
    docs_dir = resolve_path(repo_root, args.docs_dir).resolve()

    if not repo_root.exists():
        fail(f"repo root does not exist: {repo_root}")
    if not lib_path.exists():
        fail(f"acornlib input does not exist: {lib_path}")
    if not docs_dir.exists():
        fail(f"docs output directory does not exist: {docs_dir}")
    if not (docs_dir / "_category_.json").exists():
        fail(f"{docs_dir} is missing _category_.json")

    ensure_clean_lib(lib_path, args.allow_dirty)

    command = ["acorn", "--lib", str(lib_path), "docs", str(docs_dir)]
    print("Running:", " ".join(command), flush=True)
    result = run(command, repo_root, check=False)
    if result.stdout:
        print(result.stdout, end="")
    if result.stderr:
        print(result.stderr, end="", file=sys.stderr)
    if result.returncode != 0:
        print(
            "acorn docs may have left the docs directory partially regenerated.",
            file=sys.stderr,
        )
        fail(f"acorn docs failed with exit code {result.returncode}")

    if not args.skip_provenance:
        write_provenance(repo_root, lib_path, docs_dir, command)


if __name__ == "__main__":
    main()
