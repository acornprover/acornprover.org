# Real

```acorn
structure Real {
    gt_rat: Rat -> Bool
} constraint {
    is_dedekind_cut(gt_rat)
}
```

Real numbers are defined by a Dedekind cut. Specifically, using the `gt_rat` function which
specifies which rationals they are greater than.

[GitHub](https://github.com/acornprover/acornlib/blob/master/src/real/default.ac)

---
## abs

```acorn
define abs(self) -> Real {
    if self.is_negative {
        -self
    } else {
        self
    }
}
```

The absolute value of this real number.
## add

```acorn
define add(self, other: Real) -> Real {
    Real.new(add_gt(self, other))
}
```

The sum of two real numbers.
## div

```acorn
define div(self, other: Real) -> Real {
    self * other.reciprocal
}
```

The quotient of two real numbers (`self/other`).
## from_int

```acorn
let from_int = function(n: Int) {
    Real.from_rat(Rat.from_int(n))
}
```

Converts an integer to a real number.
## from_rat

```acorn
let from_rat = function(r: Rat) {
    Real.new(r.gt)
}
```

Converts a rational number to a real number.
## gt

```acorn
define gt(self, other: Real) -> Bool {
    other.lt(self)
}
```

True if this real number is strictly greater than the other.
## gt_rat

```acorn
Real.gt_rat: (Real, Rat) -> Bool
```

True if this real number is greater than the given rational number.
## gte

```acorn
define gte(self, other: Real) -> Bool {
    other.lte(self)
}
```

True if this real number is greater than or equal to the other.
## is_close

```acorn
define is_close(self, other: Real, eps: Real) -> Bool {
    (self - other).abs < eps
}
```

True if this real number is within `eps` of the other real number.
## is_negative

```acorn
define is_negative(self) -> Bool {
    self != Real.0 and not self.is_positive
}
```

True if this real number is negative (less than zero).
## is_positive

```acorn
define is_positive(self) -> Bool {
    self.gt_rat(Rat.0)
}
```

True if this real number is positive (greater than zero).
## lt

```acorn
define lt(self, other: Real) -> Bool {
    self != other and self.lte(other)
}
```

True if this real number is strictly less than the other.
## lte

```acorn
define lte(self, other: Real) -> Bool {
    forall(r: Rat) {
        self.gt_rat(r) implies other.gt_rat(r)
    }
}
```

The less-than-or-equal-to relation for real numbers.
## mul

```acorn
define mul(self, other: Real) -> Real {
    limit_rat(mul_rat_seq(rat_seq(self), rat_seq(other)))
}
```

The product of two real numbers.
## neg

```acorn
define neg(self) -> Real {
    Real.new(neg_gt(self))
}
```

The negative of this real number.
## reciprocal

```acorn
define reciprocal(self) -> Real {
    if self = Real.0 {
        Real.0
    } else {
        limit_rat(recip_rat_seq(rat_seq(self)))
    }
}
```

The reciprocal of this real number (`1/x`). For zero, returns zero.
## unit_sign

```acorn
define unit_sign(self) -> Real {
    if self.is_negative {
        -Real.1
    } else {
        Real.1
    }
}
```

The sign of this real number as a unit value (`-1` for negative, `1` for non-negative).
