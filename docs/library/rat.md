# rat.ac

The `rat` module provides rational numbers and related functions.

## Rat

The `Rat` type is a constrained structure built on `Int`s.

```acorn
structure Rat {
    num: Int
    denom: Int
} constraint {
    denom.is_positive and gcd(num, denom) = 1
}
```

`Rat` is a numeral type, so you can use the `numerals Rat` statement.

## Rat's operators

`Rat` supports addition, multiplication, subtraction, division, negation, and comparison operators.

```acorn
numerals Rat

// Typical addition, multiplication, subtraction.
2 * (1 + 3) = 9 - 1

// Division by zero is defined to be zero, because Acorn functions must be defined on their whole domain.
1 / 0 = 0

// Negation.
-3 = -(6 / 2)

// Comparison.
1/2 < 1
2 <= 3
5 > 4
7 >= 0
```

## Rat.is_negative: self -> Bool

Whether an rational number is negative. Zero is not negative.

```acorn
i(-2).is_negative
not 2.is_negative
not 0.is_negative
```

## Rat.is_positive: self -> Bool

Whether an rational number is positive. Zero is not positive.

```acorn
7.is_positive
not (-7).is_positive
not 0.is_positive
```
