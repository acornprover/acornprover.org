---
title: AddSemigroup
---

```acorn
typeclass A: AddSemigroup extends Add {
    add_associative(a: A, b: A, c: A) {
        a + (b + c) = (a + b) + c
    }
}
```

An additive semigroup is associative, and that's about it.

[GitHub](https://github.com/acornprover/acornlib/blob/master/src/add_semigroup.ac)

---
## add
Inherited from [Add](../Add/#add).
## add_associative

```acorn
add_associative(a: A, b: A, c: A) {
    a + (b + c) = (a + b) + c
}
```

The addition operation must be associative: `(a + b) + c = a + (b + c)`.
