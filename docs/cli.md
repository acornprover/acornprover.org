---
sidebar_position: 5
---

# Command-Line Interface

The Acorn CLI provides a command-line interface for verifying proofs, running a language server, and generating documentation.

For humans, we recommend using the VS Code extension. But for LLM agents, like Claude Code or OpenAI's Codex, it's very helpful to have a CLI interface.

## Installation

You can install the Acorn CLI globally using npm:

```bash
npm i -g @acornprover/cli
```

After installation, you can run the `acorn` command from anywhere on your system.

## Basic Usage

The most basic usage is to fork the [acornlib](https://github.com/acornprover/acornlib) library, make changes,
and run `acorn` from the root of the library to see if those changes can be verified.

Usually this is all you need! But the CLI also provides several options and subcommands.

## Global Options

### `--lib <DIR>`

Set the directory to look for acornlib. By default, Acorn uses the current directory.

```bash
acorn --lib /path/to/acornlib verify
```

## Commands

### `verify` (default)

Verify theorems and proofs in your Acorn project.

```bash
acorn verify [TARGET] [OPTIONS]
```

**Arguments:**

- `TARGET` - (Optional) Module or filename to verify. If not provided, verifies all files in the library. If `-` is provided, it reads from stdin.

**Options:**

- `--nohash` - Don't skip goals based on hash checks. This forces re-verification even if the code hasn't changed.
- `--line <LINE>` - Search for a proof at a specific line number. Requires a target file to be specified.

**Examples:**

```bash
# Verify all files in the project
acorn verify

# Verify a specific file
acorn verify myfile.ac

# Verify a specific module
acorn verify mymodule

# Verify without using hash checks
acorn verify --nohash

# Search for a proof at a specific line
acorn verify myfile.ac --line 42
```

### `reverify`

Reverify all goals in the project, erroring if any goal requires a search. This is useful for ensuring that all proofs are cached and don't require expensive AI searches.

```bash
acorn reverify
```

This command:

- Re-verifies all goals regardless of hash checks
- Fails if any goal requires an AI search (i.e., it's not already proven)
- Is useful for CI/CD pipelines to ensure all proofs are complete

### `training`

Generate training data from your Acorn project. This is used for developing and improving the Acorn AI model.

If you're interested in developing AI for Acorn, this could be an interesting place to start! The output data is just a bunch
of text files, each with one problem-proof pair from acornlib.

```bash
acorn training DIR
```

**Arguments:**

- `DIR` - Directory to generate training data in

**Example:**

```bash
# Generate training data in the ./training_data directory
acorn training ./training_data
```

This command:

- Automatically enables reverify mode
- Disables hash checking
- Generates training data that can be used to improve the AI model

### `serve`

Run the language server for IDE integration. This command is used by the VS Code extension and not called directly by users.

```bash
acorn serve --extension-root PATH --workspace-root PATH
```

**Options:**

- `--extension-root <PATH>` - (Required) The root folder of the extension
- `--workspace-root <PATH>` - (Required) The root folder the user has open

### `docs`

Generate the "Library Reference" for this website.

```bash
acorn docs DIR
```

**Arguments:**

- `DIR` - Directory to generate documentation in

**Example:**

```bash
# Generate documentation in the ./docs directory
acorn docs ./docs/library
```

You probably won't want to do this yourself.

## Version Information

To check the version of the Acorn CLI:

```bash
acorn --version
```

## Updating

`npm` installs a small JavaScript wrapper that auto-updates the underlying acorn binary. To force an update check:

```bash
acorn --update
```

To remove the underlying binary, which will force a re-download:

```bash
acorn --clean
```

## Getting Help

For help with any command:

```bash
acorn --help
acorn command --help
```
