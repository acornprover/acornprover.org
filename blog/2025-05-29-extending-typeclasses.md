---
slug: extending-typeclasses
title: Extending Typeclasses
authors: [lacker]
tags: [language]
image: /img/extends.png
---

Typeclasses in Acorn provide a powerful way to define common behaviors across different types. But what happens when you need to build upon existing typeclasses? Today, we're introducing typeclass extension.

<!-- truncate -->

With typeclass extension, you can create more specialized typeclasses that inherit from existing ones:

```acorn
// The default semigroup uses the "multiplication" operator.
typeclass S: Semigroup {
    // The semigroup operation
    mul: (S, S) -> S

    // Associativity property
    mul_associative(a: S, b: S, c: S) {
        a * (b * c) = (a * b) * c
    }
}

// A multiplicative monoid is a multiplicative semigroup
// with an identity element.
typeclass M: Monoid extends Semigroup {
    e: M

    // The identity element must satisfy the identity property
    mul_identity_right(a: M) {
        a * M.e = a
    }

    // Other direction of the identity property
    mul_identity_left(a: M) {
        M.e * a = a
    }
}
```

This allows you to build hierarchies of mathematical structures naturally, and much of [acornlib](https://github.com/acornprover/acornlib) has already been converted to use extended typeclasses.

You can also extend multiple typeclasses at once, combining their requirements into more complex structures. This makes it easier to model the rich relationships between different mathematical concepts.

```acorn
typeclass Ring extends Semiring, AddCommGroup
```

For more information, see the [typeclasses documentation](/docs/language/typeclasses/).

Try out typeclass extension in the latest version of Acorn, and let us know what you think in [Discord](https://discord.com/invite/RqXxaye4MC)!
