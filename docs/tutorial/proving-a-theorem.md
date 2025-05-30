---
sidebar_position: 1
---

# Proving A Theorem

Open up VS Code and make a new Acorn file. An Acorn file has to end with a `.ac` extension, so save this new file as `hello.ac`.
You can make a new folder for the project, or just stick this file anywhere.

Once you save this file, the Assistant window should appear.

The assistant will show useful information while we're writing Acorn code.
If you accidentally close it, you can open it back up with Ctrl-Enter, or by clicking the little green acorn
icon in the upper right.

Now let's get proving. Enter this code:

```acorn
from nat import Nat

theorem hello_world(a: Nat, b: Nat) {
    a < b implies a != b
}
```

Informally, we are proving the theorem, "when one number is less than another, they are not equal".

When you're done, save the file.

When you save, Acorn's AI checks your work, to ensure that everything you wrote can be proven. The AI runs locally, so you don't need internet access. You should see a little check mark appear to the left of your code. Click on the theorem, and the assistant should tell you, yep, this is trivial, and also give you a longer explanation for why exactly it's true.

Success!

If this didn't work, check to be sure that the "Acorn Prover" extension is installed and activated.

## What did I just type?

Let's go over each of the parts of the code.

```acorn
from nat import Nat
```

This is an import statement, using syntax like Python. "nat" is the name of the module we're importing from the Acorn standard library, and "Nat" is the natural numbers.

```acorn
theorem hello_world(a: Nat, b: Nat)
```

This is the signature for a theorem. The theorem is named `hello_world`. You don't have to give theorems names, because the AI can usually figure out what theorem you need without names. But it can help you organize your code.

The `(a: Nat, b: Nat)` part indicates that this theorem is about two natural numbers, which we're calling `a` and `b`, each with the `Nat` type, for the duration of the proof.

```acorn
a < b implies a != b
```

This is the statement of the theorem. If `a` is less than `b`, that implies that `a` is not equal to `b`.

## Is that it?

This is how easy proofs should work. The sort of mathematical statement that a human would call trivial, Acorn should instantly understand it, and be able to provide a rigorous proof for it.

If you're familiar with other theorem provers, you know that there is often a simple mathematical statement that seems completely obvious to you, but it takes a lot of annoying work to write down a rigorous proof. The vision of Acorn is that the AI should do this annoying work for you. We don't always achieve this vision, but as technology improves, and as the Acorn dataset gets larger, the AI will get better and better.

And one day... who knows. Maybe your wildest dreams will all come true.

For a harder proof, neither humans nor Acorn will be able to solve it in a single step. We need to structure the proof, to break it down into easy steps. Let's [take a look at multi-step proofs](/docs/tutorial/multi-step-proofs/).
