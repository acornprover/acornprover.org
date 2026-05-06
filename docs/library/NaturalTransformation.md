---
title: NaturalTransformation
---

```acorn
structure NaturalTransformation[O1, M1, O2, M2] {
    src_functor: Functor[O1, M1, O2, M2]
    dst_functor: Functor[O1, M1, O2, M2]
    component: O1 -> M2
} constraint {
    is_natural_transformation(src_functor, dst_functor, component)
}
```

A natural transformation between two functors with matching source and target categories.

[GitHub](https://github.com/acornprover/acornlib/blob/master/src/natural_transformation.ac)

---
## component

```acorn
NaturalTransformation.component: (NaturalTransformation[O1, M1, O2, M2], O1) -> M2
```

The component morphism at each object of the source category.
## dst_functor

```acorn
NaturalTransformation.dst_functor: NaturalTransformation[O1, M1, O2, M2] -> Functor[O1, M1, O2, M2]
```

The target functor.
## src_functor

```acorn
NaturalTransformation.src_functor: NaturalTransformation[O1, M1, O2, M2] -> Functor[O1, M1, O2, M2]
```

The source functor.
