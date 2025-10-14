# List

```acorn
inductive List[T] {
    nil
    cons(T, List[T])
}
```

A generic list data structure that can hold elements of any type.
Lists are constructed using nil (empty list) and cons (prepending an element).

[GitHub](https://github.com/acornprover/acornlib/blob/master/src/list.ac)

---
## add

```acorn
define add(self, other: List[T]) -> List[T] {
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
define append(self, item: T) -> List[T] {
    self + List.singleton(item)
}
```

Appends a single element to the end of the list.
## cons

```acorn
List.cons: (T, List[T]) -> List[T]
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
## count

```acorn
define count(self, item: T) -> Nat {
    match self {
        List.nil[T] {
            Nat.0
        }
        List.cons(head, tail) {
            if head = item {
                1 + tail.count(item)
            } else {
                tail.count(item)
            }
        }
    }
}
```
## drop

```acorn
define drop(self, n: Nat) -> List[T] {
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
define drop_last(self, n: Nat) -> List[T] {
    match self {
        List.nil {
            List.nil[T]
        }
        List.cons(head, tail) {
            if tail.length < n {
                List.nil[T]
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
define filter(self, f: T -> Bool) -> List[T] {
    match self {
        List.nil {
            List.nil[T]
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

Alternate name for `Nat.range`.
Creates a list of natural numbers from 0 to n-1.
Filters the list, keeping only elements that satisfy the given predicate.
## find_first_idx

```acorn
define find_first_idx(self, item: T) -> Nat {
    match self {
        List.nil {
            Nat.0
        }
        List.cons(head, tail) {
            if head = item {
                Nat.0
            } else {
                1 + tail.find_first_idx(item)
            }
        }
    }
}
```
## get_idx

```acorn
define get_idx(self, i: Nat) -> Option[T] {
    match self {
        List.nil {
            Option.none
        }
        List.cons(head, tail) {
            if i > 0 {
                tail.get_idx(i - 1)
            } else {
                Option.some(head)
            }
        }
    }
}
```
## is_unique

```acorn
define is_unique(self) -> Bool {
    self.unique = self
}
```
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
## map

```acorn
define map[U](self, f: T -> U) -> List[U] {
    match self {
        List.nil {
            List.nil[U]
        }
        List.cons(head, tail) {
            List.cons(f(head), tail.map(f))
        }
    }
}
```

Applies a function to each element of a list, creating a new list of results.
## nil

```acorn
List.nil: List[T]
```

The empty list.
## range

```acorn
let range: Nat -> List[Nat] = Nat.range
```
## remove_elem

```acorn
define remove_elem(self, elem: T) -> List[T] {
    match self {
        List.nil {
            List.nil[T]
        }
        List.cons(head, tail) {
            if head != elem {
                List.cons(head, tail.remove_elem(elem))
            } else {
                tail.remove_elem(elem)
            }
        }
    }
}
```

Remove all instances of an element from the list.
## singleton

```acorn
let singleton: T -> List[T] = function(x: T) {
    List.cons(x, List.nil[T])
}
```

Creates a list containing a single element.
## tail

```acorn
define tail(self) -> List[T] {
    match self {
        List.nil {
            List.nil[T]
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
define unique(self) -> List[T] {
    match self {
        List.nil {
            List.nil[T]
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
