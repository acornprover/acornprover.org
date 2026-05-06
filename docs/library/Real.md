---
title: Real
---

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
## div

```acorn
define div(self, other: Real) -> Real {
    self * other.inverse
}
```

The quotient of two real numbers (`self/other`).
## ext

```acorn
let ext = real_ext
```

Real extensionality from pointwise equality of the cut.
## from_int

```acorn
let from_int = function(n: Int) {
    Real.from_rat(Rat.from_int(n))
}
```

Converts an integer to a real number.
## from_rat

```acorn
let from_rat = real_from_rat
```

Converts a rational number to a real number.
## gt_rat

```acorn
Real.gt_rat: (Real, Rat) -> Bool
```

True if this real number is greater than the given rational number.
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
## is_set_greatest_lower_bound

```acorn
define is_set_greatest_lower_bound(self, s: Real -> Bool) -> Bool {
    self.is_set_lower_bound(s) and forall(y: Real) {
        y.is_set_lower_bound(s) implies y <= self
    }
}
```

True if this real number is the greatest lower bound (infimum) for the set s.
## is_set_least_upper_bound

```acorn
define is_set_least_upper_bound(self, s: Real -> Bool) -> Bool {
    self.is_set_upper_bound(s) and forall(y: Real) {
        y.is_set_upper_bound(s) implies self <= y
    }
}
```

True if this real number is the least upper bound (supremum) for the set s.
## is_set_lower_bound

```acorn
define is_set_lower_bound(self, s: Real -> Bool) -> Bool {
    forall(y: Real) {
        s(y) implies self <= y
    }
}
```

True if this real number is a lower bound for the set s.
## is_set_upper_bound

```acorn
define is_set_upper_bound(self, s: Real -> Bool) -> Bool {
    forall(y: Real) {
        s(y) implies y <= self
    }
}
```

True if this real number is an upper bound for the set s.
## one_half

```acorn
let one_half: Real = Real.from_rat(Rat.2.inverse)
```

One half (1/2).
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
