# List

```acorn
inductive List<T> {
    nil
    cons(T, List<T>)
}
```

A generic list data structure that can hold elements of any type.
Lists are constructed using nil (empty list) and cons (prepending an element).

[GitHub](https://github.com/acornprover/acornlib/blob/master/src/list.ac)

---
## add

```acorn
define add(self, other: List<T>) -> List<T> {
    match self {
        List.nil {
            other
        }
        List.cons(head, tail) {
            List.cons(head, tail.add(other))
        }
    }
}
```

Concatenates two lists together.
## append

```acorn
define append(self, item: T) -> List<T> {
    self + List.singleton(item)
}
```

Appends a single element to the end of the list.
## cons

```acorn
List.cons: (T, List<T>) -> List<T>
```

Constructs a list by prepending an element to an existing list.
## contains

```acorn
define contains(self, item: T) -> Bool {
    match self {
        List.nil {
            false
        }
        List.cons(head, tail) {
            if head = item {
                true
            } else {
                tail.contains(item)
            }
        }
    }
}
```

True if this list contains the given item.
## contains_every

```acorn
define contains_every(self) -> Bool {
    forall(x: T) {
        self.contains(x)
    }
}
```

True if this list contains every element of type T.
## drop

```acorn
define drop(self, n: Nat) -> List<T> {
    match n {
        Nat.0 {
            self
        }
        Nat.suc(pred) {
            self.tail.drop(pred)
        }
    }
}
```

Removes the first n elements from the list.
## drop_last

```acorn
define drop_last(self, n: Nat) -> List<T> {
    match self {
        List.nil {
            List.nil<T>
        }
        List.cons(head, tail) {
            if tail.length < n {
                List.nil<T>
            } else {
                List.cons(head, tail.drop_last(n))
            }
        }
    }
}
```

Removes the last n elements from the list.
## filter

```acorn
define filter(self, f: T -> Bool) -> List<T> {
    match self {
        List.nil {
            List.nil<T>
        }
        List.cons(head, tail) {
            if f(head) {
                List.cons(head, tail.filter(f))
            } else {
                tail.filter(f)
            }
        }
    }
}
```

Creates a list of natural numbers from 0 to n-1.
Filters the list, keeping only elements that satisfy the given predicate.
## length

```acorn
define length(self) -> Nat {
    match self {
        List.nil {
            Nat.0
        }
        List.cons(_, tail) {
            tail.length.suc
        }
    }
}
```

Yields the number of elements in the list.
## nil

```acorn
List.nil: List<T>
```

The empty list.
## range

```acorn
let range: Nat -> List<Nat> = range
```
## singleton

```acorn
let singleton: T -> List<T> = function(x: T) {
    List.cons(x, List.nil<T>)
}
```

Creates a list containing a single element.
## tail

```acorn
define tail(self) -> List<T> {
    match self {
        List.nil {
            List.nil<T>
        }
        List.cons(h, t) {
            t
        }
    }
}
```

Yields the list without its first element.
Yields nil for an empty list.
## unique

```acorn
define unique(self) -> List<T> {
    match self {
        List.nil {
            List.nil<T>
        }
        List.cons(head, tail) {
            if tail.contains(head) {
                tail.unique
            } else {
                List.cons(head, tail.unique)
            }
        }
    }
}
```

Removes all duplicate elements from the list.
When duplicates exist, the last occurrence is kept.
