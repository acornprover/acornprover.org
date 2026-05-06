---
slug: constrained-types-return-options
title: Constrained Types Return Options
authors: [lacker]
tags: [language]
---

Constrained types in Acorn now have a simple, explicit constructor behavior: `new` returns an `Option`.

<!-- truncate -->

Here's a constrained type:

```acorn
structure OrderedIntPair {
    first: Int
    second: Int
} constraint {
    first <= second
}
```

When you call `OrderedIntPair.new`, the result tells you whether the constraint was satisfied:

- If the arguments satisfy the constraint, you get `Option.some(...)`.
- If they do not, you get `Option.none`.

That means creating a value of a constrained type now looks like this:

```acorn
let Option.some(pair) = OrderedIntPair.new(1, 2) by {
    1 <= 2
}
```

And unsuccessful constructions are explicit too:

```acorn
theorem wrong_order {
    OrderedIntPair.new(2, 1) = Option.none
} by {
    not (1 <= 2)
}
```

This makes it easy to distinguish successful and unsuccessful constructions. You don't have to write functions that return a "default case" when the arguments have bad values. This is the recommended way for implementing mathematically partial functions, where they may not have a value for every input.

Constrained types may also have no elements at all. In that case, `new` always returns `Option.none`.

For more details, see the [structure types documentation](/docs/language/structure-types/).
