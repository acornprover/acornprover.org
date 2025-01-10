---
sidebar_position: 4
---

# The Acorn Master Plan

Acorn is a theorem prover. It checks that a mathematical proof is perfectly correct.

Acorn is designed to be the easiest theorem prover to use. But you might question how much this really matters. Does society have a big problem with incorrect mathematical proofs?

Well, no.

The overarching purpose of the Acorn project is to give computers a deep understanding of all mathematical knowledge, so that computers and humans can work together to advance mathematics. We are building a library of all known mathematics, plus an AI that deeply understands this library.

The strategy is to focus Acorn's AI assistant on formalization. The assistant is not designed to solve novel problems. It is optimized for filling in the details, to bridge the gap between an informal sketch of a proof, and a rigorous step-by-step solution.

This form of AI makes Acorn easier to use, which helps us improve the library, which improves our data, which makes the AI better. It's a virtuous cycle.

Eventually, it should be easier for mathematicians to check their reasoning with Acorn than to review a paper in PDF form.

Let's discuss two common objections to this plan.

## 1. Scaling LLMs is all we need.

Language models are not a replacement for theorem provers. They are complements.

If we have a generative AI that outputs brilliant mathematics 99% of the time, and hallucinates an error 1% of the time, that still isn't good enough for many purposes. If we try to produce a large amount of output, like a series of research papers, the result will contain errors. But if we can combine this sometimes-brilliant generative system with a rigorous verifier, the tools together can create a large output that is error-free.

A theorem prover is even more necessary in a world with many powerful large language models. What do you do when two superhuman black-box LLMs disagree with each other? Ask an open source arbiter whose inner workings are comprehensible.

## 2. Math AI should just solve hard math problems.

There will always be a need for humans to interact with mathematics. No matter how good the AI problem-solvers get, there will always be unsolved problems. People will want to investigate new mathematical concepts, inspired by science, engineering, or their own aesthetic principles.

Acorn is designed for humans and computers to work together. Sometimes the human will be able to make progress on a mathematical task, and sometimes the computer will be.

Formalization is the key challenge of human-computer interaction because it is the only way to eliminate error, in a form that can be understood by both humans and computers.

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
