---
title: AddSubgroup
---

```acorn
structure AddSubgroup[G: AddGroup] {
    contains: G -> Bool
} constraint {
    add_subgroup_constraint(contains)
}
```

An additive subgroup of an additive group `G`, represented as a subset closed under the additive group operations.

[GitHub](https://github.com/acornprover/acornlib/blob/master/src/add_subgroup.ac)

---
## as_set

```acorn
define as_set(self) -> Set[G] {
    Set[G].new(self.contains)
}
```

The subset of additive group elements belonging to this additive subgroup.
## closure

```acorn
let closure: Set[G] -> AddSubgroup[G] = add_subgroup_closure
```

The smallest additive subgroup containing a set.
## contains

```acorn
AddSubgroup.contains: (AddSubgroup[G], G) -> Bool
```

True if the given element is a member of this additive subgroup.
## ext

```acorn
let ext = add_subgroup_ext[G]
```

Additive subgroup extensionality from pointwise equality of membership.
## intersection

```acorn
let intersection: (AddSubgroup[G], AddSubgroup[G]) -> AddSubgroup[G] = add_subgroup_intersection
```

The common part of two additive subgroups.
## sup

```acorn
let sup: (AddSubgroup[G], AddSubgroup[G]) -> AddSubgroup[G] = add_subgroup_sup
```

The least additive subgroup containing this additive subgroup and another additive subgroup.
