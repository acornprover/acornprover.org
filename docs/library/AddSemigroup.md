# AddSemigroup

```acorn
typeclass A: AddSemigroup {
    add: (A, A) -> A
    add_associative(a: A, b: A, c: A) {
        a + (b + c) = (a + b) + c
    }
}
```

An additive semigroup is associative, and that's about it.

[GitHub](https://github.com/acornprover/acornlib/blob/master/src/add_semigroup.ac)

---
## add

```acorn
add: (A, A) -> A
```

The binary addition operation that combines two elements of the semigroup.
## add_associative

```acorn
add_associative(a: A, b: A, c: A) {
    a + (b + c) = (a + b) + c
}
```

The addition operation must be associative: `(a + b) + c = a + (b + c)`.
