---
title: GroupHom
---

```acorn
structure GroupHom[G: Group, H: Group] {
    hom: G -> H
} constraint {
    is_group_hom(hom)
}
```

A group homomorphism that preserves the group structure.

[GitHub](https://github.com/acornprover/acornlib/blob/master/src/group.ac)

---
## ext

```acorn
let ext = group_hom_ext[G, H]
```

Group homomorphism extensionality from pointwise equality of the homomorphism.
## hom

```acorn
GroupHom.hom: (GroupHom[G, H], G) -> H
```

The mapping for the homomorphism.
