---
title: FiniteSet
---

```acorn
structure FiniteSet[T] {
    underlying_set: Set[T]
} constraint {
    underlying_set.is_finite
}
```

A finite set is a `Set` bundled with a finiteness proof.

[GitHub](https://github.com/acornprover/acornlib/blob/master/src/finite_set.ac)

---
## as_set

```acorn
define as_set(self) -> Set[T] {
    self.underlying_set
}
```

Access the underlying set.
## cardinality_at_most

```acorn
define cardinality_at_most(self, n: Nat) -> Bool {
    self.underlying_set.cardinality_at_most(n)
}
```

Cardinality helper lifted from sets.
## cardinality_is

```acorn
define cardinality_is(self, n: Nat) -> Bool {
    self.underlying_set.cardinality_is(n)
}
```

True if the cardinality equals n.
## contains

```acorn
define contains(self, x: T) -> Bool {
    self.underlying_set.contains(x)
}
```

Membership predicate.
## difference

```acorn
let difference: (FiniteSet[T], FiniteSet[T]) -> FiniteSet[T] = fs_difference
```

Difference of finite sets.
## empty

```acorn
let empty: FiniteSet[T] = fs_empty(Set[T].empty_set)
```

The empty finite set.
## ext

```acorn
let ext = finite_set_ext[T]
```

Finite set extensionality from equality of the underlying sets.
## from_list

```acorn
let from_list: List[T] -> FiniteSet[T] = fs_from_list
```

The finite set whose elements are the elements of the list.
## image

```acorn
define image[U](self, f: T -> U) -> FiniteSet[U] {
    fs_image(self, f)
}
```

Image of a finite set under a function.
## insert

```acorn
let insert: (FiniteSet[T], T) -> FiniteSet[T] = fs_insert
```

Insert preserves finiteness.
## intersection

```acorn
let intersection: (FiniteSet[T], FiniteSet[T]) -> FiniteSet[T] = fs_intersection
```

Intersection of finite sets.
## is_disjoint

```acorn
define is_disjoint(self, other: FiniteSet[T]) -> Bool {
    self.underlying_set.is_disjoint(other.underlying_set)
}
```

Disjointness predicate.
## is_empty

```acorn
define is_empty(self) -> Bool {
    self.underlying_set.is_empty
}
```

Empty predicate.
## remove

```acorn
let remove: (FiniteSet[T], T) -> FiniteSet[T] = fs_remove
```

Remove preserves finiteness.
## subset_eq

```acorn
define subset_eq(self, other: FiniteSet[T]) -> Bool {
    self.underlying_set.subset(other.underlying_set)
}
```

Subset relation lifted from sets.
## superset_eq

```acorn
define superset_eq(self, other: FiniteSet[T]) -> Bool {
    self.underlying_set.superset(other.underlying_set)
}
```

Superset relation lifted from sets.
## underlying_set

```acorn
FiniteSet.underlying_set: FiniteSet[T] -> Set[T]
```

The underlying set.
## union

```acorn
let union: (FiniteSet[T], FiniteSet[T]) -> FiniteSet[T] = fs_union
```

Union of finite sets.
