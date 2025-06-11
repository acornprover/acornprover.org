# Complex

```acorn
structure Complex {
    re: Real
    im: Real
}
```

Complex numbers consist of a real part and an imaginary part.
They extend the real numbers and satisfy the equation i² = -1.

[GitHub](https://github.com/acornprover/acornlib/blob/master/src/complex.ac)

---
## abs_squared

```acorn
define abs_squared(self) -> Real {
    self.re * self.re + self.im * self.im
}
```

Computes the squared magnitude |z|² = re² + im².
## add

```acorn
define add(self, other: Complex) -> Complex {
    Complex.new(self.re + other.re, self.im + other.im)
}
```

Adds two complex numbers component-wise.
## conj

```acorn
define conj(self) -> Complex {
    Complex.new(self.re, -self.im)
}
```

Yields the complex conjugate (negates the imaginary part).
## div

```acorn
define div(self, other: Complex) -> Complex {
    self * other.reciprocal
}
```

Divides this complex number by another.
Division by zero returns zero (making this a total function).
## from_real

```acorn
let from_real: Real -> Complex = function(r: Real) {
    Complex.new(r, Real.0)
}
```

Converts a real number to a complex number (with zero imaginary part).
## i

```acorn
let i: Complex = Complex.new(Real.0, Real.1)
```

The imaginary unit, satisfying `i² = -1`.
## im

```acorn
Complex.im: Complex -> Real
```

The imaginary part of the complex number.
## is_imaginary

```acorn
define is_imaginary(self) -> Bool {
    self.re = Real.0 and self.im != Real.0
}
```

True if this complex number is purely imaginary (no real component).
## is_real

```acorn
define is_real(self) -> Bool {
    self.im = Real.0
}
```

True if this complex number has no imaginary component.
## mul

```acorn
define mul(self, other: Complex) -> Complex {
    Complex.new(self.re * other.re - self.im * other.im, self.re * other.im + self.im * other.re)
}
```

Multiplies two complex numbers using the formula (a+bi)(c+di) = (ac-bd)+(ad+bc)i.
## neg

```acorn
define neg(self) -> Complex {
    Complex.new(-self.re, -self.im)
}
```

Yields the additive inverse of this complex number.
## re

```acorn
Complex.re: Complex -> Real
```

The real part of the complex number.
## reciprocal

```acorn
define reciprocal(self) -> Complex {
    self.conj * Complex.from_real(self.abs_squared.reciprocal)
}
```

Computes the multiplicative inverse (1/z) for non-zero complex numbers.
Yields 0 when applied to 0 (division by zero yields zero).
