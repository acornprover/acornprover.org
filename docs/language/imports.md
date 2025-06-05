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

The `numerals` statement tells Acorn what type should be used to interpret numerals in this file, like `0`, `1`, and `2`. It's simplest do this at the top of the file, first all your `import` statements, then a `numerals` statement if you want one.

Here, we are using `nat.Nat` to refer to the type `Nat`, and `nat.divides` to refer to the function `divides`, both of which are implemented in `nat.ac`.

## Importing Parts of a Module

You can also import selected names from a module so that they are usable without the module name:

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

You can import individual theorems to cite them, but you generally shouldn't need to. Acorn's prover will index all theorems in the imported modules and use them for proving.

## Preventing Imports

You can use a `problem` block to prevent anything inside the block from being visible to anything outside the block.

```acorn
problem {
    let a: Nat = 2
    let b: Nat = 4
    theorem {
      a + a = b
    }
}
```

Problems like this are still verified by Acorn. They can be helpful for people reading the code, and also helpful for training the AI. But they can't be used directly elsewhere in the code.

Think of them like problems in a textbook. They're useful for learning, but the book should also make sense if you read through it while skipping all the problems.

## Caveat Mathematicus

Currently, you can only import from the standard library. You can't import your own modules. We'll need to improve this, in the fullness of time.
