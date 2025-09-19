---
slug: proof-certificates
title: Proof Certificates
authors: [lacker]
tags: [tooling]
---

Acorn 0.1 is out! It might not be obvious at first, but there's a big change in the guts of how the prover works. When a proof is successfully verified, the build directory now contains a "proof certificate" explaining step by step how the proof works.

<!-- truncate -->

The proof certificate itself is simple: it's just valid Acorn code. It spells out every step of the proof in high detail. If you want to take a look under the hood, the certificates are kept in `.jsonl` files in the `build` directory, or alongside your `.ac` files if you don't have a `build` directory. They look like:

```json
{
  "goal": "f(List.nil<T>)",
  "proof": [
    "List.nil<T>.contains(item) or f(List.nil<T>)",
    "List.nil<T>.contains(item)",
    "List.nil<T> != List.nil<T> or not List.nil<T>.contains(item)"
  ]
}
```

Proof certificates are a restricted subset of Acorn. They only support certain basic steps of reasoning:

- Assuming the negated goal, to prove a contradiction
- Instantiation of a generic theorem
- Congruence closure, i.e. sequences of substitution of equal terms
- Propositional calculus on concrete literals
- Introducing variables for existential quantifiers
- Plus a few obscure edge cases

Since the reasoning steps are restricted, it's fast to validate a proof certificate. This just speeds up many common operations with Acorn.

More excitingly but abstractly, the proof certificate format is no longer dependent on the internals of the prover, which means in the future we'll be able to experiment with slower, more powerful AI models.

If you're interested in helping out with this experimentation, let us know in [Discord](https://discord.gg/RqXxaye4MC). Happy proving!
