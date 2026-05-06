---
title: Zmod
---

```acorn
structure Zmod[n: Nat] {
    carrier: Set[Int]
} constraint {
    is_equivalence_class(int_mod_rel(n), carrier)
}
```

Integer residue classes modulo `n`.

When `n = 0`, this is the quotient of the integers by equality, so it is
equivalent to the integers.

[GitHub](https://github.com/acornprover/acornlib/blob/master/src/zmod.ac)

---
## again

```acorn
define again(self) -> Zmod[n] {
    zmod_self(n, self)
}
```

Rewrap through a top-level dependent satisfy function.
## carrier

```acorn
Zmod.carrier: Zmod[x0] -> Set[Int]
```
## modulus

```acorn
define modulus(self) -> Nat {
    n
}
```

The modulus of this residue class.
