Prism.languages.acorn = {
  keyword:
    /\b(and|axiom|by|class|constraint|define|else|exists|false|forall|from|function|if|import|inductive|let|not|numerals|or|satisfy|self|structure|theorem|true|type)\b/,

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
