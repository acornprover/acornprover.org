---
sidebar_position: 6
---

# Imports

Imports in Acorn work similarly to imports in Python.

Module names are like variable names: they must start with a lowercase letter, and they may use alphanumeric characters, plus underscore.

Every file corresponds to one module. The name for a file is the module name, plus an `.ac` suffix.

# Importing a Whole Module

You can import an entire module, and then subsequently refer to its contents with `module_name.thing_name`.

For example, the file `nat.ac` exists in the standard library, to implement natural numbers. You can import it with:

```acorn
import nat
numerals nat.Nat

theorem even_nearby(n: nat.Nat) {
  nat.divides(2, n) or nat.divides(2, n + 1)
} by {
  let (q: nat.Nat, r: nat.Nat) satisfy {
    r < 2 and n = q * 2 + r
  }
  if r = 0 {
    nat.divides(2, n)
  } else {
    r = 1
    n = q * 2 + 1
    n + 1 = (q + 1) * 2
    nat.divides(2, n + 1)
  }
}
```

Here, we are using `nat.Nat` to refer to the type `Nat`, and `nat.divides` to refer to the function `divides`, both of which are implemented in `nat.ac`.

## Importing Parts of a Module

You can also just import selected names from a module:

```acorn
from nat import Nat, divides
numerals Nat

theorem even_nearby(n: Nat) {
  divides(2, n) or divides(2, n + 1)
} by {
  let (q: Nat, r: Nat) satisfy {
    r < 2 and n = q * 2 + r
  }
  if r = 0 {
    divides(2, n)
  } else {
    r = 1
    n = q * 2 + 1
    n + 1 = (q + 1) * 2
    divides(2, n + 1)
  }
}
```

This makes the code look cleaner, but it can cause conflicts if, for example, multiple modules both want to provide the name `divides`.

## What You Can Import

You can import any types, variables, and functions defined at the top level.

You usually shouldn't need to import individual theorems. Acorn's prover will index all theorems in the imported modules and use them for proving.

You _can_ import named theorems, though. If the Acorn prover is failing to find a proof, and you know that it should use a particular theorem, you can write it inline as a "hint".

TODO: provide an example.

## Caveat Mathematicus

Currently, you can only import from the standard library. You can't import your own modules. We'll need to improve this, in the fullness of time.
