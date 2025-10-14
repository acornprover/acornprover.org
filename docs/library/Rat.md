# Rat

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
## add

```acorn
define add(self, other: Rat) -> Rat {
    reduce(self.num * other.denom + other.num * self.denom, self.denom * other.denom)
}
```

The sum of two rational numbers.
## denom

```acorn
Rat.denom: Rat -> Int
```

The denominator of the rational number (always positive).
## div

```acorn
define div(self, other: Rat) -> Rat {
    self * other.reciprocal
}
```

The quotient of two rational numbers.
Division by zero is defined to yield zero.
## from_int

```acorn
let from_int = function(n: Int) {
    Rat.new(n, Int.1)
}
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
## lte

```acorn
define lte(self, other: Rat) -> Bool {
    (other - self).is_positive or self = other
}
```

True if this rational is less than or equal to the other.
## mul

```acorn
define mul(self, other: Rat) -> Rat {
    reduce(self.num * other.num, self.denom * other.denom)
}
```

The product of two rational numbers.
## neg

```acorn
define neg(self) -> Rat {
    Rat.new(-self.num, self.denom)
}
```

The negation of a rational number.
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
## reciprocal

```acorn
define reciprocal(self) -> Rat {
    reduce(self.denom, self.num)
}
```

The reciprocal of a rational number (1/x).
The reciprocal of zero is defined to be zero.
