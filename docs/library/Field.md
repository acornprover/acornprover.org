# Field

```acorn
typeclass F: Field extends CommRing {
    inverse: F -> F
    field_inverse_zero {
        F.0.inverse = F.0
    }
    field_inverse(f: F) {
        f != F.0 implies f * f.inverse = F.1
    }
    zero_and_one_are_distinct {
        F.0 != F.1
    }
}
```

A field is a commutative ring with multiplicative inverses for all non-zero elements.

[GitHub](https://github.com/acornprover/acornlib/blob/master/src/field.ac)

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
## commutative
Inherited from [CommSemigroup](../CommSemigroup/#commutative).
## distrib_left
Inherited from [Semiring](../Semiring/#distrib_left).
## distrib_right
Inherited from [Semiring](../Semiring/#distrib_right).
## field_inverse

```acorn
field_inverse(f: F) {
    f != F.0 implies f * f.inverse = F.1
}
```

The definition of "multiplicative inverse" in a field.
## field_inverse_zero

```acorn
field_inverse_zero {
    F.0.inverse = F.0
}
```

We define the field inverse so that the inverse of zero is zero.
It would be nice to instead express that an inverse is "not valid" or yields "no value"
but it is not convenient to do so in the current type system.
## inverse

```acorn
inverse: F -> F
```

The multiplicative inverse function.
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
## zero_and_one_are_distinct

```acorn
zero_and_one_are_distinct {
    F.0 != F.1
}
```

Zero and one are distinct elements.
## zpow

```acorn
define zpow(self, exp: Int) -> F {
    match exp {
        Int.from_nat(n) {
            self.pow(n)
        }
        Int.neg_suc(k) {
            self.pow(k.suc).inverse
        }
    }
}
```

Extends Monoid.pow to raise a field element to an integer.
Similar to how we define Field.inverse this defines `F.0`.zpow(x) for negative x to be `0`.
