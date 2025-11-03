# Set

```acorn
structure Set[K] {
    contains: K -> Bool
}
```

Sets with elements of type `K` are defined as Boolean functions over `K`

[GitHub](https://github.com/acornprover/acornlib/blob/master/src/set.ac)

---
## c

```acorn
define c(self) -> Set[K] {
    Set[K].new(negate_fun(self.contains))
}
```

The complement of this set.
## cardinality_at_most

```acorn
define cardinality_at_most(self, n: Nat) -> Bool {
    exists(superset: List[K]) {
        forall(x: K) {
            self.contains(x) implies superset.contains(x)
        } and superset.length <= n
    }
}
```

True if the cardinality is at most n.
## cardinality_is

```acorn
define cardinality_is(self, n: Nat) -> Bool {
    exists(containing_list: List[K]) {
        forall(x: K) {
            self.contains(x) implies containing_list.contains(x)
        } and containing_list.filter(self.contains).unique.length = n
    }
}
```

True if the cardinality equals n.
## contains

```acorn
Set.contains: (Set[K], K) -> Bool
```

True if the element is in the set.
## difference

```acorn
define difference(self, s: Set[K]) -> Set[K] {
    Set[K].new(elem_in_difference(self, s))
}
```

self \ s
## empty_set

```acorn
let empty_set = Set[K].new(constant_false[K])
```

Set basics
## insert

```acorn
define insert(self, item: K) -> Set[K] {
    Set[K].new(functional_insert(self.contains, item))
}
```

Adds an element to the set. If the item is already present, this is a no-op.
## intersection

```acorn
define intersection(self, s: Set[K]) -> Set[K] {
    Set[K].new(elem_in_intersection(self, s))
}
```

self ∩ s
## is_disjoint

```acorn
define is_disjoint(self, other: Set[K]) -> Bool {
    forall(x: K) {
        not (self.contains(x) and other.contains(x))
    }
}
```

True if the two sets have no elements in common.
## is_empty

```acorn
define is_empty(self) -> Bool {
    forall(x: K) {
        not self.contains(x)
    }
}
```

True if the set has no elements.
## is_finite

```acorn
define is_finite(self) -> Bool {
    finite_constraint(self.contains)
}
```

True if the set contains only finitely many elements.
## is_singleton

```acorn
define is_singleton(self) -> Bool {
    exists(a: K) {
        self = Set[K].singleton(a)
    }
}
```

True if the set contains exactly one element.
## remove

```acorn
define remove(self, item: K) -> Set[K] {
    Set[K].new(functional_remove(self.contains, item))
}
```

Removes an element from the set. If the item isn't present, this is a no-op.
## singleton

```acorn
let singleton: K -> Set[K] = function(a: K) {
    Set[K].new(singleton_fun(a))
}
```

Creates a set containing exactly one element.
## subset

```acorn
define subset(self, s: Set[K]) -> Bool {
    forall(x: K) {
        self.contains(x) implies s.contains(x)
    }
}
```

self ⊆ s
## superset

```acorn
define superset(self, s: Set[K]) -> Bool {
    s.subset(self)
}
```

self ⊇ s
## union

```acorn
define union(self, s: Set[K]) -> Set[K] {
    Set.new(elem_in_union(self, s))
}
```

self ∪ s
## universal_set

```acorn
let universal_set = Set[K].new(negate_fun(constant_false[K]))
```

The universal set containing all elements of type K.
