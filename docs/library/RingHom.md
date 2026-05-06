---
title: RingHom
---

```acorn
structure RingHom[R: Ring, S: Ring] {
    hom: R -> S
} constraint {
    is_ring_hom(hom)
}
```

A ring homomorphism that preserves both addition and multiplication and the multiplicative identity.

[GitHub](https://github.com/acornprover/acornlib/blob/master/src/ring_hom.ac)

---
## ext

```acorn
let ext = ring_hom_ext[R, S]
```

Ring homomorphism extensionality from pointwise equality of the homomorphism.
## hom

```acorn
RingHom.hom: (RingHom[R, S], R) -> S
```

The mapping for the homomorphism.
