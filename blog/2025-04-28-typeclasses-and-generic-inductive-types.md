---
slug: typeclasses-and-generic-inductive-types
title: Typeclasses and Generic Inductive Types
authors: [lacker]
tags: [language]
image: /img/typeclasses.png
---

Since launching the Acorn beta, we've heard consistent feedback from mathematicians that they need a powerful type system to represent their favorite area of mathematics.

Today, we're releasing two big improvements to Acorn's type system. The first is _typeclasses_.

<!-- truncate -->

```acorn
typeclass S: Semigroup {
    // Semigroups have a binary operation
    op: (S, S) -> S

    // The operation must be associative
    associative(x: S, y: S, z: S) {
        x.op(y.op(z)) = x.op(y).op(z)
    }
}
```

A typeclass lets you prove things about many types at once. You can prove theorems about group theory, and then later apply them to any group. Groups, rings, fields, metric spaces, vector spaces, many mathematical concepts are naturally represented by typeclasses.

For more information, see the [typeclasses documentation](/docs/language/typeclasses/).

The second improvement is _generic inductive types_.

```acorn
inductive List<T> {
    nil
    cons(T, List<T>)
}
```

Generic inductive types are another way to let you prove theorems about a general type, and apply them to others. Many "container" sorts of objects like lists, finite sets, or multisets are naturally represented by generic inductive types.

The Acorn AI has been updated as well, so it knows how to prove theorems using the new type system. Give it a try! Installing Acorn is as easy as [downloading a VS Code extension](/docs/installation/).

If you run into any bugs or have any questions, let us know in [Discord](https://discord.com/invite/RqXxaye4MC). Thanks for reading!
