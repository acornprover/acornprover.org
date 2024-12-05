---
sidebar_position: 10
---

# Experimental Stuff

Overall, the Acorn language is in beta. Features are likely to change as we get feedback from people using the software.

We can't promise that your code will not break. But, we can promise that if you get a pull request merged into the standard library, we'll keep it updated as the language changes. Consider that an incentive to share your code.

## Polymorphism

You can make theorems and functions polymorphic. For example:

```acorn
define repeat<T>(n: Nat, f: T -> T, a: T) -> T {
    match n {
        Nat.zero {
            a
        }
        Nat.suc(pred) {
            repeat(pred, f, f(a))
        }
    }
}

theorem goal<T>(a: T, b: T, c: T) {
    a = b and b = c -> a = c
} by {
    if (a = b and b = c) {
        a = c
    }
}
```

This isn't quite enough to be useful. We at least need types to be polymorphic, to express concepts like `List<T>`. And it would nice to have more powerful dependent types, to handle stuff like schemes and sheaves. So, we might want to change how polymorphism currently works, in order to get there.

## Solve Statements

Traditionally, theorem provers are focused on proving theorems. "Solving an expression" is a very common operation in mathematics that doesn't quite fit into this paradigm. You can express this in Acorn with a `solve` statement:

```acorn
solve 2 + 1 by {
    2 + 1 = 3
}
```

The verifier checks that every statement in the block is correct, and it checks that the final statement is an equality using the initial expression. It doesn't check that it is in "simplest form", because that is not necessarily a rigorous concept.

Right now, this isn't all that useful, because the AI can't solve these problems. It can only verify solutions. So for now, these statements are only really useful for expressing training data.

## Axiom Statements

You can use the `axiom` keyword to declare a theorem is true without proving it.

```acorn
axiom nat_plus_three_isnt_two(n: Nat) {
    n + 3 != 2
}

// The prover accepts this
axiom two_plus_two_is_five {
    2 + 2 = 5
}
```

This was useful during development, but it isn't clear if it's useful to keep this feature around.
