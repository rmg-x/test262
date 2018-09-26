// This file was procedurally generated from the following sources:
// - src/class-elements/grammar-special-meth-contains-super-get.case
// - src/class-elements/syntax/invalid/cls-expr-elements-invalid-syntax.template
/*---
description: Accessor get Methods cannot contain direct super (class expression)
esid: prod-ClassElement
features: [class]
flags: [generated]
negative:
  phase: parse
  type: SyntaxError
info: |
    Class Definitions / Static Semantics: Early Errors

    ClassElement : MethodDefinition
        It is a Syntax Error if PropName of MethodDefinition is not "constructor" and HasDirectSuper of MethodDefinition is true.

---*/


failIfCodeGetsEvaluated();

var C = class extends Function{
  get method() {
      super();
  }
};
