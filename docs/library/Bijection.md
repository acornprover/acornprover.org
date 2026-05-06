---
title: Bijection
---

```acorn
structure Bijection[T, U] {
    map: T -> U
} constraint {
    is_bijection_fn(map)
}
```

A bijection between two types.

[GitHub](https://github.com/acornprover/acornlib/blob/master/src/functions.ac)

---
## map

```acorn
Bijection.map: (Bijection[T, U], T) -> U
```

The underlying map.
