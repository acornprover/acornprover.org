# Pair

```acorn
structure Pair[T, U] {
    first: T
    second: U
}
```

An ordered pair of two values, possibly of different types.

[GitHub](https://github.com/acornprover/acornlib/blob/master/src/pair.ac)

---
## first

```acorn
Pair.first: Pair[T, U] -> T
```

The first element of the pair.
## second

```acorn
Pair.second: Pair[T, U] -> U
```

The second element of the pair.
## swap

```acorn
define swap(self) -> Pair[U, T] {
    Pair.new(self.second, self.first)
}
```

Swaps the first and second elements of the pair.
