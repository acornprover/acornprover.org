---
title: AddCommGroupHom
---

```acorn
structure AddCommGroupHom[A: AddCommGroup, B: AddCommGroup] {
    hom: A -> B
} constraint {
    is_add_comm_group_hom(hom)
}
```

An additive commutative group homomorphism.

[GitHub](https://github.com/acornprover/acornlib/blob/master/src/add_comm_group.ac)

---
## ext

```acorn
let ext = add_comm_group_hom_ext[A, B]
```

Additive commutative group homomorphism extensionality from pointwise equality of the mapping.
## hom

```acorn
AddCommGroupHom.hom: (AddCommGroupHom[A, B], A) -> B
```

The mapping of the additive commutative group homomorphism.
