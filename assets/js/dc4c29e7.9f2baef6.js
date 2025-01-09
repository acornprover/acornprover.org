"use strict";(self.webpackChunkacornprover_org=self.webpackChunkacornprover_org||[]).push([[1404],{6458:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"library/real","title":"real.ac","description":"The real module provides real numbers.","source":"@site/docs/library/real.md","sourceDirName":"library","slug":"/library/real","permalink":"/docs/library/real","draft":false,"unlisted":false,"editUrl":"https://github.com/acornprover/acornprover.org/edit/master/docs/library/real.md","tags":[],"version":"current","frontMatter":{},"sidebar":"sidebar","previous":{"title":"rat.ac","permalink":"/docs/library/rat"}}');var o=r(4848),a=r(8453);const l={},i="real.ac",s={},d=[{value:"Defining Real Numbers",id:"defining-real-numbers",level:2},{value:"is_cut(f: Rat -&gt; Bool) -&gt; Bool",id:"is_cutf-rat---bool---bool",level:2},{value:"is_lower(f: Rat -&gt; Bool) -&gt; Bool",id:"is_lowerf-rat---bool---bool",level:2},{value:"has_greatest(f: Rat -&gt; Bool, x: Rat) -&gt; Bool",id:"has_greatestf-rat---bool-x-rat---bool",level:2},{value:"is_dedekind_cut(f: Rat -&gt; Bool) -&gt; Bool",id:"is_dedekind_cutf-rat---bool---bool",level:2},{value:"Real",id:"real",level:2},{value:"Real&#39;s operators",id:"reals-operators",level:2},{value:"Real.from_rat: Rat -&gt; Real",id:"realfrom_rat-rat---real",level:2},{value:"Real.is_negative: self -&gt; Bool",id:"realis_negative-self---bool",level:2},{value:"Real.is_positive: self -&gt; Bool",id:"realis_positive-self---bool",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"realac",children:"real.ac"})}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"real"})," module provides real numbers."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://github.com/acornprover/acornlib/blob/master/real.ac",children:"See the code on GitHub."})}),"\n",(0,o.jsx)(n.p,{children:"This module is very incomplete. The real numbers are defined, but that's about it. If you are interested in making a small contribution to the Acorn library, check out this module!"}),"\n",(0,o.jsx)(n.p,{children:"Good places to start:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Define addition"}),"\n",(0,o.jsx)(n.li,{children:"Prove the commutativity and associativity of addition"}),"\n",(0,o.jsx)(n.li,{children:"Define multiplication"}),"\n",(0,o.jsx)(n.li,{children:"Prove the commutativity and associativity of multiplication"}),"\n",(0,o.jsx)(n.li,{children:"Prove the distributive property"}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"defining-real-numbers",children:"Defining Real Numbers"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"Real"})," type is defined by Dedekind cuts."]}),"\n",(0,o.jsxs)(n.p,{children:["The Acorn equivalent of a ",(0,o.jsx)(n.code,{children:"Set<T>"})," type is functions of type ",(0,o.jsx)(n.code,{children:"T -> Bool"}),'. Some helper functions exist to help\ndefine the "Dedekind cut" concept.']}),"\n",(0,o.jsx)(n.h2,{id:"is_cutf-rat---bool---bool",children:"is_cut(f: Rat -> Bool) -> Bool"}),"\n",(0,o.jsxs)(n.p,{children:["Whether ",(0,o.jsx)(n.code,{children:"f"}),' is a "cut", cutting rational numbers into two groups. To be a cut, there must be some number in the set, and some number out of the set.']}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-acorn",children:"define is_cut(f: Rat -> Bool) -> Bool {\n    exists(x: Rat) {\n        f(x)\n    } and exists(x: Rat) {\n        not f(x)\n    }\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"is_lowerf-rat---bool---bool",children:"is_lower(f: Rat -> Bool) -> Bool"}),"\n",(0,o.jsx)(n.p,{children:'A "lower set", or "downward closed", contains every element less than or equal to any of its members.'}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-acorn",children:"define is_lower(f: Rat -> Bool) -> Bool {\n    forall(x: Rat, y: Rat) {\n        f(y) and x < y -> f(x)\n    }\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"has_greatestf-rat---bool-x-rat---bool",children:"has_greatest(f: Rat -> Bool, x: Rat) -> Bool"}),"\n",(0,o.jsxs)(n.p,{children:["Whether ",(0,o.jsx)(n.code,{children:"f"})," has an upper bound, an element in the set that is larger than any of other elements."]}),"\n",(0,o.jsx)(n.h2,{id:"is_dedekind_cutf-rat---bool---bool",children:"is_dedekind_cut(f: Rat -> Bool) -> Bool"}),"\n",(0,o.jsx)(n.p,{children:"The combination of the previous three conditions. A Dedekind cut must be a cut, it must be a lower set, and it must not have a greatest element."}),"\n",(0,o.jsx)(n.h2,{id:"real",children:"Real"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-acorn",children:"structure Real {\n    gt_rat: Rat -> Bool\n} constraint {\n    is_dedekind_cut(gt_rat)\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:"Real numbers are defined by their Dedekind cut, which can also be interpreted as a function that compares\nthe real number to a rational number."}),"\n",(0,o.jsx)(n.p,{children:"Thus:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-acorn",children:"my_real.gt_rat(my_rat)\n"})}),"\n",(0,o.jsxs)(n.p,{children:["compares a real and a rational, telling you whether ",(0,o.jsx)(n.code,{children:"my_real"})," is greater than ",(0,o.jsx)(n.code,{children:"my_rat"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"reals-operators",children:"Real's operators"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Real"})," supports addition, multiplication, subtraction, negation, and comparison operators."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-acorn",children:"let zero: Real = Real.from_rat(Rat.0)\nlet one: Real = Real.from_rat(Rat.1)\nlet two: Real = one + one\n\nzero < one\none > zero\nzero <= zero\none >= zero\n\ntwo * one = two\n-(-one) = one\nzero + two = two\n"})}),"\n",(0,o.jsx)(n.h2,{id:"realfrom_rat-rat---real",children:"Real.from_rat: Rat -> Real"}),"\n",(0,o.jsx)(n.p,{children:'Embeds the rational numbers in the reals, using the Dedekind cut that is simply "all numbers less than this rational number".'}),"\n",(0,o.jsx)(n.h2,{id:"realis_negative-self---bool",children:"Real.is_negative: self -> Bool"}),"\n",(0,o.jsx)(n.p,{children:"Whether a real number is negative. Zero is not negative."}),"\n",(0,o.jsx)(n.h2,{id:"realis_positive-self---bool",children:"Real.is_positive: self -> Bool"}),"\n",(0,o.jsx)(n.p,{children:"Whether a real number is positive. Zero is not positive."})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>i});var t=r(6540);const o={},a=t.createContext(o);function l(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);