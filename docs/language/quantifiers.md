---
sidebar_position: 2
---

# Quantifiers

Acorn implements first-order logic through the `forall` and `exists` quantifiers. In a general sense, they create expressions out of other expressions, while adding bound variables:

```acorn
forall(arguments) {
    expression
}

exists(arguments) {
    expression
}
```

## Examples

Quantifying over a single variable:

```acorn
theorem there_is_always_a_bigger_number(a: Nat) {
    exists(b: Nat) {
        b > a
    }
}
```

Quantifying over multiple variables:

```acorn
theorem dividing_by_three(n: Nat) {
    exists(m: Nat, r: Nat) {
        3 * m + r = n and r < 3
    }
}
```

Higher-order logic is fine, too. You can quantify over functions.

```acorn
theorem bigifying_surjection(n: Nat) {
    exists(f: Nat -> Nat) {
        injective(f) and forall(a: Nat) {
            f(a) > n
        }
    }
}
```

## forall as a Statement

You can also use `forall` as a statement with multiple steps inside its proof. Inside the block, the arguments are bound. The final statement is exported to be usable outside the block.

For example:

```acorn
forall(a: Nat) {
    step_one(a)
    step_two(a)
    step_three(a)
    goal(a)
}
```

Each of these statements has to be proven. Then, outside the `forall` block, subsequent statements can use the generic form of the `forall` expression, even though they can't access the variable `a` any more. From the outside, it looks the same as if we had proven the expression:

```acorn
forall(a: Nat) {
    goal(a)
}
```
