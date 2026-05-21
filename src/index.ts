import { StreamLanguage } from "@codemirror/language";
import { simpleMode } from "@codemirror/legacy-modes/mode/simple-mode";
import { Macaulay2Mode } from "./grammar.js";

export const macaulay2 = () => StreamLanguage.define(simpleMode(Macaulay2Mode));
