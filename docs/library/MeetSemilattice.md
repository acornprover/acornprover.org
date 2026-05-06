---
title: MeetSemilattice
---

```acorn
typeclass S: MeetSemilattice extends PartialOrder, Meet {
    meet_lte_left(a: S, b: S) {
        a.meet(b) <= a
    }
    meet_lte_right(a: S, b: S) {
        a.meet(b) <= b
    }
    lte_meet_of_bounds(c: S, a: S, b: S) {
        c <= a and c <= b implies c <= a.meet(b)
    }
}
```

A partially ordered type with binary greatest lower bounds.

[GitHub](https://github.com/acornprover/acornlib/blob/master/src/lattice.ac)

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
Inherited from [LTE](../LTE/#lte).
## lte_meet_of_bounds

```acorn
lte_meet_of_bounds(c: S, a: S, b: S) {
    c <= a and c <= b implies c <= a.meet(b)
}
```

Any common lower bound is below the meet.
## meet
Inherited from [Meet](../Meet/#meet).
## meet_lte_left

```acorn
meet_lte_left(a: S, b: S) {
    a.meet(b) <= a
}
```

A meet is below its left argument.
## meet_lte_right

```acorn
meet_lte_right(a: S, b: S) {
    a.meet(b) <= b
}
```

A meet is below its right argument.
## reflexive
Inherited from [PartialOrder](../PartialOrder/#reflexive).
## transitive
Inherited from [PartialOrder](../PartialOrder/#transitive).
