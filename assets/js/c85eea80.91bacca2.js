"use strict";(self.webpackChunkacornprover_org=self.webpackChunkacornprover_org||[]).push([[1378],{9758:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"language/variables","title":"Variables","description":"The let statement lets you give a name to an expression.","source":"@site/docs/language/variables.md","sourceDirName":"language","slug":"/language/variables","permalink":"/docs/language/variables","draft":false,"unlisted":false,"editUrl":"https://github.com/acornprover/acornprover.org/edit/master/docs/language/variables.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"sidebar","previous":{"title":"Quantifiers","permalink":"/docs/language/quantifiers"},"next":{"title":"If-else","permalink":"/docs/language/if-else"}}');var t=a(4848),r=a(8453);const i={sidebar_position:3},l="Variables",o={},c=[{value:"Examples",id:"examples",level:2},{value:"Let-satisfy",id:"let-satisfy",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"variables",children:"Variables"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"let"})," statement lets you give a name to an expression."]}),"\n",(0,t.jsx)(n.p,{children:"Its general form is:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-acorn",children:"let name: Type = expression\n"})}),"\n",(0,t.jsx)(n.p,{children:"Variable names start with a lowercase letter. The rest of the name must be alphanumeric, or an underscore."}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.p,{children:"Simple assignment:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-acorn",children:"let two: Nat = 2\n\nlet three: Nat = 2.suc\n\nlet two_less_than_three: Bool = two < three\n"})}),"\n",(0,t.jsx)(n.p,{children:"Nothing needs to be proven to make these statements. You're just giving a new name to a valid expression."}),"\n",(0,t.jsx)(n.h2,{id:"let-satisfy",children:"Let-satisfy"}),"\n",(0,t.jsxs)(n.p,{children:["You can create a variable with a condition, rather than a direct definition, using the ",(0,t.jsx)(n.code,{children:"let"})," and ",(0,t.jsx)(n.code,{children:"satisfy"})," keywords."]}),"\n",(0,t.jsxs)(n.p,{children:["For example, this defines ",(0,t.jsx)(n.code,{children:"n"})," to be any even number."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-acorn",children:"let n: Nat satisfy {\n    exists(d: Nat) {\n        2 * d = n\n    }\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You could also define both ",(0,t.jsx)(n.code,{children:"d"})," and ",(0,t.jsx)(n.code,{children:"n"})," this way."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-acorn",children:"let (d: Nat, n: Nat) satisfy {\n    2 * d = n\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"You can also make a logically equivalent statement while not defining any new variables at all:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-acorn",children:"exists(d: Nat, n: Nat) {\n    2 * d = n\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["All three of these statements require the same proof, to be verified. They differ in which variables are\ndefined in the outside environment. The variables named in the ",(0,t.jsx)(n.code,{children:"let"})," part of the expression are visible outside. Variables created through the arguments to an ",(0,t.jsx)(n.code,{children:"exists"}),", ",(0,t.jsx)(n.code,{children:"forall"}),", or ",(0,t.jsx)(n.code,{children:"function"})," block are only visible inside that block."]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>i,x:()=>l});var s=a(6540);const t={},r=s.createContext(t);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);