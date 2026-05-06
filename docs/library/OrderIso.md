---
title: OrderIso
---

```acorn
structure OrderIso[A: PartialOrder, B: PartialOrder] {
    map: A -> B
    inv: B -> A
} constraint {
    is_order_iso_pair(map, inv)
}
```

An order isomorphism with explicit inverse data.

[GitHub](https://github.com/acornprover/acornlib/blob/master/src/order_iso.ac)

---
## inv

```acorn
OrderIso.inv: (OrderIso[A, B], B) -> A
```

The inverse order-preserving map.
## map

```acorn
OrderIso.map: (OrderIso[A, B], A) -> B
```

The order-preserving map.
