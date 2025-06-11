# AddGroup

```acorn
typeclass A: AddGroup extends AddMonoid {
    neg: A -> A
    inverse_right(a: A) {
        a + -a = A.0
    }
}
```

An additive group is an additive monoid that also has inverses.

[GitHub](https://github.com/acornprover/acornlib/blob/master/src/add_group.ac)

---
## add
Inherited from [AddSemigroup](../AddSemigroup/#add).
## add_associative
Inherited from [AddSemigroup](../AddSemigroup/#add_associative).
## add_identity_left
Inherited from [AddMonoid](../AddMonoid/#add_identity_left).
## add_identity_right
Inherited from [AddMonoid](../AddMonoid/#add_identity_right).
## inverse_right

```acorn
inverse_right(a: A) {
    a + -a = A.0
}
```

This is what "additive inverse" means.
## neg

```acorn
neg: A -> A
```

The additive inverse of an element.
## sub

```acorn
define sub(self, other: A) -> A {
    self + -other
}
```

Subtracts one element from another using additive inverse.
