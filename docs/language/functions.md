---
sidebar_position: 4
---

# Functions

The `define` statement lets you define a named function.

Its general form is:

```acorn
define function_name(arg1: Arg1Type1, arg2: Arg2Type, arg3: Arg3Type) -> ReturnType {
    expression
}
```

The type of the resulting function is `(Arg1Type, Arg2Type, Arg3Type) -> ReturnType`.

For example:

```acorn
define square(n: Nat) -> Nat {
    n * n
}
```

This defines the function `square`, with type `Nat -> Nat`.

## Anonymous Functions

You can use the keyword `function` to define an anonymous function.

For example, we could also have defined the `square` function with:

```acorn
let square: Nat -> Nat = function(n: Nat) {
    n * n
}
```

## Predicates

It's common to define logical predicates as functions that return `Bool`. For example:

```acorn
define is_even(n: Nat) -> Bool {
    exists(d: Nat) {
        2 * d = n
    }
}

// This already exists as "<=" in the standard library
define is_less_than_or_equal_to(a: Nat, b: Nat) -> Bool {
    exists(d: Nat) {
        a + d = b
    }
}
```

## Let-satisfy

TODO

## Proof Blocks

TODO

## Currying

Acorn supports currying implicitly.

```acorn
define add_then_double(a: Nat, b: Nat) -> Nat {
    2 * (a + b)
}

let add_three_then_double: Nat -> Nat = add_then_double(3)
```

So you can supply just some of the arguments, left to right, and get a function that takes the remaining arguments.

Thus, the types `(Nat, Nat) -> Nat` and `Nat -> (Nat -> Nat)` are considered to be the same, in the type system.
