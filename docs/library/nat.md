# nat.ac

The `nat` module provides natural numbers and some related functions.

[See the code on GitHub.](https://github.com/acornprover/acornlib/blob/master/src/nat.ac)

## Nat

The `Nat` type is defined inductively. There are two constructors.

```acorn
// Zero
Nat.0

// Successor
Nat.suc(n)
```

`Nat` is a numeral type, so you can use the `numerals Nat` statement.

## Nat's operators

`Nat` supports addition, multiplication, subtraction, and comparison operators.

```acorn
numerals Nat

// Three ways of adding two numbers.
2 + 2
Nat.add(2, 2)
2.add(2)

// Three ways of multiplying two numbers.
2 * 2
Nat.mul(2, 2)
2.mul(2)

// Natural number "subtraction" just stops at zero. So 1 - 2 = 0. Be careful.
4 - 2
Nat.sub(4, 2)
4.sub(2)

// Three ways for each comparison operator.
2 < 3
Nat.lt(2, 3)
2.lt(3)

2 <= 3
Nat.lte(2, 3)
2.lte(3)

5 > 4
Nat.gt(5, 4)
5.gt(4)

7 >= 0
Nat.gte(7, 0)
7.gte(0)
```

## is_composite: Nat -> Bool

A predicate for whether a number is composite. 0 and 1 don't count as composite.

```acorn
is_composite(4)
```

## is_prime: Nat -> Bool

A predicate for whether a number is prime. 0 and 1 don't count as prime.

```acorn
is_prime(3)
```

## divides: (Nat, Nat) -> Bool

A predicate for when one number divides another. Everything divides zero.

```acorn
divides(5, 10)
```

## true_below: (Nat -> Bool, Nat) -> Bool

`true_below(f, n)` means that `f` is true for every number below `n`.

```acorn
define less_than_10(n: Nat) {
    n < 10
}

true_below(less_than_10, 8)
```

Useful for strong induction:

```acorn
theorem strong_induction(f: Nat -> Bool) {
    forall(k: Nat) {
        true_below(f, k) -> f(k)
    } -> forall(n: Nat) { f(n) }
}
```

## mod: (Nat, Nat) -> Nat

The remainder function. We define `mod(n, 0)` to equal `n`.

```acorn
mod(7, 4) = 3
```

## factorial: Nat -> Nat

The factorial function.

```acorn
factorial(3) = 6
```
