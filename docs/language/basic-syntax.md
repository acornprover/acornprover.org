---
sidebar_position: 1
---

# Basic Syntax

Acorn is a line-oriented language. Usually, you write one thing on one line, then continue on to the next line.

Sometimes, code is grouped into blocks. These are delineated with `{ ... }` braces, and sometimes keywords to connect subsequent blocks. Inside the blocks, it's one thing per line.

Comments start with `//` and extend through the rest of the line.

For example:

```acorn
// Here's an if-else
if foo {
    bar
} else {
    baz
}

// Here's a theorem
theorem foo {
    bar
} by {
    baz
}
```

Line breaks inside parentheses or after infix operators are ignored, which you can use to split a statement among multiple lines if you want.

## Expressions

An expression in Acorn is either a named value, or a way of building one value out of other values. Here are some examples.

```acorn
true

false

1

1 + 1

(1 + 2) + 3

foo(bar, baz, qux)
```

## Statements

Acorn is a statement-based language. Sometimes, a statement requires a proposition to be proven. A statement can also introduce a proposition, which can be used to prove subsequent things. These may be slightly different propositions.

If you write an expression by itself on a line, that counts as a statement. You are expressing the proposition that this expression is always true.

Here's an example from the standard library:

```acorn
theorem lt_cancel_suc(a: Nat, b: Nat) {
    a.suc < b.suc -> a < b
} by {
    a.suc <= b.suc
    b.suc != a.suc
    a <= b and b != a
}
```

The entire theorem is a statement. It doesn't have a "return value". Once the verifier proves it, it's available to all subsequent code.

The individual lines inside the `by` block are also each simple statements. They are each single expressions. You can think of single-expression statements as saying, "we declare this expression to be a true proposition".

When we prove this theorem, we can use the variables `a` and `b`, as well as the condition `a.suc < b.suc`.

When we use the theorem later, we can bind it to any variables. So the form we prove and the form we use are slightly different.

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

## Philosophy of Proofs vs Types

The "Curry-Howard correspondence" is a famous and profound connection between logic and computation. The Curry-Howard correspondence shows how each logical proposition can be viewed as a type in a programming language, a proof can be viewed as a program of the associated type, and proof normalization can be viewed as program execution. It is beautiful. A diamond-like jewel.

Acorn does not use the Curry–Howard correspondence.

In Acorn, proofs and types are fundamentally different things. The Acorn verifier runs in two phases: first compilation, then proving. This makes it very natural to express "incomplete proofs" in Acorn. An incomplete proof is one where typechecking works, but proving doesn't work.

An incomplete proof is the ideal artifact for a human to share with an AI. The human has done some work, but it would be really nice if the AI could take it from here.
