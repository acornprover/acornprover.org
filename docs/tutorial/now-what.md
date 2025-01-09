---
sidebar_position: 4
---

# The Acorn Master Plan

Acorn is a theorem prover. It checks that a mathematical proof is perfectly correct.

Acorn is designed to be the easiest theorem prover to use. But you might question how much this really matters. Does society have a big problem with incorrect mathematical proofs?

Well, no.

The overarching purpose of the Acorn project is to give computers a perfect understanding of all mathematical knowledge. A library of all known mathematics, plus an AI that deeply understands this library.

The strategy behind Acorn is to focus its AI assistant on formalization. The assistant is not designed to solve novel problems. It is optimized for filling in the details, to bridge the gap between an informal outline of a proof, and a rigorous step-by-step solution.

The AI makes Acorn easier to use, which helps us improve the library, which improves our data, which makes the AI better. It's a virtuous cycle.

Eventually, it will be easier for mathematicians to verify a proof with Acorn than to review a paper in PDF form. Then it will be natural to add all published mathematics to the Acorn library.

Let's discuss two common objections to this plan.

## 1. Scaling LLMs is all we need.

Generative AI is not a replacement for a theorem prover. It is the perfect complement.

If we have a system that outputs brilliant mathematics 99% of the time, and makes an error 1% of the time, that isn't good enough. If we combine 100 components built by that system, the result probably has an error.

## 2. You should focus on benchmark X.

Unfortunately, there currently isn't a public benchmark that closely corresponds to the experience of using a theorem prover.

Most benchmarks are focused on "solving problems". That's a neat thing for AI to do, but it isn't Acorn's primary goal.

"Autoformalization" is closer, but it still isn't quite right. The most important part of the theorem-proving experience is making progress on a partially-complete proof, rather than proving something from scratch, and there isn't a good benchmark for this right now.

## TLDR

Here's the plan in diagram form:

<div style={{ margin: '20px', padding: '20px' }}>
  <img src="/img/masterplan.svg" alt="Master Plan Diagram" />
</div>

## How Can I Help?

If you'd like to learn more, you can check out the [Language Reference](/docs/category/language-reference), or you can look through the code in the [Acorn library](https://github.com/acornprover/acornlib).

Thanks for reading!
