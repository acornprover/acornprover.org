# LinearOrder

```acorn
typeclass L: LinearOrder extends PartialOrder {
    totality(a: L, b: L) {
        a <= b or b <= a
    }
}
```

A linear order (total order) is a partial order where all elements are comparable.

[GitHub](https://github.com/acornprover/acornlib/blob/master/src/order.ac)

---
## antisymmetric
Inherited from [PartialOrder](../PartialOrder/#antisymmetric).
## gt
Inherited from [PartialOrder](../PartialOrder/#gt).
## gte
Inherited from [PartialOrder](../PartialOrder/#gte).
## lt
Inherited from [PartialOrder](../PartialOrder/#lt).
## lte
Inherited from [PartialOrder](../PartialOrder/#lte).
## max

```acorn
define max(self, other: L) -> L {
    if other <= self {
        self
    } else {
        other
    }
}
```

Yields the larger of two elements.
## min

```acorn
define min(self, other: L) -> L {
    if self <= other {
        self
    } else {
        other
    }
}
```

Yields the smaller of two elements.
## reflexive
Inherited from [PartialOrder](../PartialOrder/#reflexive).
## totality

```acorn
totality(a: L, b: L) {
    a <= b or b <= a
}
```

All elements are comparable: for any two elements `a` and `b`, either `a ≤ b` or `b ≤ a`.
## transitive
Inherited from [PartialOrder](../PartialOrder/#transitive).
