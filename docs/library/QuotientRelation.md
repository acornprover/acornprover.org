---
title: QuotientRelation
---

```acorn
structure QuotientRelation[T] {
    rel: (T, T) -> Bool
} constraint {
    is_equivalence(rel)
}
```

A relation together with the fact that it is an equivalence relation.

[GitHub](https://github.com/acornprover/acornlib/blob/master/src/equivalence.ac)

---
## rel

```acorn
QuotientRelation.rel: (QuotientRelation[T], T, T) -> Bool
```

The relation whose equivalence classes form quotient elements.
