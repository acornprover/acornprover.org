# AddMonoid

```acorn
typeclass A: AddMonoid extends AddSemigroup {
    0: A
    add_identity_right(a: A) {
        a + A.0 = a
    }
    add_identity_left(a: A) {
        A.0 + a = a
    }
}
```

An additive monoid is an additive semigroup with an identity element.

[GitHub](https://github.com/acornprover/acornlib/blob/master/src/add_monoid.ac)

---
## add
Inherited from [AddSemigroup](../AddSemigroup/#add).
## add_associative
Inherited from [AddSemigroup](../AddSemigroup/#add_associative).
## add_identity_left

```acorn
add_identity_left(a: A) {
    A.0 + a = a
}
```

The identity element must satisfy the identity property on the left.
## add_identity_right

```acorn
add_identity_right(a: A) {
    a + A.0 = a
}
```

The identity element must satisfy the identity property on the right.
