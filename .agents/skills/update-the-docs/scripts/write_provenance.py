#!/usr/bin/env python3
"""Write provenance for generated Acorn library documentation."""

from __future__ import annotations

import argparse
import json
import subprocess
from datetime import datetime, timezone
from pathlib import Path


def run(args: list[str], cwd: Path | None = None) -> str:
    result = subprocess.run(
        args,
        cwd=cwd,
        check=True,
        text=True,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
    )
    return result.stdout.strip()


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Write docs/library/generated.json for Acorn docs generation."
    )
    parser.add_argument("--repo-root", default=".", help="Path to acornprover.org")
    parser.add_argument(
        "--lib",
        default="vendor/acornlib",
        help="Path to acornlib, relative to repo root unless absolute",
    )
    parser.add_argument(
        "--output",
        default="docs/library/generated.json",
        help="Output JSON path, relative to repo root unless absolute",
    )
    args = parser.parse_args()

    repo_root = Path(args.repo_root).resolve()
    lib_path = Path(args.lib)
    if not lib_path.is_absolute():
        lib_path = repo_root / lib_path

    output_path = Path(args.output)
    if not output_path.is_absolute():
        output_path = repo_root / output_path

    acorn_version = run(["acorn", "--version"], cwd=repo_root)
    acornlib_commit = run(["git", "rev-parse", "HEAD"], cwd=lib_path)
    acornlib_remote = run(["git", "remote", "get-url", "origin"], cwd=lib_path)

    provenance = {
        "generated_at_utc": datetime.now(timezone.utc)
        .replace(microsecond=0)
        .isoformat()
        .replace("+00:00", "Z"),
        "generator": {
            "command": "acorn --lib vendor/acornlib docs ./docs/library",
            "acorn_cli": acorn_version,
        },
        "source": {
            "name": "acornlib",
            "path": "vendor/acornlib",
            "remote": acornlib_remote,
            "commit": acornlib_commit,
        },
    }

    output_path.parent.mkdir(parents=True, exist_ok=True)
    output_path.write_text(json.dumps(provenance, indent=2) + "\n")
    print(f"Wrote {output_path}")


if __name__ == "__main__":
    main()
