---
sidebar_position: 4
---

# Now What?

For decades, theorem provers have been a niche tool. AI offers us the possibility for a mathematical revolution.

Imagine a future where every mathematician used a theorem prover, and the theorem prover worked really well. Nobody would call it a "theorem prover" any more. It would just be a part of every tool that used math. Any mathematician, scientist, or engineer could have an assistant who could do math better than any mathematician can today.

Let's build it, and let's make it open for anyone to use, for free, in any way they want.

It would be great if you, personally, could help out. Let's talk about how.

## The Acorn Master Plan

This, overall, is the Acorn master plan:

<div style={{ margin: '20px', padding: '20px' }}>
  <img src="/img/masterplan.svg" alt="Master Plan Diagram" />
</div>

It's a virtuous cycle.

1. When Acorn gets easier to use, it helps people add more mathematics to the Acorn library.

2. When the library gets larger, we get more training data to help make the AI better.

3. When the AI gets better, it makes Acorn easier to use.

Acorn is completely open source. You are encouraged to help out with any of these three components.

## The Acorn Library

If you read this far in the documentation, you're capable of helping out with the Acorn library.

What could you add? There is a lot of "obvious mathematics" that we're missing. Here's a list of the [top 100 theorems](https://www.cs.ru.nl/~freek/100/) along with which other theorem provers have proven what. Anything on there would be great to add.

Really, we are early on in the development of the library. If you [take a look at what we have](https://github.com/acornprover/acornlib) you will probably notice many basic things that are missing.

The philosophy of the Acorn library is different than most theorem provers. We would like all sorts of submissions, even things that are not "mathematically important". We want as much training data as possible. If you have some crazy hobby project that nobody else cares about, submit it to the standard library! Put it in the [problems directory](https://github.com/acornprover/acornlib/tree/master/problems) so that we know to use it for training data, but not for other people to depend on.

To work on the library, fork it on GitHub, clone the fork to your local machine, then open it up in VS Code as a separate project. The Acorn extension should automatically realize that you're developing this version of the library, instead of the built-in one.

## The Acorn AI

If you're an AI developer, you're welcome to help out with the Acorn AI.

Currently, the [Acorn AI codebase](https://github.com/acornprover/acorn/tree/master/python) trains one fully open source model that's small enough to run on a laptop. It's used in two different ways. It's used by the verifier to check entire files, and it's used by the slower proof search process when you click on a yellow-squiggled proposition.

It's important that there be a single canonical verifier, that's completely open source and widely usable by individuals without many compute resources. But for proof search, it would be useful to support multiple different mechanisms, including ones that aren't free or open source, as long as they all help people contribute back to the same shared open library.

In particular, we need to pay attention to the dynamic that generalist LLMs are becoming more and more powerful. We want to be a complement to those services, not to compete with them.

## The User Experience

This is probably the hardest part to contribute to. Or at least the hardest part to convince other people to contribute to. Formal math and AI models seem more fun and exciting compared to the UI of a VS Code extension.

At any rate, you know, shoot your shot. The [code for the extension](https://github.com/acornprover/acorn/tree/master/vscode) is open. To make changes to it, check the [instructions for installing Acorn from source](https://github.com/acornprover/acorn/tree/master).

## Conclusion

There is always the most popular form of contribution: complaining about things you wish were better. This is great! [File an issue.](https://github.com/acornprover/acorn/issues)

If you'd like to learn more, you can check out the [Language Reference](/docs/category/language-reference), or you can look through the code in the [Acorn library](https://github.com/acornprover/acornlib).

Thanks for reading so far. We hope you give Acorn a try and we hope you like it.
