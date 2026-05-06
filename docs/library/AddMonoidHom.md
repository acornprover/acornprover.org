---
title: AddMonoidHom
---

```acorn
structure AddMonoidHom[A: AddMonoid, B: AddMonoid] {
    hom: A -> B
} constraint {
    is_add_monoid_hom(hom)
}
```

An additive monoid homomorphism that preserves the operation and the identity.

[GitHub](https://github.com/acornprover/acornlib/blob/master/src/add_monoid.ac)

---
## ext

```acorn
let ext = add_monoid_hom_ext[A, B]
```

Additive monoid homomorphism extensionality from pointwise equality of the homomorphism.
## hom

```acorn
AddMonoidHom.hom: (AddMonoidHom[A, B], A) -> B
```

The mapping for the homomorphism.
