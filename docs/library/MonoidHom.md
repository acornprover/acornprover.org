---
title: MonoidHom
---

```acorn
structure MonoidHom[M: Monoid, N: Monoid] {
    hom: M -> N
} constraint {
    is_monoid_hom(hom)
}
```

A monoid homomorphism that preserves the operation and the identity.

[GitHub](https://github.com/acornprover/acornlib/blob/master/src/monoid.ac)

---
## ext

```acorn
let ext = monoid_hom_ext[M, N]
```

Monoid homomorphism extensionality from pointwise equality of the homomorphism.
## hom

```acorn
MonoidHom.hom: (MonoidHom[M, N], M) -> N
```

The mapping for the homomorphism.
