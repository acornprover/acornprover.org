---
title: Nat
---

```acorn
inductive Nat {
    zero
    suc(Nat)
}
```

Natural numbers, the soul of arithmetic.
We build natural numbers from Acorn's inherent properties of inductive types.

[GitHub](https://github.com/acornprover/acornlib/blob/master/src/nat/default.ac)

---
## binom

```acorn
let binom = binom
```

The binomial coefficient "n choose k".
## divides

```acorn
define divides(self, b: Nat) -> Bool {
    exists(c: Nat) {
        self * c = b
    }
}
```

True if this number divides b (equivalently, there exists c such that this * c = b).
## factorial

```acorn
define factorial(self) -> Nat {
    match self {
        Nat.zero {
            1
        }
        Nat.suc(pred) {
            self * pred.factorial
        }
    }
}
```

The factorial of this number (the product 1 * 2 * ... * n).
## gcd

```acorn
define gcd(self, b: Nat) -> Nat {
    gcd_pair(Pair.new(self, b))
}
```

The greatest common divisor of this number and b.
## is_composite

```acorn
define is_composite(self) -> Bool {
    exists(b: Nat, c: Nat) {
        1 < b and 1 < c and self = b * c
    }
}
```

True if this number is composite (has nontrivial factors).
## is_prime

```acorn
define is_prime(self) -> Bool {
    1 < self and not self.is_composite
}
```

True if this number is prime (greater than 1 and not composite).
## match

```acorn
Nat.match: (Nat, R*, Nat -> R*) -> R*
```
## mod

```acorn
let mod = nat_mod
```

The remainder when dividing this number by m.
## range

```acorn
define range(self) -> List[Nat] {
    match self {
        Nat.zero {
            List.nil[Nat]
        }
        Nat.suc(n) {
            n.range.append(n)
        }
    }
}
```

Creates a list of natural numbers from 0 to n-1.
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
## until

```acorn
define until(self, n: Nat) -> List[Nat] {
    n.range.drop(self)
}
```

Creates a list of natural numbers from self to n-1 (exclusive of n).
## upto

```acorn
define upto(self, n: Nat) -> List[Nat] {
    self.until(n.suc)
}
```

Creates a list of natural numbers from self to n (inclusive).
## zero

```acorn
Nat.zero: Nat
```

Zero is a natural number, because it's much more convenient this way.
