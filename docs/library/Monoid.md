# Monoid

```acorn
typeclass M: Monoid extends Semigroup {
    1: M
    mul_identity_right(a: M) {
        a * M.1 = a
    }
    mul_identity_left(a: M) {
        M.1 * a = a
    }
}
```

A multiplicative monoid is a multiplicative semigroup with an identity element.
Note that you need the identity to work on the right side as well as the left.
One doesn't imply the other.

[GitHub](https://github.com/acornprover/acornlib/blob/master/src/monoid.ac)

---
## mul
Inherited from [Semigroup](../Semigroup/#mul).
## mul_associative
Inherited from [Semigroup](../Semigroup/#mul_associative).
## mul_identity_left

```acorn
mul_identity_left(a: M) {
    M.1 * a = a
}
```

The identity element must satisfy the identity property on the left.
## mul_identity_right

```acorn
mul_identity_right(a: M) {
    a * M.1 = a
}
```

The identity element must satisfy the identity property on the right.
