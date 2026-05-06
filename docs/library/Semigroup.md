---
title: Semigroup
---

```acorn
typeclass S: Semigroup extends Mul {
    mul_associative(a: S, b: S, c: S) {
        a * (b * c) = (a * b) * c
    }
}
```

The default semigroup uses the multiplication operator..
For an additive semigroup, see add_semigroup.ac.

[GitHub](https://github.com/acornprover/acornlib/blob/master/src/semigroup.ac)

---
## mul
Inherited from [Mul](../Mul/#mul).
## mul_associative

```acorn
mul_associative(a: S, b: S, c: S) {
    a * (b * c) = (a * b) * c
}
```

The multiplication operation must be associative: `(a * b) * c = a * (b * c)`.
