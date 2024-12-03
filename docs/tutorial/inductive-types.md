---
sidebar_position: 5
---

# Inductive Types

Inductive types are defined with the `inductive` keyword. For example, the natural numbers are defined this way:

```acorn
inductive Nat {
    0
    suc(Nat)
}
```

This definition tells us there are two ways to build a natural number. The first way:

```acorn
Nat.0
```

This one is the base constructor, the number zero. Every inductive type needs a base case.

The second way:

```acorn
Nat.suc(n)
```

You can take the successor of any natural number to get another natural number. Here, `Nat.suc(n)` can also be written as `n.suc`.

When you define an inductive type, the principle of induction for that type gets defined automatically.

```acorn
// This theorem happens automatically; you don't need to define it.
theorem Nat.induction(f: Nat -> Bool, n: Nat) {
    f(Nat.0) and forall(k: Nat) { f(k) -> f(Nat.suc(k)) } -> f(n)
}
```

## Defining your own

Naturals are in the standard library, but you can define your own inductive types.

For example, let's define a type that represents an unordered binary tree of natural numbers. Put this in `tree.ac` if you want to follow along:

```acorn
from nat import Nat
numerals Nat

// Unordered binary tree
inductive Tree {
  leaf(Nat)
  node(Tree, Tree)
}
```

Here, `Tree.leaf` is the base constructor.

## Recursion

You can define a function on an inductive type by defining it for each of the constructors, using the `match` keyword. For example, if we want to reverse left and right, all the way down a tree:

```acorn
define reverse(t: Tree) -> Tree {
  match t {
    Tree.leaf(k) {
      Tree.leaf(k)
    }
    Tree.node(left, right) {
      Tree.node(reverse(right), reverse(left))
    }
  }
}
```

## Induction

When we defined the Tree type, it created an implicit principle of induction:

```acorn
// This theorem happens automatically; you don't need to define it.
theorem Tree.induction(f: Tree -> Bool, t: Tree) {
  forall(n: Nat) {
    f(Tree.leaf(n))
  } and forall(left: Tree, right: Tree) {
    f(left) and f(right) -> f(Tree.node(left, right))
  } -> f(t)
}
```

The general principle of induction is that if you prove a theorem for all the constructors, it's proven for the whole type.
