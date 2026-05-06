---
title: Meet
---

```acorn
typeclass A: Meet {
    meet: (A, A) -> A
}
```

A type with a binary meet operation.

[GitHub](https://github.com/acornprover/acornlib/blob/master/src/lattice.ac)

---
## meet

```acorn
meet: (A, A) -> A
```

The binary greatest lower bound operation.
