---
title: Submonoid
---

```acorn
structure Submonoid[M: Monoid] {
    contains: M -> Bool
} constraint {
    submonoid_constraint(contains)
}
```

A submonoid of a monoid M, represented as a subset closed under multiplication that contains the identity.

[GitHub](https://github.com/acornprover/acornlib/blob/master/src/submonoid.ac)

---
## as_set

```acorn
define as_set(self) -> Set[M] {
    Set[M].new(self.contains)
}
```

The subset of monoid elements belonging to this submonoid.
## closure

```acorn
let closure: Set[M] -> Submonoid[M] = submonoid_closure
```

The smallest submonoid containing a set.
## contains

```acorn
Submonoid.contains: (Submonoid[M], M) -> Bool
```

True if the given element is a member of this submonoid.
## ext

```acorn
let ext = submonoid_ext[M]
```

Submonoid extensionality from pointwise equality of membership.
## intersection

```acorn
let intersection: (Submonoid[M], Submonoid[M]) -> Submonoid[M] = submonoid_intersection
```

The common part of two submonoids.
## sup

```acorn
let sup: (Submonoid[M], Submonoid[M]) -> Submonoid[M] = submonoid_sup
```

The least submonoid containing this submonoid and another submonoid.
