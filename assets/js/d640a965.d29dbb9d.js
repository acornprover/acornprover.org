"use strict";(self.webpackChunkacornprover_org=self.webpackChunkacornprover_org||[]).push([[6756],{9789:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"language/classes","title":"Classes","description":"Once you\'ve defined an inductive type or a structure type, you can augment it with additional class methods.","source":"@site/docs/language/classes.md","sourceDirName":"language","slug":"/language/classes","permalink":"/docs/language/classes","draft":false,"unlisted":false,"editUrl":"https://github.com/acornprover/acornprover.org/edit/master/docs/language/classes.md","tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"sidebar_position":9},"sidebar":"sidebar","previous":{"title":"Inductive Types","permalink":"/docs/language/inductive-types"},"next":{"title":"Experimental Stuff","permalink":"/docs/language/experimental-stuff"}}');var a=t(4848),o=t(8453);const r={sidebar_position:9},i="Classes",c={},l=[{value:"The class Statement",id:"the-class-statement",level:2},{value:"Operators",id:"operators",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"classes",children:"Classes"})}),"\n",(0,a.jsx)(n.p,{children:"Once you've defined an inductive type or a structure type, you can augment it with additional class methods."}),"\n",(0,a.jsxs)(n.p,{children:["For example, let's start with this ",(0,a.jsx)(n.code,{children:"LatticePoint"})," structure type."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-acorn",children:"from int import Int\nnumerals Int\n\nstructure LatticePoint {\n    x: Int\n    y: Int\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"the-class-statement",children:"The class Statement"}),"\n",(0,a.jsxs)(n.p,{children:["To add extra methods to the ",(0,a.jsx)(n.code,{children:"LatticePoint"})," type, you can define both methods and variables inside a block with the ",(0,a.jsx)(n.code,{children:"class"})," keyword."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-acorn",children:"class LatticePoint {\n    // Now accessible as LatticePoint.origin\n    let origin = LatticePoint.new(0, 0)\n\n    // Now accessible as LatticePoint.swap\n    define swap(self) -> LatticePoint {\n        LatticePoint.new(self.y, self.x)\n    }\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The first argument to a function must be named ",(0,a.jsx)(n.code,{children:"self"}),", and has the type of the class itself."]}),"\n",(0,a.jsxs)(n.p,{children:["Constants and functions defined inside a ",(0,a.jsx)(n.code,{children:"class"})," block are now methods accessible as ",(0,a.jsx)(n.code,{children:"TypeName.method_name"}),". For example:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-acorn",children:"theorem swap_is_involutive(p: LatticePoint) {\n    p.swap.swap = p\n} by {\n    p.swap.x = p.y\n    p.swap.y = p.x\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The names for constants and functions inside a class block are the same as outside, except that constants in a\nclass can also have numeric names. Thus ",(0,a.jsx)(n.code,{children:"Nat.0"})," is the name for zero, the natural number, and ",(0,a.jsx)(n.code,{children:"Int.0"})," is the name for zero, the integer."]}),"\n",(0,a.jsxs)(n.p,{children:["Writing the ",(0,a.jsx)(n.code,{children:"numerals Int"})," statement lets us avoid typing ",(0,a.jsx)(n.code,{children:"Int."})," before every numeral."]}),"\n",(0,a.jsxs)(n.p,{children:["It's okay to have multiple ",(0,a.jsx)(n.code,{children:"class"})," blocks for a single class. You often want to define some methods, prove some things about them, then define more methods."]}),"\n",(0,a.jsx)(n.h2,{id:"operators",children:"Operators"}),"\n",(0,a.jsxs)(n.p,{children:["Every operator has a alphabetical reserved name. If you define a method of this name, the operator will work as well. For example, the ",(0,a.jsx)(n.code,{children:"+"})," operator corresponds to the name ",(0,a.jsx)(n.code,{children:"add"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-acorn",children:"class LatticePoint {\n    define add(self, other: LatticePoint) {\n        LatticePoint.new(self.x + other.x, self.y + other.y)\n    }\n}\n\ntheorem add_origin(p: LatticePoint) {\n    p + LatticePoint.origin = p\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"The names of the supported operators are:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-acorn",children:"// Greater than\na.gt(b) = a > b\n\n// Less than\na.lt(b) = a < b\n\n// Greater than or equal to\na.gte(b) = a >= b\n\n// Less than or equal to\na.lte(b) = a <= b\n\n// Addition\na.add(b) = a + b\n\n// Subtraction\na.sub(b) = a - b\n\n// Multiplication\na.mul(b) = a * b\n\n// Division\na.div(b) = a / b\n\n// Mod\na.mod(b) = a % b\n\n// Negative. The unary '-' is different from the binary '-'.\na.neg = -a\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>i});var s=t(6540);const a={},o=s.createContext(a);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);