---
sidebar_position: 5
---

# Functions

The `define` statement lets you define a named function.

Its general form is:

```acorn
define function_name(arg1: Arg1Type, arg2: Arg2Type) -> ReturnType {
    expression
}
```

The type of the resulting function is `(Arg1Type, Arg2Type) -> ReturnType`.

For example:

```acorn
define square(n: Nat) -> Nat {
    n * n
}
```

This defines the function `square`, with type `Nat -> Nat`.

Functions can have any positive number of arguments. You can't have a zero-argument function; there are no side effects in Acorn, so a function without any arguments is just a constant.

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

Sometimes you want to define a function in terms of what condition it satisfies, rather than how to calculate it. The general form of this statement is:

```acorn
let function_name(arg1: Type1, arg2: Type2, ...) -> ret: ReturnType {
    expression
} by {
    proof
}
```

The expression can use the arguments and the return value, and the function is defined so that the expression is true.

For example, let's say we want to define the "predecessor" function, which is the inverse of the built-in "successor" function, except we'll make the predecessor of zero equal to zero.

```acorn
let predecessor(n: Nat) -> p: Nat satisfy {
    if n = 0 {
        p = 0
    } else {
        p.suc = n
    }
}
```

Here, the return value of the function, `p` is named so that we can refer to it with the expression.

It may be nontrivial that a return value exists that can satisfy the condition. If we need to prove it, we can do that in a `by` block. An example from the standard library:

```acorn
// This is a "bounded" version of subtraction.
// It returns 0 instead of negative numbers.
let bounded_sub(a: Nat, b: Nat) -> d: Nat satisfy {
    // The condition that `d` satisfies
    if a < b {
        d = 0
    } else {
        d + b = a
    }
} by {
    // The proof that such a `d` exists
    if a < b {
        0 = 0
    } else {
        b <= a
        let d: Nat satisfy { d + b = a }
    }
}
```

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

## Theorems as Functions

Inside the block of a theorem, the theorem itself is available as a function that takes its arguments and returns a `Bool`. This is useful for techniques like induction. For example, from the standard library:

```acorn
theorem add_zero_left(a: Nat) {
    0 + a = a
} by {
    0 + 0 = 0
    add_zero_left(0)
    forall(x: Nat) {
        if add_zero_left(x) {
            0 + x = x
            0 + x.suc = x.suc
            add_zero_left(x.suc)
        }
    }
    add_zero_left(a)
}
```

Named theorems can also be explicitly cited after they are proven. Usually, the AI should handle this for you. But if it doesn't, you can provide the theorem as a hint. For example, after proving `add_zero_left` as above, you can cite it in a later proof:

```acorn
theorem zero_plus_seven {
    0 + 7 = 7
} by {
    add_zero_left(7)
}
```
