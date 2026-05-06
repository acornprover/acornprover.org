---
title: AddCommMonoidHom
---

```acorn
structure AddCommMonoidHom[A: AddCommMonoid, B: AddCommMonoid] {
    hom: A -> B
} constraint {
    is_add_comm_monoid_hom(hom)
}
```

An additive commutative monoid homomorphism.

[GitHub](https://github.com/acornprover/acornlib/blob/master/src/add_comm_monoid.ac)

---
## ext

```acorn
let ext = add_comm_monoid_hom_ext[A, B]
```

Additive commutative monoid homomorphism extensionality from pointwise equality of the mapping.
## hom

```acorn
AddCommMonoidHom.hom: (AddCommMonoidHom[A, B], A) -> B
```

The mapping of the additive commutative monoid homomorphism.
