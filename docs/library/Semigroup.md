# Semigroup

```acorn
typeclass S: Semigroup {
    mul: (S, S) -> S
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

```acorn
mul: (S, S) -> S
```

The binary operation that combines two elements of the semigroup.
## mul_associative

```acorn
mul_associative(a: S, b: S, c: S) {
    a * (b * c) = (a * b) * c
}
```

The multiplication operation must be associative: `(a * b) * c = a * (b * c)`.
