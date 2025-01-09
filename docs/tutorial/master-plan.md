---
sidebar_position: 4
---

# The Acorn Master Plan

Acorn is a theorem prover. It checks that a mathematical proof is perfectly correct.

Acorn is designed to be the easiest theorem prover to use. But you might question how much this really matters. Does society have a big problem with incorrect mathematical proofs?

Well, no.

The overarching purpose of the Acorn project is to give computers a deep understanding of all mathematical knowledge. A library of all known mathematics, plus an AI that deeply understands this library.

The strategy behind Acorn is to focus its AI assistant on formalization. The assistant is not designed to solve novel problems. It is optimized for filling in the details, to bridge the gap between an informal sketch of a proof, and a rigorous step-by-step solution.

This form of AI makes Acorn easier to use, which helps us improve the library, which improves our data, which makes the AI better. It's a virtuous cycle.

Eventually, it will be easier for mathematicians to verify a proof with Acorn than to review a paper in PDF form. Then it will start to become plausible to add all published mathematics to the Acorn library. At that point, all sorts of other tools can be built using an open source library containing all known mathematics. Tools for science, engineering, modeling, teaching, or programming.

Let's discuss two common objections to this plan.

## 1. Scaling LLMs is all we need.

Language models are not a replacement for theorem provers. They are complements.

If we have a generative AI that outputs brilliant mathematics 99% of the time, and "hallucinates" an error 1% of the time, that still isn't good enough for many purposes. If we try to produce a large amount of output, like to write a textbook, the result will contain errors. But if we can combine this sometimes-brilliant generative system with a rigorous verifier, the tools together can create a large output that is error-free.

A theorem prover is even more necessary in a world with many powerful large language models. What do you do when two superhuman black-box mathematical AIs disagree with each other? Ask an open source arbiter whose inner workings are comprehensible.

## 2. Math AI should solve hard math problems.

There is nothing wrong with making AI that solves hard math problems. In fact, it seems like a very exciting thing to work on.

But that is not the primary goal of the Acorn project. Acorn would like to help _you_ discover a proof to an unsolved mathematical problem. If you're a brilliant mathematician, perhaps Acorn can help with the boring parts of your work. If you're a brilliant AI programmer, Acorn is open source, so perhaps you can build it into a larger system.

The primary goal of the Acorn AI is to help with formalization. This is because a formalized library containing all known mathematics is a critical component for building more advanced systems, and the bottleneck in building such a library is the difficulty of formalization.

Specifically, the most difficult part of theorem proving is making progress on a partially complete formal proof. So this is the focus of the Acorn user interface, including the AI assistant.

## TLDR

Here's the plan in diagram form:

<div style={{ margin: '20px', padding: '20px' }}>
  <img src="/img/masterplan.svg" alt="Master Plan Diagram" />
</div>

## How Can I Help?

To learn more, you can check out the [Language Reference](/docs/category/language-reference).

If you'd like to contribute theorems to the Acorn library, check out the [Acorn library on GitHub](https://github.com/acornprover/acornlib).

If you have other ideas or questions about Acorn, let's [discuss them on Discord](https://discord.gg/RqXxaye4MC).

Thanks for reading!
