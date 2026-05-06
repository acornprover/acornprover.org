---
title: AddSubmonoid
---

```acorn
structure AddSubmonoid[M: AddMonoid] {
    contains: M -> Bool
} constraint {
    add_submonoid_constraint(contains)
}
```

An additive submonoid of an additive monoid, represented as a subset containing zero and closed under addition.

[GitHub](https://github.com/acornprover/acornlib/blob/master/src/add_submonoid.ac)

---
## as_set

```acorn
define as_set(self) -> Set[M] {
    Set[M].new(self.contains)
}
```

The subset of additive monoid elements belonging to this additive submonoid.
## closure

```acorn
let closure: Set[M] -> AddSubmonoid[M] = add_submonoid_closure
```

The smallest additive submonoid containing a set.
## contains

```acorn
AddSubmonoid.contains: (AddSubmonoid[M], M) -> Bool
```

True if the given element is a member of this additive submonoid.
## ext

```acorn
let ext = add_submonoid_ext[M]
```

Additive submonoid extensionality from pointwise equality of membership.
## intersection

```acorn
let intersection: (AddSubmonoid[M], AddSubmonoid[M]) -> AddSubmonoid[M] = add_submonoid_intersection
```

The common part of two additive submonoids.
## sup

```acorn
let sup: (AddSubmonoid[M], AddSubmonoid[M]) -> AddSubmonoid[M] = add_submonoid_sup
```

The least additive submonoid containing this additive submonoid and another additive submonoid.
