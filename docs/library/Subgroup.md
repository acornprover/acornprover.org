# Subgroup

```acorn
structure Subgroup<G: Group> {
    contains: G -> Bool
} constraint {
    subgroup_constraint(contains)
}
```

A subgroup of a group G, represented as a subset that is closed under the group operations.

[GitHub](https://github.com/acornprover/acornlib/blob/master/src/subgroup.ac)

---
## contains

```acorn
Subgroup.contains: (Subgroup<G>, G) -> Bool
```

True if the given element is a member of this subgroup.
