---
title: Subgroup
---

```acorn
structure Subgroup[G: Group] {
    contains: G -> Bool
} constraint {
    subgroup_constraint(contains)
}
```

A subgroup of a group G, represented as a subset that is closed under the group operations.

[GitHub](https://github.com/acornprover/acornlib/blob/master/src/subgroup.ac)

---
## as_set

```acorn
define as_set(self) -> Set[G] {
    Set[G].new(self.contains)
}
```

The subset of group elements belonging to this subgroup.
## closure

```acorn
let closure: Set[G] -> Subgroup[G] = subgroup_closure
```

The smallest subgroup containing a set.
## contains

```acorn
Subgroup.contains: (Subgroup[G], G) -> Bool
```

True if the given element is a member of this subgroup.
## ext

```acorn
let ext = subgroup_ext[G]
```

Subgroup extensionality from pointwise equality of membership.
## intersection

```acorn
let intersection: (Subgroup[G], Subgroup[G]) -> Subgroup[G] = subgroup_intersection
```

The common part of two subgroups.
## sup

```acorn
let sup: (Subgroup[G], Subgroup[G]) -> Subgroup[G] = subgroup_sup
```

The least subgroup containing this subgroup and another subgroup.
