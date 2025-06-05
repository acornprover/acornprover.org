---
sidebar_position: 10
---

# Typeclasses

Typeclasses let you prove something for a bunch of types at once.

Think of a typeclass as a small bundle of attributes or operations, plus the rules they must satisfy. The typeclass lets you state an abstract theorem once, in terms of these operations, and then apply them to many different types, without extra code.

## The `typeclass` Statement

To define a typeclass you specify two things: the required attributes, and the rules they must follow.

In Acorn code, these happen inside a `typeclass` statement. For example, this is how you define a metric space:

```acorn
from real import Real
numerals Real

typeclass M: MetricSpace {
    // Every metric space must have a distance function
    distance: (M, M) -> Real

    // Rule: the distance from a point to itself is zero
    self_distance_is_zero(x: M) {
        x.distance(x) = 0
    }

    // Rule: distance zero means the points are equal
    dist_zero_imp_eq(x: M, y: M) {
        x.distance(y) = 0 implies x = y
    }

    // Rule: distance must be symmetric
    symmetric(x: M, y: M) {
        x.distance(y) = y.distance(x)
    }

    // Rule: distance must satisfy the triangle inequality
    triangle(x: M, y: M, z: M) {
        x.distance(z) <= x.distance(y) + y.distance(z)
    }
}
```

In this statement, `M` refers to the type that belongs to the `MetricSpace` typeclass. We call this sort of type an "instance" of the typeclass.

Attributes are defined by providing a type. For example, in this line:

```acorn
distance: (M, M) -> Real
```

The type of `distance` is a function from two `M`-type variables, to the real numbers. That's a function from two elements of our metric space, to the reals.

The rules that an instance must obey are defined like theorems, with a set of arguments, along with a condition.

```acorn
self_distance_is_zero(x: M) {
    x.distance(x) = 0
}
```

Here, `x` is the arguments to the rule, and `x.distance(x) = 0` is the condition itself. This rule says that the distance between a point and itself is always zero.

## Using Typeclasses

In any statement that can take generic type parameters, you can also provide typeclasses. In particular, this lets you prove theorems about a typeclass. For example:

```acorn
theorem distance_non_negative<M: MetricSpace>(x: M, y: M) {
    not x.distance(y).is_negative
}
```

(By some definitions of metric space, this would be a condition on the metric space itself. With our definition, we can prove it from the other conditions, so it can be a theorem.)

In this theorem statement, the `<M: MetricSpace>` expresses that we are proving this theorem generically, where `M` can be any metric space. If we had just written `<M>`, we would be trying to prove it for every type. That wouldn't compile, though; we can only call `x.distance` because `x` is a `MetricSpace`.

When we prove theorems about typeclasses, we can use the conditions on the typeclass. For example:

```acorn
theorem distance_non_negative<M: MetricSpace>(x: M, y: M) {
    not x.distance(y).is_negative
} by {
    x.distance(x) <= x.distance(y) + y.distance(x)
    0 <= x.distance(y) + x.distance(y)
    0 <= x.distance(y)
}
```

The first line is true by the triangle inequality. The second is true by symmetry and the self-distance rule. As usual, you don't have to explicitly reference these theorems in Acorn because the prover will find those for you.

## The `instance` Statement

A type that satisfies a typeclass is called an "instance". To declare that a type is an instance of a typeclass, we use the `instance` statement. It looks like this:

```acorn
inductive Color {
    red
    green
    blue
}

define discrete(x: Color, y: Color) -> Real {
    if x = y {
        0
    } else {
        1
    }
}

instance Color: MetricSpace {
    let distance: (Color, Color) -> Real = discrete
}
```

A typeclass usually relies on some attributes of the instance type. In this case, a metric space requires a distance function. When we're declaring an instance type, we have to specify the typeclasss attributes. In this case, the line:

```acorn
let distance: (Color, Color) -> Real = discrete
```

