---
sidebar_position: 6
---

# Imports

Imports in Acorn work similarly to imports in Python.

Module names are like variable names: they must start with a lowercase letter, and they may use alphanumeric characters, plus underscore.

Every file corresponds to one module. The name for a file is the module name, plus an `.ac` suffix.

The syntax for imports is:

```acorn
from module import name1, name2
```

# Importing Types

Often, the only thing you need to import is types. The convention is for type names to be `CamelCase`, with module names as the matching `snake_case`.

```acorn
from nat import Nat
numerals Nat

theorem even_nearby(n: Nat) {
  2.divides(n) or 2.divides(n + 1)
} by {
  let (q: Nat, r: Nat) satisfy {
    r < 2 and n = q * 2 + r
  }
  if r = 0 {
    2.divides(n)
  } else {
    r = 1
    n = q * 2 + 1
    n + 1 = (q + 1) * 2
    2.divides(n + 1)
  }
}
```

The `numerals` statement tells Acorn what type should be used to interpret numerals in this file, like `0`, `1`, and `2`. It's simplest do this at the top of the file, first all your `import` statements, then a `numerals` statement if you want one.

The `divides` method is defined on the `Nat` type. Attributes and theorems of a type come along when the type is imported.

## Importing Values

In some cases, functions or other values are defined at the top level, unattached to a type. You can import these as well. For example, if `divides` had been defined as a top-level function:

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

This is less convenient than using type attributes, because you have to import the name. Plus, for attributes, you can use IDE autocomplete to remember their name. So it's encouraged to use attributes over top-level functions wherever possible, to keep the code organized.

## What You Can Import

You can import any types, variables, and functions defined at the top level.

You can import individual theorems to cite them, but you generally shouldn't need to. Acorn's prover will index all theorems in the imported modules and use them for proving.

## Caveat Mathematicus

Currently, you can only import from the standard library. You can't import your own modules. We'll need to improve this, in the fullness of time.
