---
sidebar_position: 3
---

# Variables

The `let` statement lets you give a name to an expression.

Its general form is:

```acorn
let name: Type = expression
```

The type annotation is optional when Acorn can infer the type:

```acorn
let name = expression
```

Variable names start with a lowercase letter. The rest of the name must be alphanumeric, or an underscore.

## Examples

Simple assignment:

```acorn
let two: Nat = 2

let three: Nat = 2.suc

let two_less_than_three: Bool = two < three
```

Nothing needs to be proven to make these statements. You're just giving a new name to a valid expression.

## Local Let

You can also use `let` locally inside a value-producing block. The local names are visible to the rest of the block, and the final line is the value of the whole block.

```acorn
define square_twice(x: Nat) -> Nat {
    let y = x * x
    y * y
}
```

Local lets work in function bodies, anonymous function bodies, `if` branches, and `match` branches.

```acorn
define choose_or_double(p: Bool, x: Nat, fallback: Nat) -> Nat {
    if p {
        let y = x + x
        y
    } else {
        fallback
    }
}
```

The same binding forms work locally too: ordinary value lets, destructuring, `satisfy`, `transport`, and inline `by` blocks on the forms that need a proof.

## Destructuring Let

A `let` statement can destructure a value by matching it against a constructor or function call. The names inside the pattern become variables.

```acorn
inductive Option[T] {
    none
    some(T)
}

let Option.some(value) = Option.some(2)
```

Destructuring is useful when an expression returns a wrapper such as `Option.some`. If Acorn needs help proving the expression has the shape in the pattern, add a `by` block.

```acorn
axiom every_option_some(y: Option[Nat]) {
    exists(x: Nat) {
        Option.some(x) = y
    }
}

define unwrap(y: Option[Nat]) -> Nat {
    let Option.some(x) = y by {
        every_option_some(y)
    }
    x
}
```

## Let-satisfy

You can create a variable with a condition, rather than a direct definition, using the `let` and `satisfy` keywords.

For example, this defines `n` to be any even number.

```acorn
let n: Nat satisfy {
    exists(d: Nat) {
        2 * d = n
    }
}
```

You could also define both `d` and `n` this way.

```acorn
let (d: Nat, n: Nat) satisfy {
    2 * d = n
}
```

You can also make a logically equivalent statement while not defining any new variables at all:

```acorn
exists(d: Nat, n: Nat) {
    2 * d = n
}
```

All three of these statements require the same proof, to be verified. They differ in which variables are
defined in the outside environment. The variables named in the `let` part of the expression are visible outside. Variables created through the arguments to an `exists`, `forall`, or `function` block are only visible inside that block.

When the existence proof is not immediate, attach a `by` block.

```acorn
axiom equal_witness_exists(n: Nat) {
    exists(x: Nat) {
        x = n
    }
}

define choose_equal(n: Nat) -> Nat {
    let x: Nat satisfy {
        x = n
    } by {
        equal_witness_exists(n)
    }
    x
}
```

## Transport

The `transport` keyword changes a value from one type to another when the two types are equal. This is useful for indexed structures and functions, where a proof like `n = k` should let a value of type `Box[n]` be used as a value of type `Box[k]`.

```acorn
structure Box[n: Nat] {
    value: Nat
}

axiom all_indices_equal(n: Nat, k: Nat) {
    n = k
}

define box_value_at(n: Nat, k: Nat, box: Box[n]) -> Nat {
    let y: Box[k] = transport box by {
        all_indices_equal(n, k)
    }
    y.value
}
```

The target type comes from the explicit annotation on the `let`, so `transport` requires one:

```acorn
let y: Box[k] = transport box
```

In a proof block, surrounding assumptions can prove the source and target types are equal.

```acorn
theorem transport_in_branch(n: Nat, k: Nat, box: Box[n]) {
    n = k implies true
} by {
    if n = k {
        let y: Box[k] = transport box
        y.value = box.value
    }
}
```

In a local expression, use an inline `by` block when the equality proof is not already available in that expression context.
