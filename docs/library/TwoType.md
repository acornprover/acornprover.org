---
title: TwoType
---

```acorn
inductive TwoType {
    first
    second
}
```

A type with exactly two values.

[GitHub](https://github.com/acornprover/acornlib/blob/master/src/set.ac)

---
## first

```acorn
TwoType.first: TwoType
```

The first value.
## match

```acorn
TwoType.match: (TwoType, R*, R*) -> R*
```
## second

```acorn
TwoType.second: TwoType
```

The second value.
