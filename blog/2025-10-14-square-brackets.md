---
slug: square-brackets
title: Square Brackets
authors: [lacker]
tags: [language]
---

We're making a big change to the Acorn syntax: using square brackets for type parameters, instead of angle brackets.

Before:

```acorn
inductive List<T> {
    nil
    cons(T, List<T>)
}
```

After:

```acorn
inductive List[T] {
    nil
    cons(T, List[T])
}
```

<!-- truncate -->

Both syntaxes are supported, starting in Acorn 0.1.8. You are encouraged to use square brackets for new code,
and eventually we will deprecate angle brackets.

## But why?

One of the most common feature requests has been _dependent types_. A dependent type is a type that is based on a value, not just other types. For example, "all 4 by 4 real matrices" is a dependent type, since it's dependent on the number 4. Dependent types are common throughout mathematics, and it's a medium-term goal for Acorn to support them cleanly.

In the original Acorn syntax, angle brackets had two meanings. Before a value, a `<` meant "less than". Before a type, a `<` meant "a list of type parameters is about to start".

Once we have dependent types, the logical syntax would be to treat values just like other type parameters. So a `Vector<Real, 4>` could represent a vector of four real numbers. However, once we have values inside type parameters, we can no longer use the same method for disambiguating the meaning of the angle bracket.

For example, consider this expression:

```acorn
let value = a<b>(c)>(d)
```

It could be parsed in two ways:

```acorn
let x = b > c
let value = a<x>(d)
```

Or alternatively:

```acorn
let x = a<b>(c)
let value = x > d
```

We have to either disambiguate using whitespace, or using a different token. Since square brackets are also reasonably common for expressing type parameters, used in Python and TypeScript, they seem like a reasonable choice.

## Conclusion

Hopefully this migration isn't too annoying for you. If you're using an LLM agent like Claude Code, it's pretty easy - just paste in the text of this blog post and it'll figure out the migration for you. Good luck!
