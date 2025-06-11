# GroupHom

```acorn
structure GroupHom<G: Group, H: Group> {
    hom: G -> H
} constraint {
    is_hom(hom)
}
```

A group homomorphism that preserves the group structure.

[GitHub](https://github.com/acornprover/acornlib/blob/master/src/group.ac)

---
## hom

```acorn
GroupHom.hom: (GroupHom<G, H>, G) -> H
```

The mapping for the homomorphism.