is specifying that when we are considering the `Color` type as an instance of the `MetricSpace` typeclass, we should use the `discrete` function for its `distance`.

You can refer to these attributes by either the type or the typeclass name. So these expressions are now equivalent:

```acorn
MetricSpace.distance<Color>(x, y)
discrete(x, y)
```

When you write an instance statement, you also have to prove that this definition adheres to all the conditions on the typeclass. You can prove it as one big block, but it's more clear to write it as separate theorems. For example:

```acorn
theorem discrete_self_distance_is_zero(x: Color) {
    discrete(x, x) = 0
}

theorem discrete_dist_zero_imp_eq(x: Color, y: Color) {
    discrete(x, y) = 0 implies x = y
}

theorem discrete_symmetric(x: Color, y: Color) {
    discrete(x, y) = discrete(y, x)
}

theorem discrete_triangle(x: Color, y: Color, z: Color) {
    discrete(x, z) <= discrete(x, y) + discrete(y, z)
}

instance Color: MetricSpace {
    let distance: (Color, Color) -> Real = discrete
}
```

This way, any condition that is unclear to Acorn will get yellow-squiggled, and you can add extra detail to the proof as needed.

## Extending Typeclasses

A typeclass can extend an existing typeclass, which means it inherits their required attributes and constraints. This uses the `extends` keyword. For example:

```acorn
typeclass S: Semigroup {
    // The semigroup operation
    mul: (S, S) -> S

    // Associativity property
    mul_associative(a: S, b: S, c: S) {
        a * (b * c) = (a * b) * c
    }
}

// Extending the multiplicative semigroup with commutativity.
typeclass S: CommSemigroup extends Semigroup {
    commutative(a: S, b: S) {
        a * b = b * a
    }
}
```

To prove a type is an instance of an extended typeclass, you first must prove that it is an instance of the base typeclass. In this example, to prove that `instance Foo: CommSemigroup`, you must first prove `instance Foo: Semigroup`.

When we use typeclasses that extend each other, any theorem that we prove for the base typeclass will also apply to the extended typeclass. In this example, any theorem that we prove for semigroups will also apply to commutative semigroups.

## Typeclass Attributes Vs Type Attributes

Typeclass attributes and type attributes do not have exactly the same syntax. For example, let's say we defined `discrete` as an attribute on `Color` rather than a top-level function.

```acorn
attributes Color {
    define discrete(self, other: Color) -> Real {
        if x = y {
            0
        } else {
            1
        }
    }
}

instance Color: MetricSpace {
    let distance: (Color, Color) -> Real = Color.discrete
}
```

Here, `discrete` is an attribute of the `Color` type. But `distance` is an attribute of the `MetricSpace` typeclass. You can use either one with explicit dot syntax:

```acorn
// If x and y are Colors, these all work

// Explicitly typed, typeclass attribute
MetricSpace.distance<Color>(x, y)

// Implicitly typed, typeclass attribute
MetricSpace.distance(x, y)

// Explicitly typed, type attribute
Color.discrete(x, y)

// Implicitly typed, type attribute
x.discrete(y)
```

It does not work to mix the two:

```acorn
// Does not work
x.distance(y)
```

The rationale is that a type may belong to two different typeclasses, both of which use the same name for an attribute. We avoid this "diamond inheritance" problem by always making it clear from the context which attribute we are using.

With a generic theorem, you can use the implicit dot syntax to refer to typeclass attributes:

```acorn
// x.distance(y) is okay when x is an M: MetricSpace.
// It isn't okay when x is a Color.
theorem distance_non_negative<M: MetricSpace>(x: M, y: M) {
    not x.distance(y).is_negative
}
```

This is because the meaning of `x.distance(y)` is clear from the context.

The same holds for infix operators. For example, `x * y` is just syntactic sugar for `x.mul(y)`.

Currently, a type can only be an instance of a typeclass in one way. It's possible that we add additional syntax to handle this case in the future.
