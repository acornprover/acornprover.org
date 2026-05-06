---
title: Pair
---

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
## fst

```acorn
let fst: Pair[T, U] -> T = pair_first
```

The first projection.
## map

```acorn
define map[V, W](self, f: T -> V, g: U -> W) -> Pair[V, W] {
    pair_map(f, g, self)
}
```

Applies functions to both components.
## map_first

```acorn
define map_first[V](self, f: T -> V) -> Pair[V, U] {
    pair_map_first(f, self)
}
```

Applies a function to the first component.
## map_second

```acorn
define map_second[V](self, f: U -> V) -> Pair[T, V] {
    pair_map_second(f, self)
}
```

Applies a function to the second component.
## second

```acorn
Pair.second: Pair[T, U] -> U
```

The second element of the pair.
## snd

```acorn
let snd: Pair[T, U] -> U = pair_second
```

The second projection.
## swap

```acorn
define swap(self) -> Pair[U, T] {
    Pair.new(self.second, self.first)
}
```

Swaps the first and second elements of the pair.
