---
sidebar_position: 3
---

# Induction and Inductive Types

Induction is the soul of the natural numbers. You prove something is true for zero, and that whenever it's true for one number, it's true for the next one. And there you go, it's true for all natural numbers. What could be simpler?

Let's try an example.

## Our Starting Point

If you've been going through the tutorial linearly, delete all the stuff about `throdd`, to keep this example focused. Start with the `threeven` code:

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

##
