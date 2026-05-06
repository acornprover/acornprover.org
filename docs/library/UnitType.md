---
title: UnitType
---

```acorn
inductive UnitType {
    point
}
```

A type with exactly one inhabitant.

[GitHub](https://github.com/acornprover/acornlib/blob/master/src/terminal_category.ac)

---
## match

```acorn
UnitType.match: (UnitType, R*) -> R*
```
## point

```acorn
UnitType.point: UnitType
```

The unique inhabitant.
