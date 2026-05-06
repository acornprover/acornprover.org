---
title: Quotient
---

```acorn
structure Quotient[T] {
    rel: (T, T) -> Bool
    carrier: Set[T]
} constraint {
    is_equivalence(rel) and is_equivalence_class(rel, carrier)
}
```

The quotient of a type by a relation, represented by equivalence classes.

[GitHub](https://github.com/acornprover/acornlib/blob/master/src/equivalence.ac)

---
## carrier

```acorn
Quotient.carrier: Quotient[T] -> Set[T]
```

The equivalence class represented by this quotient element.
## rel

```acorn
Quotient.rel: (Quotient[T], T, T) -> Bool
```

The equivalence relation whose classes form this quotient.
