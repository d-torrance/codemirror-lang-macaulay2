# Macaulay2 Language for CodeMirror

[![npm version](https://badge.fury.io/js/codemirror-lang-macaulay2.svg)](https://badge.fury.io/js/codemirror-lang-macaulay2)
[![tests](https://github.com/d-torrance/codemirror-lang-macaulay2/actions/workflows/test.yml/badge.svg)](https://github.com/d-torrance/codemirror-lang-macaulay2/actions/workflows/test.yml)

This package provides [Macaulay2](https://macaulay2.com) language support for
[CodeMirror](https://codemirror.net/).

## Installation

```bash
npm install codemirror-lang-macaulay2
```

## Usage

```js
import { EditorState } from "@codemirror/state";
import { EditorView, basicSetup } from "codemirror";
import { macaulay2 } from "codemirror-lang-macaulay2";

new EditorView({
  state: EditorState.create({
    doc: "R = QQ[x,y,z,w]\nI = monomialCurveIdeal(R, {1,2,3})",
    extensions: [basicSetup, macaulay2()],
  }),
  parent: document.getElementById("editor"),
});
```
