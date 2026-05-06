---
title: Unit
---

```acorn
structure Unit[M: Monoid] {
    val: M
    inv: M
} constraint {
    val * inv = M.1 and inv * val = M.1
}
```

A unit of a monoid is an element with a two-sided multiplicative inverse.

[GitHub](https://github.com/acornprover/acornlib/blob/master/src/units.ac)

---
## ext

```acorn
let ext = unit_ext[M]
```

Unit extensionality from equality of the value and inverse.
## inv

```acorn
Unit.inv: Unit[M] -> M
```

A two-sided inverse of the element.
## val

```acorn
Unit.val: Unit[M] -> M
```

The element of the monoid.
