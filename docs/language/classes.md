---
sidebar_position: 9
---

# Classes

Once you've defined an inductive type or a structure type, you can augment it with additional class methods.

For example, let's start with this `LatticePoint` structure type.

```acorn
from int import Int
numerals Int

structure LatticePoint {
    x: Int
    y: Int
}
```

## The class Statement

To add extra methods to the `LatticePoint` type, you can define both methods and variables inside a block with the `class` keyword.

```acorn
class LatticePoint {
    // Now accessible as LatticePoint.origin
    let origin = LatticePoint.new(0, 0)

    // Now accessible as LatticePoint.swap
    define swap(self) -> LatticePoint {
        LatticePoint.new(self.y, self.x)
    }
}
```

The first argument to a function must be named `self`, and has the type of the class itself.

Constants and functions defined inside a `class` block are now methods accessible as `TypeName.method_name`. For example:

```acorn
theorem swap_is_involutive(p: LatticePoint) {
    p.swap.swap = p
} by {
    p.swap.x = p.y
    p.swap.y = p.x
}
```

The names for constants and functions inside a class block are the same as outside, except that constants in a
class can also have numeric names. Thus `Nat.0` is the name for zero, the natural number, and `Int.0` is the name for zero, the integer.

Writing the `numerals Int` statement lets us avoid typing `Int.` before every numeral.

It's okay to have multiple `class` blocks for a single class. You often want to define some methods, prove some things about them, then define more methods.

## Operators

Every operator has a alphabetical reserved name. If you define a method of this name, the operator will work as well. For example, the `+` operator corresponds to the name `add`:

```acorn
class LatticePoint {
    define add(self, other: LatticePoint) {
        LatticePoint.new(self.x + other.x, self.y + other.y)
    }
}

theorem add_origin(p: LatticePoint) {
    p + LatticePoint.origin = p
}
```

The names of the supported operators are:

```acorn
// Greater than
a.gt(b) = a > b

// Less than
a.lt(b) = a < b

// Greater than or equal to
a.gte(b) = a >= b

// Less than or equal to
a.lte(b) = a <= b

// Addition
a.add(b) = a + b

// Subtraction
a.sub(b) = a - b

// Multiplication
a.mul(b) = a * b

// Division
a.div(b) = a / b

// Mod
a.mod(b) = a % b

// Negative. The unary '-' is different from the binary '-'.
a.neg = -a
```
