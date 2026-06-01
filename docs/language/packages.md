---
sidebar_position: 7
---

# Packages

A package is a folder with an `interface.ac` file. The interface is the package's public API. From outside the folder, only the declarations in `interface.ac` are visible.

For example:

```text
src/
  flags/
    interface.ac
    internal.ac
  main.ac
```

The package name is the folder's module name, so code outside the package imports from `flags`:

```acorn
from flags import public, public_fact
```

It cannot import from `flags.internal`. Implementation modules are private to their package.

## Interface Files

The `interface.ac` file lists the definitions and named theorems that the package exports:

```acorn
// src/flags/interface.ac
let public: Bool = true

theorem public_fact {
    public
}
```

The implementation files contain matching declarations and the actual proofs:

```acorn
// src/flags/internal.ac
let public: Bool = true

lemma helper {
    public
}

theorem public_fact {
    public
} by {
    helper
}
```

Every public declaration in the interface must have exactly one matching implementation somewhere in the package. The public statement has to match exactly. A theorem in `interface.ac` cannot have a `by` proof body, and its implementation cannot be an `axiom`.

Implementation files can contain extra definitions, theorems, and lemmas. Those extra declarations are private to the package unless they are also listed in `interface.ac`.

## Imports Inside Packages

Files inside the same package can import each other's implementation modules:

```acorn
from flags.internal import public
```

Files outside the package can only import from the package interface:

```acorn
from flags import public
```

This makes the interface the review boundary. A reviewer can read `interface.ac` to see what the package claims publicly, then inspect implementation files for the corresponding proofs.

## Verifying Packages

To verify the entire package, pass the package name to the CLI:

```bash
acorn verify flags
```

This verifies the interface and all `.ac` implementation files under `src/flags`.

Packages cannot be nested, and a root-level `src/interface.ac` is not supported.
