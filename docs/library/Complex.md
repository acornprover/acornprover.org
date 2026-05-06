---
title: Complex
---

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
    self * other.inverse
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
## re

```acorn
Complex.re: Complex -> Real
```

The real part of the complex number.
