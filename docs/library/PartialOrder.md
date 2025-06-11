# PartialOrder

```acorn
typeclass P: PartialOrder {
    lte: (P, P) -> Bool
    reflexive {
        is_reflexive(P.lte)
    }
    transitive {
        is_transitive(P.lte)
    }
    antisymmetric {
        is_antisymmetric(P.lte)
    }
}
```

A partial order is a relation that is reflexive, transitive, and antisymmetric.
Not all elements need to be comparable.

[GitHub](https://github.com/acornprover/acornlib/blob/master/src/order.ac)

---
## antisymmetric

```acorn
antisymmetric {
    is_antisymmetric(P.lte)
}
```

The order relation must be antisymmetric: if `a ≤ b` and `b ≤ a`, then `a = b`.
## gt

```acorn
define gt(self, other: P) -> Bool {
    other < self
}
```

Strict greater-than comparison.
## gte

```acorn
define gte(self, other: P) -> Bool {
    other <= self
}
```

Greater-than-or-equal-to comparison.
## lt

```acorn
define lt(self, other: P) -> Bool {
    self <= other and self != other
}
```

Strict less-than comparison.
## lte

```acorn
lte: (P, P) -> Bool
```

The less-than-or-equal-to relation defining the partial order.
## reflexive

```acorn
reflexive {
    is_reflexive(P.lte)
}
```

The order relation must be reflexive: every element is `≤` itself.
## transitive

```acorn
transitive {
    is_transitive(P.lte)
}
```

The order relation must be transitive: if `a ≤ b` and `b ≤ c`, then `a ≤ c`.
