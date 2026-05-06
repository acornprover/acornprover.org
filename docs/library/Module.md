---
title: Module
---

```acorn
structure Module[R: Ring, M: AddCommGroup] {
    smul: R -> M -> M
} constraint {
    is_module_action(smul)
}
```

A left R-module: an additive abelian group together with an action of R that is
distributive on both sides, compatible with ring multiplication, and unital.

[GitHub](https://github.com/acornprover/acornlib/blob/master/src/module.ac)

---
## smul

```acorn
Module.smul: (Module[R, M], R, M) -> M
```

Scalar multiplication: combines a ring element and a module element.
