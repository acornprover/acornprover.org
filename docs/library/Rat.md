---
title: Rat
---

```acorn
structure Rat {
    num: Int
    denom: Int
} constraint {
    is_reduced(num, denom)
}
```

Rational numbers represented as fractions in reduced form.
The constraint ensures the fraction is always in lowest terms with positive denominator.

[GitHub](https://github.com/acornprover/acornlib/blob/master/src/rat/default.ac)

---
## abs

```acorn
define abs(self) -> Rat {
    if self.is_negative {
        -self
    } else {
        self
    }
}
```

The absolute value of a rational number.
## denom

```acorn
Rat.denom: Rat -> Int
```

The denominator of the rational number (always positive).
## div

```acorn
define div(self, other: Rat) -> Rat {
    self * other.inverse
}
```

The quotient of two rational numbers.
Division by zero is defined to yield zero.
## floor

```acorn
define floor(self) -> Int {
    floor_impl(self)
}
```

The floor of a rational number (the greatest integer less than or equal to it).
## from_int

```acorn
let from_int = rat_from_int
```

Converts an integer to a rational number.
## from_nat

```acorn
let from_nat: Nat -> Rat = function(n: Nat) {
    Rat.from_int(Int.from_nat(n))
}
```

Converts a natural number to a rational number.
## is_close

```acorn
define is_close(self, other: Rat, eps: Rat) -> Bool {
    (self - other).abs < eps
}
```

True if the absolute difference between two rationals is less than epsilon.
## is_negative

```acorn
define is_negative(self) -> Bool {
    self.num.is_negative
}
```

True if the rational is negative.
## is_positive

```acorn
define is_positive(self) -> Bool {
    self.num.is_positive
}
```

True if the rational is positive.
## num

```acorn
Rat.num: Rat -> Int
```

The numerator of the rational number.
## read

```acorn
define read(self, other: Rat) -> Rat {
    Rat.10 * self + other
}
```

The rational formed by appending a digit to this rational in base 10.
