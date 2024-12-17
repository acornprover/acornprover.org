# real.ac

The `real` module provides real numbers.

This module is very incomplete. The real numbers are defined, but that's about it. If you are interested in making a small contribution to the Acorn library, check out this module!

Good places to start:

- Define addition
- Prove the commutativity and associativity of addition
- Define multiplication
- Prove the commutativity and associativity of multiplication
- Prove the distributive property
- Define the comparison operators

## Defining Real Numbers

The `Real` type is defined by Dedekind cuts.

The Acorn equivalent of a `Set<T>` type is functions of type `T -> Bool`. Some helper functions exist to help
define the "Dedekind cut" concept.

## is_cut(f: Rat -> Bool) -> Bool

Whether `f` is a "cut", cutting rational numbers into two groups. To be a cut, there must be some number in the set, and some number out of the set.

```acorn
define is_cut(f: Rat -> Bool) -> Bool {
    exists(x: Rat) {
        f(x)
    } and exists(x: Rat) {
        not f(x)
    }
}
```

## is_lower(f: Rat -> Bool) -> Bool

A "lower set", or "downward closed", contains every element less than or equal to any of its members.

```acorn
define is_lower(f: Rat -> Bool) -> Bool {
    forall(x: Rat, y: Rat) {
        f(y) and x < y -> f(x)
    }
}
```

## has_greatest(f: Rat -> Bool, x: Rat) -> Bool

Whether `f` has an upper bound, an element in the set that is larger than any of other elements.

## is_dedekind_cut(f: Rat -> Bool) -> Bool

The combination of the previous three conditions. A Dedekind cut must be a cut, it must be a lower set, and it must not have a greatest element.

## Real

```acorn
structure Real {
    gt_rat: Rat -> Bool
} constraint {
    is_dedekind_cut(gt_rat)
}
```

Real numbers are defined by their Dedekind cut, which can also be interpreted as a function that compares
the real number to a rational number.

Thus:

```acorn
my_real.gt_rat(my_rat)
```

compares a real and a rational, telling you whether `my_real` is greater than `my_rat`.

## Real.from_rat: Rat -> Real

Embeds the rational numbers in the reals, using the Dedekind cut that is simply "all numbers less than this rational number".
