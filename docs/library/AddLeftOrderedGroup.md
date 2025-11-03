# AddLeftOrderedGroup

```acorn
typeclass G: AddLeftOrderedGroup extends AddGroup, LinearOrder {
    left_invariance(a: G, b: G, c: G) {
        a <= b implies c + a <= c + b
    }
}
```

A left-ordered group is a group with a left-invariant order.
This means that if `a <= b`, then `c + a <= c + b` for any c in the group.

[GitHub](https://github.com/acornprover/acornlib/blob/master/src/add_ordered_group.ac)

---
## add
Inherited from [AddSemigroup](../AddSemigroup/#add).
## add_associative
Inherited from [AddSemigroup](../AddSemigroup/#add_associative).
## add_identity_left
Inherited from [AddMonoid](../AddMonoid/#add_identity_left).
## add_identity_right
Inherited from [AddMonoid](../AddMonoid/#add_identity_right).
## antisymmetric
Inherited from [PartialOrder](../PartialOrder/#antisymmetric).
## gt
Inherited from [PartialOrder](../PartialOrder/#gt).
## gte
Inherited from [PartialOrder](../PartialOrder/#gte).
## inverse_right
Inherited from [AddGroup](../AddGroup/#inverse_right).
## left_invariance

```acorn
left_invariance(a: G, b: G, c: G) {
    a <= b implies c + a <= c + b
}
```

Left addition preserves the order relation: if `a ≤ b`, then `c + a ≤ c + b`.
## lt
Inherited from [PartialOrder](../PartialOrder/#lt).
## lte
Inherited from [PartialOrder](../PartialOrder/#lte).
## max
Inherited from [LinearOrder](../LinearOrder/#max).
## min
Inherited from [LinearOrder](../LinearOrder/#min).
## neg
Inherited from [AddGroup](../AddGroup/#neg).
## reflexive
Inherited from [PartialOrder](../PartialOrder/#reflexive).
## sub
Inherited from [AddGroup](../AddGroup/#sub).
## totality
Inherited from [LinearOrder](../LinearOrder/#totality).
## transitive
Inherited from [PartialOrder](../PartialOrder/#transitive).
