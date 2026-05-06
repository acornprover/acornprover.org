---
title: Iso
---

```acorn
structure Iso[O, M] {
    cat: Category[O, M]
    hom: M
    inv: M
} constraint {
    is_iso_pair(cat, hom, inv)
}
```

An isomorphism in a category, with explicit inverse data.

[GitHub](https://github.com/acornprover/acornlib/blob/master/src/category_iso.ac)

---
## cat

```acorn
Iso.cat: Iso[O, M] -> Category[O, M]
```

The ambient category.
## hom

```acorn
Iso.hom: Iso[O, M] -> M
```

The forward morphism.
## inv

```acorn
Iso.inv: Iso[O, M] -> M
```

The inverse morphism.
