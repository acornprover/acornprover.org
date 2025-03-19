---
slug: the-build-cache
title: The Build Cache
authors: [lacker]
tags: [tooling]
---

There's a useful new feature in Acorn Prover 0.0.8: a build cache.

When you save changes to an Acorn project, the AI model automatically completes simple proofs with missing steps. Usually this works great, but this can make refactoring more difficult. In particular, if you make changes to a module like `nat.ac` that many other modules depend on, it can be slow to rebuild everything. If you want to remove a theorem that is used in many places, this can involve many slow rebuilds.

The build cache mostly solves this problem. Instead of discarding the detailed proof after finding it, Acorn now saves build artifacts in a `build` directory of the library. While testing, this speeds up partially-cached refactoring operations like renames by a factor of roughly 10x.

These build artifacts are somewhat human-readable, for the curious. In particular, it can be interesting to see the dependencies between theorems. These make up most of the build cache, as premise selection is the vast majority of the work of the prover:

```
  add_from_int:
    rat:
    - add_int_eq_int_add
    real:
    - Real.from_int
    - add_from_rat
```

For the most part, though, you won't notice anything visibly different with Acorn 0.0.8. Everything should just be faster, and work the same way you're used to. Give it a try!
