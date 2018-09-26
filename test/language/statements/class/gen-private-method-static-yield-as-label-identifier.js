// This file was procedurally generated from the following sources:
// - src/generators/yield-as-label-identifier.case
// - src/generators/syntax/class-decl-static-private-method.template
/*---
description: yield is a reserved keyword within generator function bodies and may not be used as a label identifier. (Static generator method as a ClassDeclaration element)
esid: prod-GeneratorMethod
features: [generators, class-static-methods-private]
flags: [generated]
negative:
  phase: parse
  type: SyntaxError
info: |
    ClassElement :
      static PrivateMethodDefinition

    MethodDefinition :
      GeneratorMethod

    14.4 Generator Function Definitions

    GeneratorMethod :
      * # PropertyName ( UniqueFormalParameters ) { GeneratorBody }


    LabelIdentifier : Identifier

    It is a Syntax Error if this production has a [Yield] parameter and
    StringValue of Identifier is "yield".

---*/
failIfCodeGetsEvaluated();

class C {static *#gen() {
    yield: ;
}}
