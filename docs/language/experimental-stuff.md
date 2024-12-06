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

## Reading Numerals

There is a special `read` function. If your class has member variables for the digits `0` through `9`, as well as a `read` function that combines an existing number with a new digit, it can be used in a `numerals` statement to process number strings.

```acorn
// Not exactly how it works in the standard library, but close
class Nat {
    let 1: Nat = Nat.0.suc
    let 2: Nat = Nat.1.suc
    let 3: Nat = Nat.2.suc
    let 4: Nat = Nat.3.suc
    let 5: Nat = Nat.4.suc
    let 6: Nat = Nat.5.suc
    let 7: Nat = Nat.6.suc
    let 8: Nat = Nat.7.suc
    let 9: Nat = Nat.8.suc

    define read(self, other: Nat) -> Nat {
        dectuple(self) + other
    }
}
```

This is kind of weird. It would probably make more sense to process a list of characters into a numerical object directly. But, currently we don't have a "list" or a "character" type in the standard library. So, we probably want to change how the `read` function works.

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

This is very handy for unit testing, but maybe we don't want to expose it for actual use.
