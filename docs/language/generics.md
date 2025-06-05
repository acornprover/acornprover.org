---
sidebar_position: 9
---

# Generics

Generics let you prove things once, and use the result for many different types.

Several different Acorn keywords can be used in a generic way, by adding a list of type parameters.

## Generics with `structure`

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

## Generics with `inductive`

Similarly, you can define a generic inductive type.

For example, let's define the generic `List` type.

```acorn
inductive List<T> {
    nil
    cons(T, List<T>)
}
```

A list can be a list of anything, but a particular list can only be a list of one type of thing. A `List<Int>` is a list of `Int`, a `List<Nat>` is a list of `Nat`, a `List<List<Bool>>` is a list of `List<Bool>`, and so on.

## Generics with `attributes`

You can define attributes for a parametrized type by adding parameters to the `attributes` statement. The parameters have to match those used in the initial definition of the type.

For example:

```acorn
attributes List<T> {
    // Whether this list contains a particular item.
    define contains(self, item: T) -> Bool {
        match self {
            List.nil {
                false
            }
            List.cons(head, tail) {
                if head = item {
                    true
                } else {
                    tail.contains(item)
                }
            }
        }
    }
}
```

Acorn tries to infer the type for generics, so that you don't have to include the `<T>` everywhere. In this example, we only have to use the type parameter `T` to specify the type of the `item` argument.

## Generics with `define`

You can define a generic function by including type parameters after the function name.

```acorn
define colinear<T>(a: LatticePoint<T>, b: LatticePoint<T>) -> Bool {
    a.x = b.x or a.y = b.y
}
```

Similarly, you can define member functions on a generic structure.

```acorn
attributes LatticePoint<T> {
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

## Generics with `theorem`

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

## Generics with `let`

If I told you that the `let` statement supported generics, and I didn't give you any sample code, I bet
you could guess how it worked anyway.

But just in case. It looks like this:

```acorn
let is_finite<T>: Bool = exists(xs: List<T>) {
    forall(x: T) {
        xs.contains(x)
    }
}
```

The generic `let` statement defines a constant for each type. You can think of it as a property of the type itself. In this case, it's defining whether the type itself is finite.
