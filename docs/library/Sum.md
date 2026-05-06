---
title: Sum
---

```acorn
inductive Sum[T, U] {
    inl(T)
    inr(U)
}
```

A value belonging to one of two types.

[GitHub](https://github.com/acornprover/acornlib/blob/master/src/sum_type.ac)

---
## cases

```acorn
define cases[V](self, left: T -> V, right: U -> V) -> V {
    sum_cases(self, left, right)
}
```

Case analysis for this sum value.
## inl

```acorn
Sum.inl: T -> Sum[T, U]
```

A value from the left type.
## inr

```acorn
Sum.inr: U -> Sum[T, U]
```

A value from the right type.
## is_left

```acorn
let is_left: Sum[T, U] -> Bool = sum_is_left
```

True if the value lies on the left side.
## is_right

```acorn
let is_right: Sum[T, U] -> Bool = sum_is_right
```

True if the value lies on the right side.
## map

```acorn
define map[V, W](self, left: T -> V, right: U -> W) -> Sum[V, W] {
    sum_map(self, left, right)
}
```

Applies maps to both sides.
## map_left

```acorn
define map_left[V](self, left: T -> V) -> Sum[V, U] {
    sum_map_left(self, left)
}
```

Applies a map to the left side.
## map_right

```acorn
define map_right[W](self, right: U -> W) -> Sum[T, W] {
    sum_map_right(self, right)
}
```

Applies a map to the right side.
## match

```acorn
Sum.match: (Sum[T*, U*], T* -> R*, U* -> R*) -> R*
```
## swap

```acorn
define swap(self) -> Sum[U, T] {
    sum_swap(self)
}
```

Interchanges the two sides.
