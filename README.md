# Macaulay2 Language for CodeMirror

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
    extensions: [basicSetup, macaulay2()]
  }),
  parent: document.getElementById("editor"),
});
```
