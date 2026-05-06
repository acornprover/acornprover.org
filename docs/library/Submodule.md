---
title: Submodule
---

```acorn
structure Submodule[R: Ring, M: AddCommGroup] {
    carrier: Module[R, M]
    contains: M -> Bool
} constraint {
    is_submodule(carrier, contains)
}
```

A submodule of a module, represented as a subset closed under the module operations.

[GitHub](https://github.com/acornprover/acornlib/blob/master/src/submodule.ac)

---
## as_set

```acorn
define as_set(self) -> Set[M] {
    Set[M].new(self.contains)
}
```

The subset of module elements belonging to this submodule.
## carrier

```acorn
Submodule.carrier: Submodule[R, M] -> Module[R, M]
```

The ambient module.
## closure

```acorn
let closure: (Module[R, M], Set[M]) -> Submodule[R, M] = submodule_closure
```

The smallest submodule containing a set.
## contains

```acorn
Submodule.contains: (Submodule[R, M], M) -> Bool
```

True if the given element is a member of this submodule.
## ext

```acorn
let ext = submodule_ext[R, M]
```

Submodule extensionality from equality of ambient modules and pointwise equality of membership.
## intersection

```acorn
let intersection: (Submodule[R, M], Submodule[R, M]) -> Submodule[R, M] = submodule_intersection
```

The common part of this submodule and another submodule.
## sup

```acorn
let sup: (Submodule[R, M], Submodule[R, M]) -> Submodule[R, M] = submodule_sup
```

The least submodule containing this submodule and another submodule.
