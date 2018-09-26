// This file was procedurally generated from the following sources:
// - src/class-elements/grammar-static-private-meth-constructor.case
// - src/class-elements/syntax/invalid/cls-expr-elements-invalid-syntax.template
/*---
description: Static Private Methods cannot be named constructor (class expression)
esid: prod-ClassElement
features: [class-static-methods-private, class]
flags: [generated]
negative:
  phase: parse
  type: SyntaxError
info: |
    Class Definitions / Static Semantics: Early Errors

    ClassElementName : PrivateName ;
        It is a Syntax Error if StringValue of PrivateName is "#constructor"

---*/


failIfCodeGetsEvaluated();

var C = class {
  static #constructor() {}
};
