# Int

```acorn
inductive Int {
    from_nat(Nat)
    neg_suc(Nat)
}
```

The `Int` type represents integers.
It's defined by its two constructors.

`from_nat` takes a natural number to an integer, which seems intuitive.
`neg_suc` takes `x` to `-(x+1)`, which is somewhat less intuitive. We do this so
that every integer can be represented either as a `from_nat` or a `neg_suc`.

```acorn
numerals Int

2 = Int.from_nat(Nat.2)
-2 = Int.neg_suc(Nat.1)
```

[GitHub](https://github.com/acornprover/acornlib/blob/master/src/int/default.ac)

---
## abs

```acorn
define abs(self) -> Int {
    Int.from_nat(abs(self))
}
```

The absolute value of an integer.
## add

```acorn
define add(self, other: Int) -> Int {
    sub_nat(self.pos_part + other.pos_part, self.neg_part + other.neg_part)
}
```

The sum of two integers.
## divides

```acorn
define divides(self, b: Int) -> Bool {
    exists(d: Int) {
        d * self = b
    }
}
```

True if this integer divides b (equivalently, there exists d such that d * this = b).
## exp

```acorn
define exp(self, b: Nat) -> Int {
    match b {
        Nat.0 {
            1
        }
        Nat.suc(pred) {
            self * self.exp(pred)
        }
    }
}
```

Note that 0^0 = 1.
TODO: we should be able to inherit `pow` from some underlying algebraic structure.
## from_nat

```acorn
Int.from_nat: Nat -> Int
```

`Int.from_nat` converts a natural number to an integer via the typical embedding.
## is_negative

```acorn
define is_negative(self) -> Bool {
    self != Int.from_nat(abs(self))
}
```

True if the integer is negative.
## is_positive

```acorn
define is_positive(self) -> Bool {
    (-self).is_negative
}
```

True if the integer is positive.
## lte

```acorn
define lte(self, b: Int) -> Bool {
    (b - self).is_positive or self = b
}
```

`a <= b` when `(a - b)` is positive or zero.
## mul

```acorn
define mul(self, n: Int) -> Int {
    if n.is_positive {
        self.mul_nat(abs(n))
    } else {
        -(self.mul_nat(abs(n)))
    }
}
```

The product of two integers.
## mul_nat

```acorn
define mul_nat(self, n: Nat) -> Int {
    if self.is_negative {
        -(Int.from_nat(abs(self) * n))
    } else {
        Int.from_nat(abs(self) * n)
    }
}
```

Multiply this integer by a natural number.
## neg

```acorn
define neg(self) -> Int {
    match self {
        Int.from_nat(n) {
            neg_nat(n)
        }
        Int.neg_suc(n) {
            Int.from_nat(n.suc)
        }
    }
}
```

The negation of an integer.
## neg_part

```acorn
define neg_part(self) -> Nat {
    if self.is_positive {
        Nat.0
    } else {
        abs(self)
    }
}
```

The negative part of this integer.
## neg_suc

```acorn
Int.neg_suc: Nat -> Int
```

`Int.neg_suc` converts a natural number `x` into `-(x+1)`.
This isn't particularly intuitive, it's just to give every integer a unique constructor.
In particular, `neg_suc` can construct any negative integer, but not zero.
## pos_part

```acorn
define pos_part(self) -> Nat {
    if self.is_positive {
        abs(self)
    } else {
        Nat.0
    }
}
```

The positive part of this integer.
## read

```acorn
define read(self, other: Int) -> Int {
    10 * self + other
}
```

The integer formed by appending a digit to this integer in base 10.
