# OrderedField

```acorn
typeclass F: OrderedField extends Field, AddOrderedGroup {
    mul_preserves_nonnegativity(a: F, b: F) {
        F.0 <= a and F.0 <= b implies F.0 <= a * b
    }
}
```

A field with a total order compatible with the field operations.

[GitHub](https://github.com/acornprover/acornlib/blob/master/src/ordered_field.ac)

---
## add
Inherited from [AddSemigroup](../AddSemigroup/#add).
## add_associative
Inherited from [AddSemigroup](../AddSemigroup/#add_associative).
## add_commutative
Inherited from [AddCommSemigroup](../AddCommSemigroup/#add_commutative).
## add_identity_left
Inherited from [AddMonoid](../AddMonoid/#add_identity_left).
## add_identity_right
Inherited from [AddMonoid](../AddMonoid/#add_identity_right).
## antisymmetric
Inherited from [PartialOrder](../PartialOrder/#antisymmetric).
## commutative
Inherited from [CommSemigroup](../CommSemigroup/#commutative).
## distrib_left
Inherited from [Semiring](../Semiring/#distrib_left).
## distrib_right
Inherited from [Semiring](../Semiring/#distrib_right).
## field_inverse
Inherited from [Field](../Field/#field_inverse).
## field_inverse_zero
Inherited from [Field](../Field/#field_inverse_zero).
## gt
Inherited from [PartialOrder](../PartialOrder/#gt).
## gte
Inherited from [PartialOrder](../PartialOrder/#gte).
## inverse
Inherited from [Field](../Field/#inverse).
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
## mul
Inherited from [Semigroup](../Semigroup/#mul).
## mul_associative
Inherited from [Semigroup](../Semigroup/#mul_associative).
## mul_identity_left
Inherited from [Monoid](../Monoid/#mul_identity_left).
## mul_identity_right
Inherited from [Monoid](../Monoid/#mul_identity_right).
## mul_preserves_nonnegativity

```acorn
mul_preserves_nonnegativity(a: F, b: F) {
    F.0 <= a and F.0 <= b implies F.0 <= a * b
}
```

product of non-negative elements is non-negative
## mul_zero_left
Inherited from [Semiring](../Semiring/#mul_zero_left).
## mul_zero_right
Inherited from [Semiring](../Semiring/#mul_zero_right).
## neg
Inherited from [AddGroup](../AddGroup/#neg).
## pow
Inherited from [Monoid](../Monoid/#pow).
## reflexive
Inherited from [PartialOrder](../PartialOrder/#reflexive).
## right_invariance
Inherited from [AddOrderedGroup](../AddOrderedGroup/#right_invariance).
## sub
Inherited from [AddGroup](../AddGroup/#sub).
## totality
Inherited from [LinearOrder](../LinearOrder/#totality).
## transitive
Inherited from [PartialOrder](../PartialOrder/#transitive).
## zero_and_one_are_distinct
Inherited from [Field](../Field/#zero_and_one_are_distinct).
## zpow
Inherited from [Field](../Field/#zpow).
