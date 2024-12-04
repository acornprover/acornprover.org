---
sidebar_position: 2
---

# Propositional Logic

Acorn has operators for the typical logical connectives.

```acorn
// p implies q
p -> q

// p iff q
p <-> q

// self-explanatory
not p
p or q
p and q
```

## Example Theorems

Theorems in propositional logic are usually simple enough that they can be proven in one step by the AI.

```acorn
theorem modus_ponens(p: Bool, q: Bool) {
    (p -> q) and p -> q
}

theorem modus_tollens(p: Bool, q: Bool) {
    (p -> q) and not q -> not p
}

theorem hypothetical_syllogism(p: Bool, q: Bool, r: Bool) {
    (p -> q) and (q -> r) -> (p -> r)
}
```

Note that the type is `Bool`, and not `Prop`. This is because Acorn separates value types from proofs. A `Bool` in Acorn does not have to be decidable, but it can be used as an argument to a function without having a proof for it, or without it being true.
