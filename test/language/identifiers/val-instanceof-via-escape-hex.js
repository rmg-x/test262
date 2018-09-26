// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 11.6
description: >
    SyntaxError expected: reserved words used as Identifier
    Names in UTF8: instanceof
negative:
  phase: parse
  type: SyntaxError
---*/

failIfCodeGetsEvaluated();

var insta\u{6e}ceof = 123;
