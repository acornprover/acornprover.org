Prism.languages.acorn = {
  keyword:
    /\b(and|attributes|axiom|by|class|constraint|define|else|exists|extends|false|forall|from|function|if|iff|implies|import|inductive|let|lib|not|numerals|or|satisfy|self|structure|theorem|true|type|typeclass)\b/,

  comment: {
    pattern: /\/\/.*/,
    greedy: true,
  },

  operator: /!=|->|<=|>=|-|\*|\+|\.|<|=|>/,
  punctuation: /[():{},]/,
  number: /\b[0-9]+\b/,
  variable: /\b[a-z][a-zA-Z0-9_]*\b/,
  "class-name": /\b[A-Z][a-zA-Z0-9_]*\b/,
};
