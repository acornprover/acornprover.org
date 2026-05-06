---
title: QuotientOver
---

```acorn
structure QuotientOver[T] {
    qrel: QuotientRelation[T]
    carrier: Set[T]
} constraint {
    is_equivalence_class(qrel.rel, carrier)
}
```

A quotient element whose relation is carried as part of the element.

[GitHub](https://github.com/acornprover/acornlib/blob/master/src/equivalence.ac)

---
## carrier

```acorn
QuotientOver.carrier: QuotientOver[T] -> Set[T]
```

The equivalence class represented by this quotient element.
## qrel

```acorn
QuotientOver.qrel: QuotientOver[T] -> QuotientRelation[T]
```

The equivalence relation whose classes form this quotient element.
