# Option

```acorn
inductive Option<T> {
    none
    some(T)
}
```

Optional values that can either contain a value of type T or be empty.
Useful for representing values that may or may not exist.

[GitHub](https://github.com/acornprover/acornlib/blob/master/src/option.ac)

---
## none

```acorn
Option.none: Option<T>
```

`Option.none` represents the absence of a value.
## some

```acorn
Option.some: T -> Option<T>
```

`Option.some(value)` represents the presence of a value.
