---
title: Subring
---

```acorn
structure Subring[R: Ring] {
    contains: R -> Bool
} constraint {
    subring_constraint(contains)
}
```

A subring of a ring, represented as a subset containing zero and one and closed under ring operations.

[GitHub](https://github.com/acornprover/acornlib/blob/master/src/subring.ac)

---
## as_set

```acorn
define as_set(self) -> Set[R] {
    Set[R].new(self.contains)
}
```

The subset of ring elements belonging to this subring.
## closure

```acorn
let closure: Set[R] -> Subring[R] = subring_closure
```

The smallest subring containing a set.
## contains

```acorn
Subring.contains: (Subring[R], R) -> Bool
```

True if the given element is a member of this subring.
## ext

```acorn
let ext = subring_ext[R]
```

Subring extensionality from pointwise equality of membership.
## intersection

```acorn
let intersection: (Subring[R], Subring[R]) -> Subring[R] = subring_intersection
```

The common part of two subrings.
## sup

```acorn
let sup: (Subring[R], Subring[R]) -> Subring[R] = subring_sup
```

The least subring containing this subring and another subring.
