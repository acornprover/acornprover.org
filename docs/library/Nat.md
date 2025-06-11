# Nat

```acorn
inductive Nat {
    0
    suc(Nat)
}
```

Natural numbers, the soul of arithmetic.
We build natural numbers from Acorn's inherent properties of inductive types.

[GitHub](https://github.com/acornprover/acornlib/blob/master/src/nat/default.ac)

---
## add

```acorn
define add(self, other: Nat) -> Nat {
    match other {
        Nat.0 {
            self
        }
        Nat.suc(pred) {
            self.add(pred).suc
        }
    }
}
```

Addition is defined recursively.
## exp

```acorn
define exp(self, b: Nat) -> Nat {
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
TODO: ideally this would use an inherited `pow` from `Monoid`.
## gt

```acorn
define gt(self, b: Nat) -> Bool {
    b < self
}
```

TODO: currently we define this separately, but we could inherit it from `PartialOrder`.
## gte

```acorn
define gte(self, b: Nat) -> Bool {
    b <= self
}
```

TODO: currently we define this separately, but we could inherit it from `PartialOrder`.
## lt

```acorn
define lt(self, b: Nat) -> Bool {
    self <= b and self != b
}
```

TODO: currently we define this separately, but we could inherit it from `PartialOrder`.
## lte

```acorn
define lte(self, b: Nat) -> Bool {
    exists(c: Nat) {
        self + c = b
    }
}
```

`a <= b` if there's a naturla number that can be added to `a` to get `b`.
## mul

```acorn
define mul(self, b: Nat) -> Nat {
    match b {
        Nat.0 {
            0
        }
        Nat.suc(pred) {
            self.mul(pred) + self
        }
    }
}
```

Multiplication is defined recursively.
## read

```acorn
define read(self, other: Nat) -> Nat {
    10 * self + other
}
```

The number formed by appending a digit to this one in base 10.
## sub

```acorn
define sub(self, b: Nat) -> Nat {
    bounded_sub(self, b)
}
```

Subtraction on natural numbers is defined oddly; it "caps out" at zero.
If `self < b`, then `self - b = 0`.
It would be better to define this as "not valid" on some inputs, but
the language doesn't make that convenient yet.
## suc

```acorn
Nat.suc: Nat -> Nat
```

The successor of a natural number is also a natural number.
