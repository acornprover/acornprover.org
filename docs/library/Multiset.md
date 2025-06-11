# Multiset

```acorn
structure Multiset<T> {
    multiplicity: T -> Nat
}
```

A multiset (bag) that can contain multiple copies of the same element.
Each element has a multiplicity indicating how many times it appears.

[GitHub](https://github.com/acornprover/acornlib/blob/master/src/multiset.ac)

---
## contains

```acorn
define contains(self, item: T) -> Bool {
    self.multiplicity(item) != 0
}
```

True if the multiset contains at least one copy of the given item.
## has_duplicates

```acorn
define has_duplicates(self) -> Bool {
    exists(x: T) {
        self.multiplicity(x) > 1
    }
}
```

True if any element appears more than once in the multiset.
## insert

```acorn
define insert(self, item: T) -> Multiset<T> {
    Multiset.new(function(x: T) {
        if x = item {
            self.multiplicity(x).suc
        } else {
            self.multiplicity(x)
        }
    })
}
```

Adds one more copy of the given item to the multiset.
## is_empty

```acorn
define is_empty(self) -> Bool {
    forall(x: T) {
        self.multiplicity(x) = 0
    }
}
```

True if the multiset is empty (contains no elements).
## multiplicity

```acorn
Multiset.multiplicity: (Multiset<T>, T) -> Nat
```

A function taking each element to a count of how many times it appears in the multiset.
