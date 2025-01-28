---
sidebar_position: 4
---

# Induction

Induction is the soul of the natural numbers. You prove something is true for zero, and that whenever it's true for one number, it's true for the next one. And there you go, it's true for all natural numbers.

Let's try an example.

## Our Starting Point

If you've been going through the tutorial linearly, delete the stuff about `throdd`, to keep this example focused. Start with the [`threeven` code](https://github.com/acornprover/acornprover.org/blob/master/examples/threeven.ac):

```acorn
from nat import Nat
numerals Nat

define threeven(n: Nat) -> Bool {
    exists(d: Nat) {
        3 * d = n
    }
}

theorem zero_is_threeven {
    threeven(0)
}

theorem threeven_plus_three(n: Nat) {
    threeven(n) -> threeven(n + 3)
} by {
    let d: Nat satisfy {
        3 * d = n
    }
    3 * (d + 1) = n + 3
}
```

## Proof By Induction

Our goal is to prove that for any three consecutive numbers, one of them must be threeven.

Let's write this theorem using a separate definition for our goal.

```acorn
define threeven_nearby(n: Nat) -> Bool {
    threeven(n) or threeven(n + 1) or threeven(n + 2)
}

theorem threeven_everywhere(n: Nat) {
    threeven_nearby(n)
}
```

Type these in and save, and the theorem will get yellow-squiggled. It isn't simple enough to be proven in one step. (Unless you left in the theorem `threeven_kinda_follows_throdd` from the previous tutorial section, for which this theorem is a trivial corollary. That's why we deleted the throdd stuff!)

So, we have to do a proof by induction. Induction isn't an explicit theorem in Acorn, because it's part of the kernel, rather than part of the standard library. But if it were an explicit theorem, it would look something like this:

```acorn
// This code does not actually compile, don't use it!
theorem Nat.induction(f: Nat -> Bool, n: Nat) {
    f(0) and forall(k: Nat) { f(k) -> f(k + 1) } -> f(n)
}
```

Let's look at the parts of this code.

`Nat -> Bool` is a type. It means functions that take a natural number, and return a boolean value.

`f(0)` is the base case, that `f` is true for zero. You can think of `f` as either a function, or a proposition. They work the same way in Acorn.

`forall(k: Nat) { f(k) -> f(k + 1) }` is the inductive step. When `f` is true for `k`, it must also be true for `k + 1`.

## Method One: Lots Of Little Theorems

One way to prove `threeven_everywhere` is by making the base case and inductive step their own theorems. For example:

```acorn
define threeven_nearby(n: Nat) -> Bool {
    threeven(n) or threeven(n + 1) or threeven(n + 2)
}

theorem base_case {
    threeven_nearby(0)
}

theorem inductive_step(n: Nat) {
    threeven_nearby(n) -> threeven_nearby(n + 1)
} by {
    if threeven(n) {
        threeven(n + 3)
        threeven_nearby(n + 1)
    } else {
        threeven(n + 1) or threeven(n + 2)
        threeven_nearby(n + 1)
    }
}

theorem threeven_everywhere(n: Nat) {
    threeven_nearby(n)
}
```

We use a short proof by cases to prove the inductive step, and otherwise the steps are trivial. We don't need to explicitly cite "induction". We just need to prove the base case and the inductive step, and Acorn will do the lookup itself.

## Method Two: One Big Theorem

Another way to do the same thing is by proving the base case and the inductive step inline, as steps in a multi-step proof. For example:

```acorn
define threeven_nearby(n: Nat) -> Bool {
    threeven(n) or threeven(n + 1) or threeven(n + 2)
}

theorem threeven_everywhere(n: Nat) {
    threeven_nearby(n)
} by {
    // Base case
    threeven_nearby(0)

    // Inductive step
    forall(m: Nat) {
        if threeven_nearby(m) {
            if threeven(m) {
                threeven(m + 3)
                threeven_nearby(m + 1)
            } else {
                threeven(m + 1) or threeven(m + 2)
                threeven_nearby(m + 1)
            }

            // Not necessary, but here for clarity
            threeven_nearby(m + 1)
        }
    }
}
```

This is essentially the same logic as the first example, just written as a single function. The `forall` statement works like it's an anonymous, inline theorem. The last line of an `if` statement works like it's the conclusion of a theorem. So in this code:

```acorn
// Named theorem version
theorem my_theorem(x: MyType) {
    foo(x) -> bar(x)
} by {
    first_step
    second_step
}

// Same thing, but anonymous
forall(x: MyType) {
    if foo(x) {
        first_step
        second_step
        bar(x)
    }
}
```

The two examples are proving the same theorem.

## Philosophy

For the most part, a proof by induction works the same way as any other Acorn proof. You go step by step, and induction is just the last step. There's no special syntax for it.

In Acorn, you don't have to express _why_ each line is true. You only have to express _what_ is true.

Many theorem provers are based on a concept of "tactics", that let you precisely explain why a theorem is true. Acorn is designed to fill in the tactics using AI when it verifies code, to make it easier for people to formalize proofs.

Does this actually work? Yes. Sure. Well, it mostly works. And it'll get better and better as AI gets better. Eventually, you should be able to only jot down the key points of a proof, the way you would communicate a proof to a smart human mathematician, and have the AI fill in the blanks.

Try it for yourself!
