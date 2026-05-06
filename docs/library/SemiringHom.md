---
title: SemiringHom
---

```acorn
structure SemiringHom[S: Semiring, T: Semiring] {
    hom: S -> T
} constraint {
    is_semiring_hom(hom)
}
```

A semiring homomorphism preserving addition, multiplication, zero, and one.

[GitHub](https://github.com/acornprover/acornlib/blob/master/src/semiring_hom.ac)

---
## ext

```acorn
let ext = semiring_hom_ext[S, T]
```

Semiring homomorphism extensionality from pointwise equality of the homomorphism.
## hom

```acorn
SemiringHom.hom: (SemiringHom[S, T], S) -> T
```

The mapping for the homomorphism.
