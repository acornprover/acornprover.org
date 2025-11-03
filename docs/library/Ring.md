# Ring

```acorn
typeclass Ring extends Semiring, AddCommGroup
```

A ring is a structure with two operations (addition and multiplication) where addition forms an abelian group,
multiplication forms a monoid, and multiplication distributes over addition.

[GitHub](https://github.com/acornprover/acornlib/blob/master/src/ring.ac)

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
## distrib_left
Inherited from [Semiring](../Semiring/#distrib_left).
## distrib_right
Inherited from [Semiring](../Semiring/#distrib_right).
## inverse_right
Inherited from [AddGroup](../AddGroup/#inverse_right).
## mul
Inherited from [Semigroup](../Semigroup/#mul).
## mul_associative
Inherited from [Semigroup](../Semigroup/#mul_associative).
## mul_identity_left
Inherited from [Monoid](../Monoid/#mul_identity_left).
## mul_identity_right
Inherited from [Monoid](../Monoid/#mul_identity_right).
## mul_zero_left
Inherited from [Semiring](../Semiring/#mul_zero_left).
## mul_zero_right
Inherited from [Semiring](../Semiring/#mul_zero_right).
## neg
Inherited from [AddGroup](../AddGroup/#neg).
## pow
Inherited from [Monoid](../Monoid/#pow).
## sub
Inherited from [AddGroup](../AddGroup/#sub).
