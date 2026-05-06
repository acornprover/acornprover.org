---
title: Category
---

```acorn
structure Category[O, M] {
    src: M -> O
    dst: M -> O
    identity: O -> M
    compose: (M, M) -> M
} constraint {
    is_category(src, dst, identity, compose)
}
```

A category with object type `O` and morphism type `M`.
The composition operation is total; its behavior on non-composable pairs is unconstrained.

[GitHub](https://github.com/acornprover/acornlib/blob/master/src/category.ac)

---
## compose

```acorn
Category.compose: (Category[O, M], M, M) -> M
```

Composition of morphisms; `compose(f, g)` is `f` after `g`, valid when `src(f) = dst(g)`.
## dst

```acorn
Category.dst: (Category[O, M], M) -> O
```

The target object of a morphism.
## identity

```acorn
Category.identity: (Category[O, M], O) -> M
```

The identity morphism on each object.
## src

```acorn
Category.src: (Category[O, M], M) -> O
```

The source object of a morphism.
