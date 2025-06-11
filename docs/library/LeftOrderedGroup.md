# LeftOrderedGroup

```acorn
typeclass G: LeftOrderedGroup extends Group, LinearOrder {
    left_invariance(a: G, b: G, c: G) {
        a <= b implies c * a <= c * b
    }
}
```

A left-ordered group is a group with a left-invariant order.
This means that if `a <= b`, then `c * a <= c * b` for any c in the group.

[GitHub](https://github.com/acornprover/acornlib/blob/master/src/ordered_group.ac)

---
## antisymmetric
Inherited from [PartialOrder](../PartialOrder/#antisymmetric).
## gt
Inherited from [PartialOrder](../PartialOrder/#gt).
## gte
Inherited from [PartialOrder](../PartialOrder/#gte).
## inverse
Inherited from [Group](../Group/#inverse).
## inverse_right
Inherited from [Group](../Group/#inverse_right).
## left_invariance

```acorn
left_invariance(a: G, b: G, c: G) {
    a <= b implies c * a <= c * b
}
```

Left multiplication preserves the order relation: if `a ≤ b`, then `c * a ≤ c * b`.
## lt
Inherited from [PartialOrder](../PartialOrder/#lt).
## lte
Inherited from [PartialOrder](../PartialOrder/#lte).
## max
Inherited from [LinearOrder](../LinearOrder/#max).
## min
Inherited from [LinearOrder](../LinearOrder/#min).
## mul
Inherited from [Semigroup](../Semigroup/#mul).
## mul_associative
Inherited from [Semigroup](../Semigroup/#mul_associative).
## mul_identity_left
Inherited from [Monoid](../Monoid/#mul_identity_left).
## mul_identity_right
Inherited from [Monoid](../Monoid/#mul_identity_right).
## reflexive
Inherited from [PartialOrder](../PartialOrder/#reflexive).
## totality
Inherited from [LinearOrder](../LinearOrder/#totality).
## transitive
Inherited from [PartialOrder](../PartialOrder/#transitive).
