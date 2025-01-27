---
sidebar_position: 2
---

# Multi-step Proofs

Often a theorem isn't so obvious that you just realize it's true in a single flash of insight. Instead, you think about it, and you start to see a sequence of things that follow from the premises. Your thought process goes:

"Given that `my_premise` is true, we know that `first_step` must be true. Then we know that `second_step` is true... well, if we have both of those, then we also can conclude `third_step`. And that implies `interesting_conclusion`. So `my_premise` implies `interesting_conclusion`, nice, that's a cool theorem."

## Proof Blocks

The way you express this in Acorn is with a theorem statement that has a proof block:

```acorn
theorem cool_theorem {
    my_premise -> interesting_conclusion
} by {
    first_step
    second_step
    third_step
}
```

When humans are communicating proofs to each other, we generally don't describe in great detail why each step works. We just break the proof down into steps, where each step is obvious. If a step isn't obvious, you ask for more detail.

Acorn works the same way. You write a proof, and Acorn tells you whether it understands all the steps or not. The keyword `by` introduces the block, the block has one step per line, and the block itself is delineated by `{ ... }` braces.

We should go through a nontrivial proof so that this makes sense. Let's start by defining a novel and innovative mathematical concept, and then do some proofs about it.

## Threeven

If you don't have Acorn installed and you want to follow along, check out the [installation guide](/docs/installation/).

Open up a new Acorn file and type this in.

```acorn
from nat import Nat
numerals Nat

define threeven(n: Nat) -> Bool {
    exists(d: Nat) {
        3 * d = n
    }
}
```

The example code is [available here](https://github.com/acornprover/acornprover.org/blob/master/examples/) if you just want the final version.

If a number is divisible by two, we call that "even". Naturally, if a number is divisible by three, we should call that "threeven".

This code uses some common Acorn keywords.

```acorn
from nat import Nat
```

The `from` and `import` keywords tell Acorn that we're using the `Nat` type from the `nat` module in the standard library, which provides natural numbers.

```acorn
numerals Nat
```

The `numerals` keyword tells Acorn that in the rest of this file, numerals like `3` should be interpreted as natural numbers.

```acorn
define threeven(n: Nat) -> Bool
```

The `define` keyword defines a new function, called `threeven`. The function takes one argument, a natural number, and returns a boolean value, which just means it can be true or false. Note that `Nat` and `Bool` are capitalized, because they are types.

```acorn
exists(d: Nat) {
    3 * d = n
}
```

The `exists` keyword is the existential quantifier. A number `n` is threeven if there's some other number, `d`, that you can multiply by 3 to get `n`. There's also `forall`, the universal quantifier.

## The Essence of Being Threeven

Now that we've defined `threeven`, we can prove theorems about it. For simple theorems, we can just state the theorem itself.

```acorn
theorem zero_is_threeven {
    threeven(0)
}
```

Type this in, save the file, and you should see a little check mark appear. But now, try the same thing with a trickier theorem.

```acorn
theorem threeven_plus_three(n: Nat) {
    threeven(n) -> threeven(n + 3)
}
```

Save this file, and you'll see something different - Acorn puts a yellow squiggle on the theorem.

(Once the AI gets better, we'll have to update this tutorial with a harder theorem!)

Think of the yellow squiggle as a "mathematical warning". Acorn isn't sure whether this statement is true or not. It's like you're the professor, and the AI is a student, asking "Wait, this is trivial to you, but I don't follow. Can you explain in more detail?"

Click the yellow squiggle, and the assistant will think harder and see if it can figure out a proof. It might find a proof, which you can accept. Or it might fail, or you might consider its proof to be ugly. Either way, you need to provide more detailed steps. For example, this should work:

```acorn
theorem threeven_plus_three(n: Nat) {
    threeven(n) -> threeven(n + 3)
} by {
    let d: Nat satisfy {
        3 * d = n
    }
    3 * (d + 1) = n + 3
}
```

There's a new type of statement here:

```acorn
let d: Nat satisfy {
    3 * d = n
}
```

Using `let d: Nat satisfy { ... }` is the same as `exists(d: Nat) { ... }`, except it also makes the variable `d` usable in the following code.

In this proof, Acorn can see how to prove each step from the steps before it. So it accepts the multi-step proof.

## The Ways Things Can Go Wrong

The yellow squiggle is one sort of trouble you can have. You can also have a red squiggle.

Maybe you've run into this already. Try writing this code:

```acorn
theorem {
    blorf + blonk = flump
}
```

This should give you a red squiggle, which you can hover to see an error message like:

```
unknown identifier 'blorf':
    blorf + blonk = flump
    ^^^^^
```

If there's an error but you don't see where it is, hit F8 to jump to it in VS Code.

The red squiggle is a compile-time error. You get a red squiggle because you entered an expression that doesn't make sense. The syntax is wrong, or you're using a name that doesn't mean anything, or you forgot a parenthesis, or there's a type error, like adding `3 + false`.

## The Basic Development Cycle

1. Write the steps in your proof.

2. When you get a red squiggle, you typed something in wrong. Fix it.

3. When you get a yellow squiggle, that step isn't simple enough. Add more steps.

Many proofs can be expressed in this sequential way. But sometimes, it's more convenient to structure the proof differently. Next, let's discuss [indirect proofs](/docs/tutorial/indirect-proofs/).
