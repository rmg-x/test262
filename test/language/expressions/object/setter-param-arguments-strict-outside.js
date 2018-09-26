// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es5id: 11.1.5-2-s
description: >
    Strict Mode - SyntaxError is thrown when 'arguments' occurs as the
    Identifier in a PropertySetParameterList of a PropertyAssignment
    that is contained in strict code
negative:
  type: SyntaxError
  phase: parse
flags: [onlyStrict]
---*/

failIfCodeGetsEvaluated();

void {
  set x(arguments) {}
};
