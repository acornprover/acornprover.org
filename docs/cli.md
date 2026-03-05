---
sidebar_position: 5
---

# Command-Line Interface

The Acorn CLI verifies proofs, runs the language server, and generates docs.

For most people, the VS Code extension is easiest. The CLI is useful for automation and agent workflows.

## Installation

```bash
npm i -g @acornprover/cli
```

After installation, run `acorn` from anywhere.

## Basic Usage

In an [acornlib](https://github.com/acornprover/acornlib) checkout, run:

```bash
acorn
```

Running `acorn` with no command is the same as `acorn verify`.

## Global Options

Top-level usage:

```bash
acorn [OPTIONS] [COMMAND]
```

Global options:

- `--lib <DIR>` - Directory to use as `acornlib` root (defaults to the current directory)
- `-h, --help` - Show help
- `-V, --version` - Show version

## Commands

All commands also support `--lib <DIR>` and `-h, --help`.

### `verify` (default)

Verify theorems and proofs.

```bash
acorn verify [OPTIONS] [TARGET] [LINE]
```

Arguments:

- `[TARGET]` - Module or filename to verify. Supports `TARGET:LINE` syntax. If omitted, verifies all files. If `-` is provided, reads from stdin.
- `[LINE]` - Line number as a positional argument (alternative to `--line`).

Options:

- `--no-cache-skip` - Do not skip unchanged modules based on manifest hash checks
- `--no-write-cache` - Do not write verification results to the cache
- `--line <LINE>` - Search for a proof at a specific line number
- `--fail-fast` - Exit on the first verification failure
- `--strict` - Reject any use of the `axiom` keyword
- `--timeout <SECONDS>` - Timeout in seconds for proof search

Examples:

```bash
# Verify all files in the project
acorn

# Verify a specific file
acorn verify myfile.ac

# Verify a specific module
acorn verify mymodule

# Verify from stdin
cat myfile.ac | acorn verify -

# Search for a proof at a specific line
acorn verify myfile.ac --line 42
```

### `check`

Check goals, erroring if any goal requires a search.

```bash
acorn check [OPTIONS] [TARGET] [LINE]
```

Arguments:

- `[TARGET]` - Module or filename to check. Supports `TARGET:LINE` syntax. If omitted, checks all files in the library.
- `[LINE]` - Line number as a positional argument (alternative to `--line`).

Options:

- `--line <LINE>` - Search for a proof at a specific line number
- `--cert <CERT>` - Use a specific certificate (JSON format) instead of the cached one

Examples:

```bash
acorn check
acorn check mymodule
acorn check myfile.ac --line 42
```

### `serve`

Run the language server for IDE integration.

```bash
acorn serve [OPTIONS] --extension-root <EXTENSION_ROOT>
```

Options:

- `--workspace-root <WORKSPACE_ROOT>` - The root folder the user has open
- `--extension-root <EXTENSION_ROOT>` - The root folder of the extension

### `docs`

Generate documentation.

```bash
acorn docs [OPTIONS] <DIR>
```

Arguments:

- `<DIR>` - Directory to generate documentation in

Example:

```bash
# Generate documentation in the ./docs directory
acorn docs ./docs/library
```

### `reprove`

Re-prove goals without using the cache.

```bash
acorn reprove [OPTIONS] [TARGET] [LINE]
```

Arguments:

- `[TARGET]` - Module or filename to reprove. Supports `TARGET:LINE` and `TARGET:START-END` syntax.
- `[LINE]` - Line number as a positional argument (alternative to `--line`).

Options:

- `--line <LINE>` - Search for a proof at a specific line number
- `--fail-fast` - Exit immediately on the first verification failure
- `--timeout <SECONDS>` - Timeout in seconds for proof search
- `--write-cache` - Write reproved results to the cache

### `select`

Display proof details for a specific line.

```bash
acorn select [OPTIONS] <MODULE> [LINE]
```

Arguments:

- `<MODULE>` - Module or file to select from (can be module name, filename, or `module:line`)
- `[LINE]` - Line number as a positional argument (alternative to `--line` or `:LINE` suffix)

Options:

- `--line <LINE>` - Line number to select

### `clean`

Remove redundant claims from a module or entire project.

```bash
acorn clean [OPTIONS] [MODULE]
```

Arguments:

- `[MODULE]` - Module name to clean (if omitted, cleans all modules in the project)

### `list`

List all module names in the library.

```bash
acorn list [OPTIONS]
```

## Version Information

To check the version:

```bash
acorn --version
```

## Getting Help

For help:

```bash
acorn --help
acorn verify --help
acorn check --help
```
