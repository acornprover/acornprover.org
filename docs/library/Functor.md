---
title: Functor
---

```acorn
structure Functor[O1, M1, O2, M2] {
    src_cat: Category[O1, M1]
    dst_cat: Category[O2, M2]
    obj_map: O1 -> O2
    mor_map: M1 -> M2
} constraint {
    is_functor(src_cat, dst_cat, obj_map, mor_map)
}
```

A functor between two categories.

[GitHub](https://github.com/acornprover/acornlib/blob/master/src/functor.ac)

---
## dst_cat

```acorn
Functor.dst_cat: Functor[O1, M1, O2, M2] -> Category[O2, M2]
```

The target category.
## mor_map

```acorn
Functor.mor_map: (Functor[O1, M1, O2, M2], M1) -> M2
```

The action on morphisms.
## obj_map

```acorn
Functor.obj_map: (Functor[O1, M1, O2, M2], O1) -> O2
```

The action on objects.
## src_cat

```acorn
Functor.src_cat: Functor[O1, M1, O2, M2] -> Category[O1, M1]
```

The source category.
