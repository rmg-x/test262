// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    Refer 13.1;
    It is a SyntaxError if the Identifier "eval" or the Identifier "arguments" occurs within a FormalParameterList
    of a strict mode FunctionDeclaration or FunctionExpression.
es5id: 13.1-20-s
description: >
    StrictMode - SyntaxError is thrown if the identifier 'arguments'
    appears within a FormalParameterList of a strict mode
    FunctionDeclaration when FuctionBody is strict code
negative:
  phase: parse
  type: SyntaxError
flags: [noStrict]
---*/

failIfCodeGetsEvaluated();

function _13_1_20_fun(arguments) { 'use strict'; }
