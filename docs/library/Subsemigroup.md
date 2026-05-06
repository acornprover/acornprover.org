---
title: Subsemigroup
---

```acorn
structure Subsemigroup[S: Semigroup] {
    contains: S -> Bool
} constraint {
    subsemigroup_closure_constraint(contains)
}
```

A subsemigroup of a semigroup S, represented as a subset closed under multiplication.

[GitHub](https://github.com/acornprover/acornlib/blob/master/src/subsemigroup.ac)

---
## as_set

```acorn
define as_set(self) -> Set[S] {
    Set[S].new(self.contains)
}
```

The subset of semigroup elements belonging to this subsemigroup.
## closure

```acorn
let closure: Set[S] -> Subsemigroup[S] = subsemigroup_closure
```

The smallest subsemigroup containing a set.
## contains

```acorn
Subsemigroup.contains: (Subsemigroup[S], S) -> Bool
```

True if the given element is a member of this subsemigroup.
## ext

```acorn
let ext = subsemigroup_ext[S]
```

Subsemigroup extensionality from pointwise equality of membership.
## intersection

```acorn
let intersection: (Subsemigroup[S], Subsemigroup[S]) -> Subsemigroup[S] = subsemigroup_intersection
```

The common part of two subsemigroups.
## sup

```acorn
let sup: (Subsemigroup[S], Subsemigroup[S]) -> Subsemigroup[S] = subsemigroup_sup
```

The least subsemigroup containing this subsemigroup and another subsemigroup.
