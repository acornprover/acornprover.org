---
title: MulAction
---

```acorn
structure MulAction[G: Group, X] {
    act: (G, X) -> X
} constraint {
    is_mul_action(act)
}
```

A left action of a group on a type.

[GitHub](https://github.com/acornprover/acornlib/blob/master/src/group_action.ac)

---
## act

```acorn
MulAction.act: (MulAction[G, X], G, X) -> X
```

The action map.
