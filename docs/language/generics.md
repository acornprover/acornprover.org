---
sidebar_position: 9
---

# Generics

Generics let you prove things once, and use the result for many different types.

## Generic Structures

You can define a generic structure by putting a list of generic parameters
after the type name.

For example, let's define a `LatticePoint` that doesn't just have to be composed of integers, but can be any type.

```acorn
structure LatticePoint<T> {
    x: T
    y: T
}
```

Here, `T` is the generic parameter.

If we define `LatticePoint` this way, then `LatticePoint<Int>` works exactly the same as if we had defined it with:

```acorn
structure LatticePoint {
    x: Int
    y: Int
}
```

You can have multiple generic parameters in a single parameter list.

```acorn
structure Pair<T, U> {
    first: T
    second: U
}
```

## Generic Definitions

You can define a generic function by including type parameters after the function name.

```acorn
define colinear<T>(a: LatticePoint<T>, b: LatticePoint<T>) -> Bool {
    a.x = b.x or a.y = b.y
}
```

Similarly, you can define member functions on a generic structure.

```acorn
class LatticePoint<T> {
    define swap(self) -> LatticePoint<T> {
        LatticePoint.new(self.y, self.x)
    }
}
```

When you call generic functions, you generally do not need to provide the type parameters, because
they can be inferred from the types of the arguments.

```acorn
import Int
numerals Int

// No parameters on LatticePoint.new are needed.
let origin: LatticePoint<Int> = LatticePoint.new(0, 0)

// No parameters on colinear are needed.
theorem origin_self_colinear {
    colinear(origin, origin)
}
```

## Generic Theorems

Similarly, you can define generic theorems by including type parameters after the theorem name.

```acorn
theorem swap_is_involutive<T>(p: LatticePoint<T>) {
    p.swap.swap = p
} by {
    p.swap.x = p.y
    p.swap.y = p.x
}
```

When you prove a generic theorem, it can be instantiated to any type.
