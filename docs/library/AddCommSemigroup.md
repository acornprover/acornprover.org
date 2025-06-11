# AddCommSemigroup

```acorn
typeclass A: AddCommSemigroup extends AddSemigroup {
    commutative(a: A, b: A) {
        a + b = b + a
    }
}
```

Extending the additive semigroup with commutativity.

[GitHub](https://github.com/acornprover/acornlib/blob/master/src/add_comm_semigroup.ac)

---
## add
Inherited from [AddSemigroup](../AddSemigroup/#add).
## add_associative
Inherited from [AddSemigroup](../AddSemigroup/#add_associative).
## commutative

```acorn
commutative(a: A, b: A) {
    a + b = b + a
}
```

The addition operation must be commutative: `a + b = b + a`.
