# Semiring

```acorn
typeclass S: Semiring extends AddCommMonoid, Monoid {
    distrib_left(a: S, b: S, c: S) {
        a * (b + c) = (a * b) + (a * c)
    }
    distrib_right(a: S, b: S, c: S) {
        (a + b) * c = (a * c) + (b * c)
    }
}
```

A semiring is like a ring but without additive inverses.
It has two operations where addition forms a commutative monoid, multiplication forms a monoid,
and multiplication distributes over addition.

[GitHub](https://github.com/acornprover/acornlib/blob/master/src/semiring.ac)

---
## add
Inherited from [AddSemigroup](../AddSemigroup/#add).
## add_associative
Inherited from [AddSemigroup](../AddSemigroup/#add_associative).
## add_identity_left
Inherited from [AddMonoid](../AddMonoid/#add_identity_left).
## add_identity_right
Inherited from [AddMonoid](../AddMonoid/#add_identity_right).
## commutative
Inherited from [AddCommSemigroup](../AddCommSemigroup/#commutative).
## distrib_left

```acorn
distrib_left(a: S, b: S, c: S) {
    a * (b + c) = (a * b) + (a * c)
}
```

Multiplication distributes over addition from the left: `a * (b + c) = (a * b) + (a * c)`.
## distrib_right

```acorn
distrib_right(a: S, b: S, c: S) {
    (a + b) * c = (a * c) + (b * c)
}
```

Multiplication distributes over addition from the right: `(a + b) * c = (a * c) + (b * c)`.
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
