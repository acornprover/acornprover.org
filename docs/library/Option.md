---
title: Option
---

```acorn
inductive Option[T] {
    none
    some(T)
}
```

Optional values that can either contain a value of type T or be empty.
Useful for representing values that may or may not exist.

[GitHub](https://github.com/acornprover/acornlib/blob/master/src/prelude.ac)

---
## bind

```acorn
define bind[U](self, f: T -> Option[U]) -> Option[U] {
    option_bind(self, f)
}
```

The result of applying an optional-value function to this optional value.
## get_or_else

```acorn
define get_or_else(self, fallback: T) -> T {
    option_get_or_else(self, fallback)
}
```

The contained value, or the given fallback when there is no contained value.
## is_none

```acorn
let is_none: Option[T] -> Bool = option_is_none
```

True if the optional value contains no element.
## is_some

```acorn
let is_some: Option[T] -> Bool = option_is_some
```

True if the optional value contains an element.
## map

```acorn
define map[U](self, f: T -> U) -> Option[U] {
    option_map(self, f)
}
```

The image of this optional value under a function.
## match

```acorn
Option.match: (Option[T*], R*, T* -> R*) -> R*
```
## none

```acorn
Option.none: Option[T]
```

`Option.none` represents the absence of a value.
## some

```acorn
Option.some: T -> Option[T]
```

`Option.some(value)` represents the presence of a value.
