---
title: JoinSemilattice
---

```acorn
typeclass S: JoinSemilattice extends PartialOrder, Join {
    lte_join_left(a: S, b: S) {
        a <= a.join(b)
    }
    lte_join_right(a: S, b: S) {
        b <= a.join(b)
    }
    join_lte_of_bounds(a: S, b: S, c: S) {
        a <= c and b <= c implies a.join(b) <= c
    }
}
```

A partially ordered type with binary least upper bounds.

[GitHub](https://github.com/acornprover/acornlib/blob/master/src/lattice.ac)

---
## antisymmetric
Inherited from [PartialOrder](../PartialOrder/#antisymmetric).
## gt
Inherited from [PartialOrder](../PartialOrder/#gt).
## gte
Inherited from [PartialOrder](../PartialOrder/#gte).
## join
Inherited from [Join](../Join/#join).
## join_lte_of_bounds

```acorn
join_lte_of_bounds(a: S, b: S, c: S) {
    a <= c and b <= c implies a.join(b) <= c
}
```

A join is below any common upper bound.
## lt
Inherited from [PartialOrder](../PartialOrder/#lt).
## lte
Inherited from [LTE](../LTE/#lte).
## lte_join_left

```acorn
lte_join_left(a: S, b: S) {
    a <= a.join(b)
}
```

A join is above its left argument.
## lte_join_right

```acorn
lte_join_right(a: S, b: S) {
    b <= a.join(b)
}
```

A join is above its right argument.
## reflexive
Inherited from [PartialOrder](../PartialOrder/#reflexive).
## transitive
Inherited from [PartialOrder](../PartialOrder/#transitive).
