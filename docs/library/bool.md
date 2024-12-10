# Bool

The `Bool` type is provided by the kernel, rather than a particular file in the standard library.

`true` and `false` are constants of type `Bool`.

A number of operators are available for `Bool` values.

```acorn
// p implies q
p -> q

// Disjunction
p or q

// Conjunction
p and q

// Negation
not p

// Iff
p <-> q

// Equality. Just like everything else.
p = q
```