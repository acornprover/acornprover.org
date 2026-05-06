---
title: FiniteSubgroup
---

```acorn
structure FiniteSubgroup[G: FiniteGroup] {
    elements: List[G]
} constraint {
    elements.is_unique and subgroup_constraint(elements.contains)
} by {
    let s = List.singleton[G](G.1)
    forall(x: G) {
        if s.contains(x) {
        } else {
            not identity_subgroup[G].contains(x)
        }
        not List.nil[G].contains(x)
        List.cons(G.1, List.nil[G]) = List.singleton(G.1)
        s.contains(x) = (x = G.1)
        s.contains(x) = identity_subgroup[G].contains(x)
    }
    s.contains = identity_subgroup[G].contains
    subgroup_constraint(s.contains)
}
```

A finite subgroup of a finite group.

[GitHub](https://github.com/acornprover/acornlib/blob/master/src/finite_group.ac)

---
## as_finite_set

```acorn
let as_finite_set: FiniteSubgroup[G] -> FiniteSet[G] = finite_subgroup_as_finite_set
```

The finite set of elements of this finite subgroup.
## as_set

```acorn
define as_set(self) -> Set[G] {
    self.as_subgroup.as_set
}
```

The subset of group elements belonging to this finite subgroup.
## as_subgroup

```acorn
let as_subgroup: FiniteSubgroup[G] -> Subgroup[G] = finite_subgroup_as_subgroup
```

The subgroup determined by the elements of this finite subgroup.
## contains

```acorn
define contains(self, x: G) -> Bool {
    self.as_subgroup.contains(x)
}
```

Membership predicate.
## elements

```acorn
FiniteSubgroup.elements: FiniteSubgroup[G] -> List[G]
```

A list containing all elements of the subgroup.
## order

```acorn
define order(self) -> Nat {
    self.elements.length
}
```

The number of elements in the subgroup.
