import { Macaulay2Mode } from "../grammar.js";

declare const CodeMirror: {
  defineSimpleMode(name: string, states: object): void;
};

CodeMirror.defineSimpleMode("macaulay2", Macaulay2Mode);

export { Macaulay2Mode as macaulay2Mode };
