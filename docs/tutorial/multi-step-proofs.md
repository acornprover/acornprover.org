---
sidebar_position: 1
---

# Multi-step Proofs

Often a theorem isn't so obvious that in your head, you just realize it's true in a single flash of insight. Instead, you think about it, and you start to see a sequence of things that follow from the premises. Your thought process goes:

"Given that `my_premise` is true, we know that `first_step` must be true. Then we know that `second_step` is true... well, if we have both of those, then we also can conclude `third_step`. And that implies `interesting_conclusion`. So `my_premise` implies `interesting_conclusion`, nice, that's a cool theorem."

The way you express this in Acorn code is with a proof block on your theorem:

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

Acorn works the same way. You write a proof, and Acorn tells you whether it understands all the steps or not.

Let's go through an example.

## Example

Ipsum
