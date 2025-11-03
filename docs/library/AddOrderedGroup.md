# AddOrderedGroup

```acorn
typeclass G: AddOrderedGroup extends AddLeftOrderedGroup {
    right_invariance(a: G, b: G, c: G) {
        a <= b implies a + c <= b + c
    }
}
```

An ordered group has both left and right invariance.

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
Inherited from [AddLeftOrderedGroup](../AddLeftOrderedGroup/#left_invariance).
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
## right_invariance

```acorn
right_invariance(a: G, b: G, c: G) {
    a <= b implies a + c <= b + c
}
```

Right addition preserves the order relation: if `a ≤ b`, then `a + c ≤ b + c`.
## sub
Inherited from [AddGroup](../AddGroup/#sub).
## totality
Inherited from [LinearOrder](../LinearOrder/#totality).
## transitive
Inherited from [PartialOrder](../PartialOrder/#transitive).
