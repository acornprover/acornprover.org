# Group

```acorn
typeclass G: Group extends Monoid {
    inverse: G -> G
    inverse_right(a: G) {
        a * a.inverse = G.1
    }
}
```

A group is a monoid that also has inverses.

[GitHub](https://github.com/acornprover/acornlib/blob/master/src/group.ac)

---
## inverse

```acorn
inverse: G -> G
```

The inverse operation
## inverse_right

```acorn
inverse_right(a: G) {
    a * a.inverse = G.1
}
```

We only need right-inverse; we can prove left-inverse from it.
## mul
Inherited from [Semigroup](../Semigroup/#mul).
## mul_associative
Inherited from [Semigroup](../Semigroup/#mul_associative).
## mul_identity_left
Inherited from [Monoid](../Monoid/#mul_identity_left).
## mul_identity_right
Inherited from [Monoid](../Monoid/#mul_identity_right).
