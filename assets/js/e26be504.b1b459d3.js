"use strict";(self.webpackChunkacornprover_org=self.webpackChunkacornprover_org||[]).push([[4040],{1505:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"language/functions","title":"Functions","description":"The define statement lets you define a named function.","source":"@site/docs/language/functions.md","sourceDirName":"language","slug":"/language/functions","permalink":"/docs/language/functions","draft":false,"unlisted":false,"editUrl":"https://github.com/acornprover/acornprover.org/edit/master/docs/language/functions.md","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_position":5},"sidebar":"sidebar","previous":{"title":"If-else","permalink":"/docs/language/if-else"},"next":{"title":"Imports","permalink":"/docs/language/imports"}}');var a=t(4848),r=t(8453);const i={sidebar_position:5},o="Functions",c={},d=[{value:"Anonymous Functions",id:"anonymous-functions",level:2},{value:"Predicates",id:"predicates",level:2},{value:"Let-satisfy",id:"let-satisfy",level:2},{value:"Currying",id:"currying",level:2},{value:"Theorems as Functions",id:"theorems-as-functions",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"functions",children:"Functions"})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"define"})," statement lets you define a named function."]}),"\n",(0,a.jsx)(n.p,{children:"Its general form is:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-acorn",children:"define function_name(arg1: Arg1Type, arg2: Arg2Type, arg3: Arg3Type) -> ReturnType {\n    expression\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The type of the resulting function is ",(0,a.jsx)(n.code,{children:"(Arg1Type, Arg2Type, Arg3Type) -> ReturnType"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"For example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-acorn",children:"define square(n: Nat) -> Nat {\n    n * n\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["This defines the function ",(0,a.jsx)(n.code,{children:"square"}),", with type ",(0,a.jsx)(n.code,{children:"Nat -> Nat"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"anonymous-functions",children:"Anonymous Functions"}),"\n",(0,a.jsxs)(n.p,{children:["You can use the keyword ",(0,a.jsx)(n.code,{children:"function"})," to define an anonymous function."]}),"\n",(0,a.jsxs)(n.p,{children:["For example, we could also have defined the ",(0,a.jsx)(n.code,{children:"square"})," function with:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-acorn",children:"let square: Nat -> Nat = function(n: Nat) {\n    n * n\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"predicates",children:"Predicates"}),"\n",(0,a.jsxs)(n.p,{children:["It's common to define logical predicates as functions that return ",(0,a.jsx)(n.code,{children:"Bool"}),". For example:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-acorn",children:'define is_even(n: Nat) -> Bool {\n    exists(d: Nat) {\n        2 * d = n\n    }\n}\n\n// This already exists as "<=" in the standard library\ndefine is_less_than_or_equal_to(a: Nat, b: Nat) -> Bool {\n    exists(d: Nat) {\n        a + d = b\n    }\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"let-satisfy",children:"Let-satisfy"}),"\n",(0,a.jsx)(n.p,{children:"Sometimes you want to define a function in terms of what condition it satisfies, rather than how to calculate it. The general form of this statement is:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-acorn",children:"let function_name(arg1: Arg1Type, arg2: Arg2Type, ...) -> ret: ReturnType {\n    expression\n} by {\n    proof\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"The expression can use the arguments and the return value, and the function is defined so that the expression is true."}),"\n",(0,a.jsx)(n.p,{children:'For example, let\'s say we want to define the "predecessor" function, which is the inverse of the built-in "successor" function, except we\'ll make the predecessor of zero equal to zero.'}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-acorn",children:"let predecessor(n: Nat) -> p: Nat satisfy {\n    if n = 0 {\n        p = 0\n    } else {\n        p.suc = n\n    }\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Here, the return value of the function, ",(0,a.jsx)(n.code,{children:"p"})," is named so that we can refer to it with the expression."]}),"\n",(0,a.jsxs)(n.p,{children:["It may be nontrivial that a return value exists that can satisfy the condition. If we need to prove it, we can do that in a ",(0,a.jsx)(n.code,{children:"by"})," block. An example from the standard library:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-acorn",children:'// This is a "bounded" version of subtraction that returns 0 instead of negative numbers.\nlet bounded_sub(a: Nat, b: Nat) -> d: Nat satisfy {\n    // The condition that `d` satisfies\n    if a < b {\n        d = 0\n    } else {\n        d + b = a\n    }\n} by {\n    // The proof that such a `d` exists\n    if a < b {\n        0 = 0\n    } else {\n        b <= a\n        let d: Nat satisfy { d + b = a }\n    }\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"currying",children:"Currying"}),"\n",(0,a.jsx)(n.p,{children:"Acorn supports currying implicitly."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-acorn",children:"define add_then_double(a: Nat, b: Nat) -> Nat {\n    2 * (a + b)\n}\n\nlet add_three_then_double: Nat -> Nat = add_then_double(3)\n"})}),"\n",(0,a.jsx)(n.p,{children:"So you can supply just some of the arguments, left to right, and get a function that takes the remaining arguments."}),"\n",(0,a.jsxs)(n.p,{children:["Thus, the types ",(0,a.jsx)(n.code,{children:"(Nat, Nat) -> Nat"})," and ",(0,a.jsx)(n.code,{children:"Nat -> (Nat -> Nat)"})," are considered to be the same, in the type system."]}),"\n",(0,a.jsx)(n.h2,{id:"theorems-as-functions",children:"Theorems as Functions"}),"\n",(0,a.jsxs)(n.p,{children:["Inside the block of a theorem, the theorem itself is available as a function that takes its arguments and returns a ",(0,a.jsx)(n.code,{children:"Bool"}),". This is useful for techniques like induction. For example, from the standard library:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-acorn",children:"theorem add_zero_left(a: Nat) {\n    0 + a = a\n} by {\n    0 + 0 = 0\n    add_zero_left(0)\n    forall(x: Nat) {\n        if add_zero_left(x) {\n            0 + x = x\n            0 + x.suc = x.suc\n            add_zero_left(x.suc)\n        }\n    }\n    add_zero_left(a)\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Named theorems can also be explicitly cited after they are proven. Usually, the AI should handle this for you. But if it doesn't, you can provide the theorem as a hint. For example, after proving ",(0,a.jsx)(n.code,{children:"add_zero_left"})," as above, you can cite it in a later proof:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-acorn",children:"theorem zero_plus_seven {\n    0 + 7 = 7\n} by {\n    add_zero_left(7)\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var s=t(6540);const a={},r=s.createContext(a);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);