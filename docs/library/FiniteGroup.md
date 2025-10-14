# FiniteGroup

```acorn
typeclass G: FiniteGroup extends Group {
    elements: List[G]
    all_group_elements_in_elements(g: G) {
        G.elements.contains_every
    }
    unique_elements_list {
        G.elements.is_unique
    }
}
```

A group is finite if its elements can be placed in a (finite) list

[GitHub](https://github.com/acornprover/acornlib/blob/master/src/finite_group.ac)

---
## all_group_elements_in_elements

```acorn
all_group_elements_in_elements(g: G) {
    G.elements.contains_every
}
```
## cyclic_subgroup

```acorn
define cyclic_subgroup(self) -> FiniteSubgroup[G] {
    FiniteSubgroup.new(map(G.order.range, self.pow).unique)
}
```
## elements

```acorn
elements: List[G]
```
## identity_subgroup

```acorn
let identity_subgroup: FiniteSubgroup[G] = FiniteSubgroup.new(List.singleton[G](G.1))
```
## inverse
Inherited from [Group](../Group/#inverse).
## inverse_right
Inherited from [Group](../Group/#inverse_right).
## mul
Inherited from [Semigroup](../Semigroup/#mul).
## mul_associative
Inherited from [Semigroup](../Semigroup/#mul_associative).
## mul_identity_left
Inherited from [Monoid](../Monoid/#mul_identity_left).
## mul_identity_right
Inherited from [Monoid](../Monoid/#mul_identity_right).
## order

```acorn
let order: Nat = G.elements.length
```
## pow
Inherited from [Monoid](../Monoid/#pow).
## unique_elements_list

```acorn
unique_elements_list {
    G.elements.is_unique
}
```
