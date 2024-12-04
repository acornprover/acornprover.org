---
sidebar_position: 4
---

# If-else

You can use the `if` and `else` keywords to make a conditional expression. Its general form is:

```acorn
if condition {
    expression1
} else {
    expression2
}
```

The condition must be a boolean expression, and the expressions in the two branches have to be the same type.

For example:

```acorn
let max_a_b: Nat = if a < b {
    b
} else {
    a
}
```

As an expression, the `else` branch is required. Otherwise, what would the expression be if the condition was false?

# If Statements

You can also use `if` as a statement with multiple steps inside its proof.

```acorn
if condition {
    first_statement
    another_statement
    final_statement
}
```

Inside the block, the condition is assumed to be true. Outside the block, `condition -> final_statement` is usable.

In statement form, the `else` branch isn't required.

# Proof By Contradiction

One common pattern is to do a proof by contradiction, by using an `if` statement whose final statement is simply `false`.

```acorn
if condition {
    first_statement
    another_statement
    false
}
```

The final `false` indicates that we have proven a contradiction. In the environment outside the block, this proves `not condition`.

For example:

```acorn
theorem foo(a: Nat, b: Nat) {
  2 * a != 2 * b + 3
} by {
  if 2 * a = 2 * b + 3 {
    2 * a  = 2 * (b + 1) + 1
    2 * (a - (b + 1)) = 1
    false
  }
}
```
