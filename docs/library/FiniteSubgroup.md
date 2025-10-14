# FiniteSubgroup

```acorn
structure FiniteSubgroup[G: FiniteGroup] {
    elements: List[G]
} constraint {
    elements.is_unique and subgroup_constraint(elements.contains)
} by {
    let s = List.singleton[G](G.1)
    forall(x: G) {
        if s.contains(x) {
            x = G.1
            identity_subgroup[G].contains(x)
        } else {
            not identity_subgroup[G].contains(x)
        }
        s.contains(x) = identity_subgroup[G].contains(x)
    }
    s.contains = identity_subgroup[G].contains
    subgroup_constraint(s.contains)
}
```

A finite subgroup of a finite group.

[GitHub](https://github.com/acornprover/acornlib/blob/master/src/finite_group.ac)

---
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
