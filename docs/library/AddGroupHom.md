---
title: AddGroupHom
---

```acorn
structure AddGroupHom[A: AddGroup, B: AddGroup] {
    hom: A -> B
} constraint {
    is_add_group_hom(hom)
}
```

An additive group homomorphism that preserves the additive group structure.

[GitHub](https://github.com/acornprover/acornlib/blob/master/src/add_group.ac)

---
## ext

```acorn
let ext = add_group_hom_ext[A, B]
```

Additive group homomorphism extensionality from pointwise equality of the homomorphism.
## hom

```acorn
AddGroupHom.hom: (AddGroupHom[A, B], A) -> B
```

The mapping for the homomorphism.
