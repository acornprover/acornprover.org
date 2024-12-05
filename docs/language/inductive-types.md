---
sidebar_position: 8
---

# Inductive Types

An inductive type can refer to itself in its definition. It describes ways to build objects of this type from other objects of the type.

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

## Match in definitions

You can define a function on an inductive type by defining it for each of the constructors. For example:

```acorn
// Is this tree a three leaf?
define is_three_leaf(t: Tree) -> Bool {
  match t {
    leaf(n) {
      n == 3
    }
    node(left, right) {
      false
    }
  }
}
```

You can also use `match` as a statement. If you prove a proposition for each of the branches, that proves the proposition outside the `match` statement.

```acorn
// This has the effect of proving "goal".
match value {
  foo(a) {
    foo_step_one
    foo_step_two
    goal
  }
  bar {
    bar_step_one
    bar_step_two
    goal
  }
}
```

## Recursion

`match` expressions are often useful as a building block for recursion. Inside the definition of a function, you can call the function itself on "parts" of the object being matched. For example, if we want to reverse left and right, all the way down a tree:

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

The restriction to "parts" is checked at compile time and ensures that the recursive function is well-defined.

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

Here's an example of generalized induction operating over our tree type:

```acorn
// Reversing a tree twice gives the original tree
theorem reverse_reverse(t: Tree) {
  reverse(reverse(t)) = t
} by {
    // Base case
    forall(k: Nat) {
        reverse_reverse(Tree.leaf(k))
    }

    // Inductive case
    forall(left: Tree, right: Tree) {
        if reverse_reverse(left) and reverse_reverse(right) {
            reverse(reverse(Tree.node(left, right))) = Tree.node(left, right)
            reverse_reverse(Tree.node(left, right))
        }
    }
}
```

When we're proving a theorem by induction, it's often helpful to refer to the theorem itself within the proof. Inside its own proof, a theorem is a function returning a Bool value. It can't be simplified to merely `true` because it hasn't been proven yet.
