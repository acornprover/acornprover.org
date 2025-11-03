# FiniteSet

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
define difference(self, other: FiniteSet[T]) -> FiniteSet[T] {
    FiniteSet.new(self.underlying_set.difference(other.underlying_set))
}
```

Difference of finite sets.
## empty

```acorn
let empty: FiniteSet[T] = FiniteSet.new(Set[T].empty_set)
```

The empty finite set.
## insert

```acorn
define insert(self, item: T) -> FiniteSet[T] {
    FiniteSet.new(self.underlying_set.insert(item))
}
```

Insert preserves finiteness.
## intersection

```acorn
define intersection(self, other: FiniteSet[T]) -> FiniteSet[T] {
    FiniteSet.new(self.underlying_set.intersection(other.underlying_set))
}
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
define remove(self, item: T) -> FiniteSet[T] {
    FiniteSet.new(self.underlying_set.remove(item))
}
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
define union(self, other: FiniteSet[T]) -> FiniteSet[T] {
    FiniteSet.new(self.underlying_set.union(other.underlying_set))
}
```

Union of finite sets.
