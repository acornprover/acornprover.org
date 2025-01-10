"use strict";(self.webpackChunkacornprover_org=self.webpackChunkacornprover_org||[]).push([[7924],{6475:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>l});const o=JSON.parse('{"id":"getting-started","title":"Getting Started","description":"The primary way to use Acorn is through the Acorn Prover VS Code extension.","source":"@site/docs/getting-started.md","sourceDirName":".","slug":"/getting-started","permalink":"/docs/getting-started","draft":false,"unlisted":false,"editUrl":"https://github.com/acornprover/acornprover.org/edit/master/docs/getting-started.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"sidebar","next":{"title":"Tutorial","permalink":"/docs/category/tutorial"}}');var r=n(4848),s=n(8453);const i={sidebar_position:1},a="Getting Started",h={},l=[{value:"Installing the VS Code Extension",id:"installing-the-vs-code-extension",level:2},{value:"Proving A Theorem",id:"proving-a-theorem",level:2},{value:"What did I just type?",id:"what-did-i-just-type",level:2},{value:"Is that it?",id:"is-that-it",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"getting-started",children:"Getting Started"})}),"\n",(0,r.jsx)(t.p,{children:"The primary way to use Acorn is through the Acorn Prover VS Code extension.\nIt works on Windows, Linux, or modern Macs with an M-something chip."}),"\n",(0,r.jsx)(t.h2,{id:"installing-the-vs-code-extension",children:"Installing the VS Code Extension"}),"\n",(0,r.jsxs)(t.p,{children:["First, ",(0,r.jsx)(t.a,{href:"https://code.visualstudio.com/",children:"download VS Code"}),", if you don't have it already."]}),"\n",(0,r.jsxs)(t.p,{children:["Then, install the Acorn Prover extension. You can do this from the ",(0,r.jsx)(t.a,{href:"https://marketplace.visualstudio.com/items?itemName=acornprover.acornprover",children:"VS Code Marketplace"}),", or from the VS Code extensions side panel."]}),"\n",(0,r.jsx)(t.p,{children:"You're ready to go."}),"\n",(0,r.jsx)(t.h2,{id:"proving-a-theorem",children:"Proving A Theorem"}),"\n",(0,r.jsxs)(t.p,{children:["Open up VS Code and make a new Acorn file. An Acorn file has to end with a ",(0,r.jsx)(t.code,{children:".ac"})," extension, so save this new file as ",(0,r.jsx)(t.code,{children:"hello.ac"}),".\nYou can make a new folder for the project, or just stick this file anywhere."]}),"\n",(0,r.jsx)(t.p,{children:"Once you save this file, the Assistant window should appear. The assistant will show useful information\nwhile we're writing Acorn code.\nIf you accidentally close it, you can open it back up with Ctrl-Enter, or by clicking the little green acorn\nicon in the upper right."}),"\n",(0,r.jsx)(t.p,{children:"Now let's get proving. Enter this code:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-acorn",children:"from nat import Nat\n\ntheorem hello_world(a: Nat, b: Nat) {\n    a < b -> a != b\n}\n"})}),"\n",(0,r.jsx)(t.p,{children:'Informally, we are proving the theorem, "when one number is less than another, they are not equal".'}),"\n",(0,r.jsx)(t.p,{children:"When you're done, save the file."}),"\n",(0,r.jsx)(t.p,{children:"When you save, Acorn's AI checks your work, to ensure that everything you wrote can be proven. The AI runs locally, so you don't need internet access. You should see a little check mark appear to the left of your code. Click on the theorem, and the assistant should tell you, yep, this is trivial, and also give you a longer explanation for why exactly it's true."}),"\n",(0,r.jsx)(t.p,{children:"Success!"}),"\n",(0,r.jsx)(t.p,{children:'If this didn\'t work, check to be sure that the "Acorn Prover" extension is installed and activated.'}),"\n",(0,r.jsx)(t.h2,{id:"what-did-i-just-type",children:"What did I just type?"}),"\n",(0,r.jsx)(t.p,{children:"Let's go over each of the parts of the code."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-acorn",children:"from nat import Nat\n"})}),"\n",(0,r.jsx)(t.p,{children:'This is an import statement, using syntax like Python. "nat" is the name of the module we\'re importing from the Acorn standard library, and "Nat" is the natural numbers.'}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-acorn",children:"theorem hello_world(a: Nat, b: Nat)\n"})}),"\n",(0,r.jsxs)(t.p,{children:["This is the signature for a theorem. The theorem is named ",(0,r.jsx)(t.code,{children:"hello_world"}),". You don't have to give theorems names, because the AI can usually figure out what theorem you need without names. But it can help you organize your code."]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"(a: Nat, b: Nat)"})," part indicates that this theorem is about two natural numbers, which we're calling ",(0,r.jsx)(t.code,{children:"a"})," and ",(0,r.jsx)(t.code,{children:"b"}),", each with the ",(0,r.jsx)(t.code,{children:"Nat"})," type, for the duration of the proof."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-acorn",children:"a < b -> a != b\n"})}),"\n",(0,r.jsxs)(t.p,{children:["This is the statement of the theorem. If ",(0,r.jsx)(t.code,{children:"a"})," is less than ",(0,r.jsx)(t.code,{children:"b"}),", that implies that ",(0,r.jsx)(t.code,{children:"a"})," is not equal to ",(0,r.jsx)(t.code,{children:"b"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"is-that-it",children:"Is that it?"}),"\n",(0,r.jsx)(t.p,{children:"This is how easy proofs should work. The sort of mathematical statement that a human would call trivial, Acorn should instantly understand it, and be able to provide a rigorous proof for it."}),"\n",(0,r.jsx)(t.p,{children:"If you're familiar with other theorem provers, you know that there is often a simple mathematical statement that seems completely obvious to you, but it takes a lot of annoying work to write down a rigorous proof. The vision of Acorn is that the AI should do this annoying work for you. We don't always achieve this vision, but as technology improves, and as the Acorn dataset gets larger, the AI will get better and better."}),"\n",(0,r.jsx)(t.p,{children:"And one day... who knows. Maybe your wildest dreams will all come true."}),"\n",(0,r.jsxs)(t.p,{children:["For a harder proof, neither humans nor Acorn will be able to solve it in a single step. We need to structure the proof, to break it down into easy steps. Let's ",(0,r.jsx)(t.a,{href:"/docs/tutorial/multi-step-proofs/",children:"jump into the tutorial"}),"."]})]})}function c(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var o=n(6540);const r={},s=o.createContext(r);function i(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);