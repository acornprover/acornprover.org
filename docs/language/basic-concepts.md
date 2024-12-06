---
sidebar_position: 1
---

# Basic Concepts

Acorn is a line-oriented language. Usually, you write one thing on one line, then continue on to the next line.

Sometimes, code is grouped into blocks. These are delineated with `{ ... }` braces, and sometimes keywords to connect subsequent blocks. Inside the blocks, it's one thing per line.

Comments start with `//` and extend through the rest of the line.

Line breaks inside parentheses or after infix operators are ignored, which you can use to split a statement among multiple lines if you want.

## Theorems

A typical Acorn file is mostly a bunch of theorems. Theorems look like this:

```acorn
theorem my_theorem(var1: Type1, var2: Type2, var3: Type3) {
    expression
} by {
    statement1
    statement2
    statement3
}
```

Theorems typically have two blocks. The first block is the thing we're proving. The `by` block is the proof. If it's simple enough for the AI to prove directly, the second block is optional.

The variables defined as the arguments to the theorem can be used within both the expression of the theorem, and its proof.

## Expressions

An expression in Acorn is either a named value, or a way of building one value out of other values. Here are some example expressions.

```acorn
// Logic
p -> q
p or q
p and q
not p
p <-> q
true
false

// Arithmetic
1 + 1
(1 + 2) * 3
2 + 2 < 5

// Calling functions
foo(bar, baz, qux)

// An equality is an expression
2 + 2 = 4

// Expressions can get complicated
n > 1 and not exists(d: Nat) { d > 1 and d != n and exists(q: Nat) { q * d = n } }
```

The first step in verification is compilation. When an expression is malformed, or does not typecheck, this should be reported as a red-squiggle error during the compilation phase. Compilation turns each expression into a normalized internal representation, with data structures designed for fast proving.

## Statements

Acorn is a statement-based language. When you verify Acorn code, it checks that every statement is well-formed and true.

If you write an expression by itself on a line, that counts as a statement. You are expressing the proposition that this expression is always true.

Let's look an example from the standard library:

```acorn
theorem lt_cancel_suc(a: Nat, b: Nat) {
    a.suc < b.suc -> a < b
} by {
    a.suc <= b.suc
    b.suc != a.suc
    a <= b and b != a
}
```

The entire theorem is a statement. It doesn't have a "return value". Once the verifier proves it, all the subsequent code can use it as a proof step.

The individual lines inside the `by` block are also each simple statements. They are each single expressions. You can think of single-expression statements as saying, "I declare that this expression is true".

Inside the block, any premises of the theorem statement can be assumed to be true, and the goal is to prove the conclusion. In this case, the premise is:

```acorn
a.suc < b.suc
```

and the conclusion is:

```acorn
a < b
```

During verification, after compilation comes proving. The prover searches for a proof for every statement. In general, the proof for a statement can use all statements before it. When the prover cannot find a proof for a theorem, this is reported as a yellow-squiggle warning.

## Types

Acorn has strong, static typing. Every expression has a type.

Variable names start with a lowercase letter. Type names start with an uppercase letter.

Function types can be defined based on their argument type and return type:

```acorn
// Functions that take a natural number and return another, like "successor"
Nat -> Nat

// Functions that take two natural numbers and return another, like "addition"
(Nat, Nat) -> Nat
```

## Non-features

Acorn's goal is to make it easy to do math with the help of powerful AI. Completeness can be sacrificed in favor of any other quality.

Acorn is not a programming language. You can't write a webserver in it.

Acorn does not support constructive logic. Classical logic, including the law of the excluded middle, is built into the kernel.

Acorn assumes the axiom of choice. Skolemization is built into the kernel.

Acorn doesn't really use the Curry-Howard correspondence. Proofs and types are different things. Typechecking happens first, then proving.
