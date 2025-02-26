import { EditorState } from "@codemirror/state";
import { EditorView, basicSetup } from "codemirror";
import { macaulay2 } from "../dist/index.js";

new EditorView({
  state: EditorState.create({
    doc: "R = QQ[x,y,z,w]\nI = monomialCurveIdeal(R, {1,2,3})",
    extensions: [basicSetup, macaulay2()]
  }),
  parent: document.getElementById("editor"),
});
