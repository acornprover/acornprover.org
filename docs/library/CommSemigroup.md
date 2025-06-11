# CommSemigroup

```acorn
typeclass S: CommSemigroup extends Semigroup {
    commutative(a: S, b: S) {
        a * b = b * a
    }
}
```

Extending the multiplicative semigroup with commutativity.

[GitHub](https://github.com/acornprover/acornlib/blob/master/src/comm_semigroup.ac)

---
## commutative

```acorn
commutative(a: S, b: S) {
    a * b = b * a
}
```

The multiplication operation must be commutative: `a * b = b * a`.
## mul
Inherited from [Semigroup](../Semigroup/#mul).
## mul_associative
Inherited from [Semigroup](../Semigroup/#mul_associative).
