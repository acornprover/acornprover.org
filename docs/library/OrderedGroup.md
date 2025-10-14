# OrderedGroup

```acorn
typeclass G: OrderedGroup extends LeftOrderedGroup {
    right_invariance(a: G, b: G, c: G) {
        a <= b implies a * c <= b * c
    }
}
```

An ordered group has both left and right invariance of the order under multiplication.

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
Inherited from [LeftOrderedGroup](../LeftOrderedGroup/#left_invariance).
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
## pow
Inherited from [Monoid](../Monoid/#pow).
## reflexive
Inherited from [PartialOrder](../PartialOrder/#reflexive).
## right_invariance

```acorn
right_invariance(a: G, b: G, c: G) {
    a <= b implies a * c <= b * c
}
```

Right multiplication preserves the order relation: if `a ≤ b`, then `a * c ≤ b * c`.
## totality
Inherited from [LinearOrder](../LinearOrder/#totality).
## transitive
Inherited from [PartialOrder](../PartialOrder/#transitive).
