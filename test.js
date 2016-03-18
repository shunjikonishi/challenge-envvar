"use strict";

var assert = require("chai").assert;
var hello = require("./hello.js");

describe("envvar", function() {
  it("NAME should be codecheck", () => {
    assert.equal("codecheck", process.env.NAME);
  });

  it("hello('Taro') should be 'Hello Taro'", () => {
    assert.equal("Hello Taro", hello("Taro"));
  });

  it("hello(process.env.NAME) should be 'Hello codecheck'", () => {
    assert.equal("Hello codecheck", hello(process.env.NAME));
  });
});