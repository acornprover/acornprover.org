---
sidebar_position: 9
---

# Attributes

Once you've defined an inductive type or a structure type, you can augment it with additional attributes.

For example, let's start with this `LatticePoint` structure type.

```acorn
from int import Int
numerals Int

structure LatticePoint {
    x: Int
    y: Int
}
```

## The attributes Statement

To add extra attributes to the `LatticePoint` type, you can define both functions and variables inside a block with the `attributes` keyword.

```acorn
attributes LatticePoint {
    // Now accessible as LatticePoint.origin
    let origin = LatticePoint.new(0, 0)

    // Now accessible as LatticePoint.swap
    define swap(self) -> LatticePoint {
        LatticePoint.new(self.y, self.x)
    }
}
```

The first argument to a function must be named `self`, and it automatically get the type that we're defining attributes for.

Constants and functions defined inside an `attributes` block are now attributes accessible as `TypeName.attribute_name`. For example:

```acorn
theorem swap_is_involutive(p: LatticePoint) {
    p.swap.swap = p
} by {
    p.swap.x = p.y
    p.swap.y = p.x
}
```

The names for constants and functions inside an attributes block are the same as outside, except that constants in an
attributes block can also have numeric names. Thus `Nat.0` is the name for zero, the natural number, and `Int.0` is the name for zero, the integer.

Writing the `numerals Int` statement lets us avoid typing `Int.` before every numeral.

It's okay to have multiple `attributes` blocks for a single type. You often want to define some attributes, prove some things about them, then define more attributes.

## Operators

Every operator has a alphabetical reserved name. If you define a method of this name, the operator will work as well. For example, the `+` operator corresponds to the name `add`:

```acorn
attributes LatticePoint {
    define add(self, other: LatticePoint) -> LatticePoint {
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
