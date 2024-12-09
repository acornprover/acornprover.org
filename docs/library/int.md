# int.ac

The `int` module provides integers and related functions.

## Int

The `Int` type is defined by its two constructors.

```acorn
inductive Int {
    // The normal x -> x map
    from_nat(Nat)

    // x -> -(x+1)
    neg_suc(Nat)
}
```

`Int.from_nat` is handy for converting natural numbers to integers. `neg_suc` is unnatural and you probably shouldn't use it.

`Int` is a numeral type, so you can use the `numerals Int` statement.

## Int's operators

`Int` supports addition, multiplication, subtraction, negation, and comparison operators.

```acorn
numerals Int

// Three ways of adding two numbers.
2 + 2
Int.add(2, 2)
2.add(2)

// Three ways of multiplying two numbers.
2 * 2
Int.mul(2, 2)
2.mul(2)

// Three ways of subtracting two numbers.
4 - 2
Int.sub(4, 2)
4.sub(2)

// Two ways to negate a number.
-3
3.neg

// Three ways for each comparison operator.
2 < 3
Int.lt(2, 3)
2.lt(3)

2 <= 3
Int.lte(2, 3)
2.lte(3)

5 > 4
Int.gt(5, 4)
5.gt(4)

7 >= 0
Int.gte(7, 0)
7.gte(0)
```

## abs: Int -> Nat

Converts an integer to a natural number.

```acorn
abs(Int.4) = Nat.4
abs(-Int.4) = Nat.4
```

## neg_nat: Nat -> Int

Converts a natural number into its negated integer version.

```acorn
neg_nat(Nat.4) = -Int.4
```

## is_negative: Nat -> Bool

Whether an integer is negative. Zero is not negative.

```acorn
is_negative(-2)
not is_negative(2)
not is_negative(0)
```

## is_positive: Nat -> Bool

Whether an integer is positive. Zero is not positive.

```acorn
is_positive(7)
not is_positive(-7)
not is_positive(0)
```

## is_unit: Int -> Bool

Whether an integer is a unit, i.e. a divisor of 1, i.e. either one or negative one.

```acorn
is_unit(1)
is_unit(-1)
not is_unit(0)
not is_unit(7)
```

## divides: (Int, Int) -> Bool

A predicate for whether one integer divides another.

```acorn
divides(3, 9)
divides(2, -4)
divides(-5, 10)
divides(5, 0)
not divides(0, -1)
```

## gcd: (Int, Int) -> Int

The greatest common divisor. Always returns a nonnegative integer.

```acorn
gcd(6, 9) = 3
gcd(-2, -8) = 2
gcd(-3, 0) = 3
```

## spans(a: Int, b: Int, c: Int) -> Bool

Whether `c` can be produced by a linear combination of `a` and `b`.

```acorn
spans(6, 10, 2)
not spans(6, 10, 3)
```

In particular, used to state Bezout's identity.

```acorn
theorem spans_gcd(a: Int, b: Int) {
    spans(a, b, gcd(a, b))
}
```
