---
title: DistribLattice
---

```acorn
typeclass L: DistribLattice extends Lattice {
    meet_join_distrib_left(a: L, b: L, c: L) {
        a.meet(b.join(c)) = a.meet(b).join(a.meet(c))
    }
    join_meet_distrib_left(a: L, b: L, c: L) {
        a.join(b.meet(c)) = a.join(b).meet(a.join(c))
    }
}
```

A lattice where meets distribute over joins and joins distribute over meets.

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
Inherited from [JoinSemilattice](../JoinSemilattice/#join_lte_of_bounds).
## join_meet_distrib_left

```acorn
join_meet_distrib_left(a: L, b: L, c: L) {
    a.join(b.meet(c)) = a.join(b).meet(a.join(c))
}
```

Join distributes over meet on the left.
## lt
Inherited from [PartialOrder](../PartialOrder/#lt).
## lte
Inherited from [LTE](../LTE/#lte).
## lte_join_left
Inherited from [JoinSemilattice](../JoinSemilattice/#lte_join_left).
## lte_join_right
Inherited from [JoinSemilattice](../JoinSemilattice/#lte_join_right).
## lte_meet_of_bounds
Inherited from [MeetSemilattice](../MeetSemilattice/#lte_meet_of_bounds).
## meet
Inherited from [Meet](../Meet/#meet).
## meet_join_distrib_left

```acorn
meet_join_distrib_left(a: L, b: L, c: L) {
    a.meet(b.join(c)) = a.meet(b).join(a.meet(c))
}
```

Meet distributes over join on the left.
## meet_lte_left
Inherited from [MeetSemilattice](../MeetSemilattice/#meet_lte_left).
## meet_lte_right
Inherited from [MeetSemilattice](../MeetSemilattice/#meet_lte_right).
## reflexive
Inherited from [PartialOrder](../PartialOrder/#reflexive).
## transitive
Inherited from [PartialOrder](../PartialOrder/#transitive).
