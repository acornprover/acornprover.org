---
title: Fin
---

```acorn
structure Fin[n: Nat] {
    value: Nat
} constraint {
    value < n
}
```

Finite initial segment `{ 0, 1, ..., n - 1 }`.

[GitHub](https://github.com/acornprover/acornlib/blob/master/src/fin.ac)

---
## again

```acorn
define again(self) -> Fin[n] {
    fin_self(n, self)
}
```

Rewrap through a top-level dependent satisfy function.
## bound

```acorn
define bound(self) -> Nat {
    n
}
```

Expose the ambient bound in a family-dependent attribute body.
## value

```acorn
Fin.value: Fin[x0] -> Nat
```
