---
sidebar_position: 3
---

# Indirect Proofs

Sometimes a proof doesn't fit naturally into a format where each step follows naturally from the steps before it. For example, we might want an "indirect proof" - where you assume something, then prove a contradiction, and thus conclude that your initial assumption was false.

To demonstrate this, let's define a more profound mathematical concept, building on our previous innovation of "threeven".

## Our Starting Point

If you've been following along linearly, great. If not, start with the [`threeven` code](https://github.com/acornprover/acornprover.org/blob/master/examples/threeven.ac):

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
    threeven(n) implies threeven(n + 3)
} by {
    let d: Nat satisfy {
        3 * d = n
    }
    3 * (d + 1) = n + 3
}
```

## Throdd

A number that is not even is called "odd". Naturally, a number that is not threeven is called "throdd". Enter this definition:

```acorn
define throdd(n: Nat) -> Bool {
    not threeven(n)
}
```

Notice the `not` keyword, to negate a boolean value. The boolean functions `and` and `or` are also keywords.

## If Statements

The astute reader may notice that every threeven number is followed by a throdd number. Let's express that as a theorem.

```acorn
theorem throdd_follows_threeven(n: Nat) {
    threeven(n) implies throdd(n + 1)
}
```

You could prove this directly, but it's more natural to think of this as an indirect proof. If you had two threeven numbers next to each other, well, they can't both be divisible by three. What do you get if you divide out the threes?

You can express this line of reasoning with an `if` statement.

```acorn
theorem throdd_follows_threeven(n: Nat) {
    threeven(n) implies throdd(n + 1)
} by {
    if threeven(n + 1) {
        let a: Nat satisfy {
            3 * a = n
        }
        let b: Nat satisfy {
            3 * b = n + 1
        }
        3 * (b - a) = 1
        false
    }
}
```

This is an indirect proof. The `if` keyword starts a block in which `threeven(n + 1)` is assumed. Inside the block, we have a multi-step proof. We can define new variables `a` and `b` that are only usable inside this block.

Finally, the block is concluded with a line just containing `false`. This indicates we have proven a contradiction. Once you prove a contradiction inside a block, Acorn knows that the negated assumption is true outside the block.

You can do an entire proof this way, to get a traditional indirect proof. You can also use this method as just part of a proof. Let's do a more complicated example.

## The Other Way Around

Symmetry is slightly spoiled here, because threeven does not always follow odd. But it's close! Just a bit messier.

```acorn
theorem threeven_kinda_follows_throdd(n: Nat) {
    throdd(n) implies threeven(n + 1) or threeven(n + 2)
}
```

There are a bunch of different ways to prove this. Philosophically, it feels like a "proof by cases". You hack away at the different possibilities until they are all handled. Here's one way to do it:

```acorn
theorem threeven_kinda_follows_throdd(n: Nat) {
    throdd(n) implies threeven(n + 1) or threeven(n + 2)
} by {
    // By the division theorem
    let (d: Nat, r: Nat) satisfy {
        d * 3 + r = n and r < 3
    }

    // The impossible case
    if r = 0 {
        threeven(n)
        false
    }

    // The possible cases
    if r = 1 {
        3 * (d + 1) = n + 2
        threeven(n + 2)
    } else {
        r = 2
        3 * (d + 1) = n + 1
        threeven(n + 1)
    }
}
```

This proof uses some parts of the Acorn language that we haven't seen before.

## Comments

```acorn
// By the division theorem
```

This is a comment. It's there to help human readers understand what's going on. It's a good idea to comment your code.

You don't need to formally refer to the division theorem in order to use it. Acorn indexes the available theorems to do that lookup for you. It's part of the standard library, and looks like:

```acorn
theorem division_theorem(m: Nat, n: Nat) {
    0 < n implies exists(q: Nat, r: Nat) {
        r < n and m = q * n + r
    }
}
```

You can see what theorems are used to prove any statement by clicking on it, and looking in the Assistant window to see the full, formal derivation. It'll link to all of the theorems used.

(It might not actually use the division theorem. That's just how I would do it, if I was the AI. Click the statement and see!)

The ideal workflow is that you might not know what exactly is in the standard library, but that's okay. You just write your proof, and keep simplifying the steps that Acorn doesn't understand until it accepts the whole thing.

## If-Else Statements

The other part of this proof we haven't seen before is the `else` keyword. This lets us do a "proof by cases".

```acorn
if r = 1 {
    3 * (d + 1) = n + 2
    threeven(n + 2)
} else {
    r = 2
    3 * (d + 1) = n + 1
    threeven(n + 1)
}
```

There are two blocks delineated by `{ ... }` braces here. In the first block, we can assume `r = 1`, and we prove `threeven(n + 2)`. In the second block, we can assume `not (r = 1)`, and we prove `threeven(n + 1)`. As a result of this statement, the outside scope can conclude `threeven(n + 1) or threeven(n + 2)`. So the proof works.

## Using the division theorem is cheating!

Well, fair enough. Aesthetically this might be a little backwards, because in some sense the division theorem is more advanced than the concept of "threeven". Taking commutativity for granted is one thing. But should a tutorial really rely on the division theorem?

We could also do a different sort of proof. Next, let's talk about [induction](/docs/tutorial/induction/).
