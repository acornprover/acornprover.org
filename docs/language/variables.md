---
sidebar_position: 3
---

# Variables

The `let` statement lets you give a name to an expression.

Its general form is:

```acorn
let name: Type = expression
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
