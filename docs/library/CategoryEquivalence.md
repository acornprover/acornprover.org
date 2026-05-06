---
title: CategoryEquivalence
---

```acorn
structure CategoryEquivalence[O1, M1, O2, M2] {
    forward: Functor[O1, M1, O2, M2]
    backward: Functor[O2, M2, O1, M1]
    unit_fwd: NaturalTransformation[O1, M1, O1, M1]
    unit_bwd: NaturalTransformation[O1, M1, O1, M1]
    counit_fwd: NaturalTransformation[O2, M2, O2, M2]
    counit_bwd: NaturalTransformation[O2, M2, O2, M2]
} constraint {
    is_category_equivalence(forward, backward, unit_fwd, unit_bwd, counit_fwd, counit_bwd)
}
```

An equivalence of categories: a pair of functors with unit/counit natural isomorphisms.

[GitHub](https://github.com/acornprover/acornlib/blob/master/src/category_equivalence.ac)

---
## backward

```acorn
CategoryEquivalence.backward: CategoryEquivalence[O1, M1, O2, M2] -> Functor[O2, M2, O1, M1]
```

The backward functor.
## counit_bwd

```acorn
CategoryEquivalence.counit_bwd: CategoryEquivalence[O1, M1, O2, M2] -> NaturalTransformation[O2, M2, O2, M2]
```

The backward direction of the counit natural isomorphism `1_D ≅ F ∘ G`.
## counit_fwd

```acorn
CategoryEquivalence.counit_fwd: CategoryEquivalence[O1, M1, O2, M2] -> NaturalTransformation[O2, M2, O2, M2]
```

The forward direction of the counit natural isomorphism `F ∘ G ≅ 1_D`.
## forward

```acorn
CategoryEquivalence.forward: CategoryEquivalence[O1, M1, O2, M2] -> Functor[O1, M1, O2, M2]
```

The forward functor.
## unit_bwd

```acorn
CategoryEquivalence.unit_bwd: CategoryEquivalence[O1, M1, O2, M2] -> NaturalTransformation[O1, M1, O1, M1]
```

The backward direction of the unit natural isomorphism `G ∘ F ≅ 1_C`.
## unit_fwd

```acorn
CategoryEquivalence.unit_fwd: CategoryEquivalence[O1, M1, O2, M2] -> NaturalTransformation[O1, M1, O1, M1]
```

The forward direction of the unit natural isomorphism `1_C ≅ G ∘ F`.
