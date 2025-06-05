# nat_gcd.ac

The `nat_gcd` module contains logic around the greatest common denominator.

[See the code on GitHub.](https://github.com/acornprover/acornlib/blob/master/src/nat_gcd.ac)

## NatPair

A type for a pair of natural numbers.

```acorn
structure NatPair {
    first: Nat
    second: Nat
}
```

It would probably be better to have some polymorphic `Pair` type instead.

## gcd_step: NatPair -> NatPair

One step of the Euclidean algorithm is taking the pair `(a, b)` and replacing it with `(b, a mod b)`.

```acorn
gcd_step(NatPair.new(7, 3)) = NatPair.new(3, 1)
```

Stops once `b` is zero.

## gcd_step_n: (NatPair, Nat) -> NatPair

What you get after running `n` steps of the gcd algorithm.

```acorn
gcd_step(NatPair.new(1000, 17), 10) = NatPair.new(1, 0)
```

## false_below(f: Nat -> Bool, n: Nat) -> Bool

The opposite of `nat.true_below` - that `f` is false for all numbers below `n`.

```acorn
define equals_one_hundred(n: Nat) {
    n = 100
}

false_below(equals_one_hundred, 50)
```

## decreasing_to_zero(f: Nat -> Nat) -> Bool

A decreasing-to-zero function strictly decreases except on zero.

```acorn
decreasing_to_zero(function(n: Nat) { n - 1 })
```

## gcd: (Nat, Nat) -> Nat

The greatest common divisor of two natural numbers.

```acorn
gcd(15, 10) = 5
```

This is defined in terms of the Euclidean algorithm, and the subsequent theorems `gcd_divides_left`, `gcd_divides_right`, and `gcd_is_gcd` prove that `gcd` defined this way is actually the greatest common divisor.
