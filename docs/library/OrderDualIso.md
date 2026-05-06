---
title: OrderDualIso
---

```acorn
structure OrderDualIso[A: PartialOrder, B: PartialOrder] {
    map: A -> B
    inv: B -> A
} constraint {
    is_order_dual_iso_pair(map, inv)
}
```

An order-dual isomorphism with explicit inverse data.

[GitHub](https://github.com/acornprover/acornlib/blob/master/src/order_iso.ac)

---
## inv

```acorn
OrderDualIso.inv: (OrderDualIso[A, B], B) -> A
```

The inverse order-reversing map.
## map

```acorn
OrderDualIso.map: (OrderDualIso[A, B], A) -> B
```

The order-reversing map.
