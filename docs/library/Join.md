---
title: Join
---

```acorn
typeclass A: Join {
    join: (A, A) -> A
}
```

A type with a binary join operation.

[GitHub](https://github.com/acornprover/acornlib/blob/master/src/lattice.ac)

---
## join

```acorn
join: (A, A) -> A
```

The binary least upper bound operation.
