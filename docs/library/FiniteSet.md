# FiniteSet

```acorn
structure FiniteSet[T] {
    contains: T -> Bool
} constraint {
    finite_constraint(contains)
}
```

A finite set represented as a boolean membership function.
The constraint ensures that only finitely many elements are members.

[GitHub](https://github.com/acornprover/acornlib/blob/master/src/finite_set.ac)

---
## contains

```acorn
FiniteSet.contains: (FiniteSet[T], T) -> Bool
```

Finite sets are defined by a membership function.
## from_list

```acorn
let from_list: List[T] -> FiniteSet[T] = function(ts: List[T]) {
    FiniteSet.new(ts.contains)
}
```

Converts a list to a finite set.
## insert

```acorn
define insert(self, item: T) -> FiniteSet[T] {
    FiniteSet.new(functional_insert(self.contains, item))
}
```

Adds an element to the set. If the item is already present, this is a no-op.
## is_empty

```acorn
define is_empty(self) -> Bool {
    forall(x: T) {
        not self.contains(x)
    }
}
```

True if the set contains no elements.
## remove

```acorn
define remove(self, item: T) -> FiniteSet[T] {
    FiniteSet.new(functional_remove(self.contains, item))
}
```

Removes an element from the set. If the item isn't present, this is a no-op.
