"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.ButtonStyle = void 0;
var styled_1 = __importDefault(require("@emotion/styled"));
var types_1 = require("../../types");
var style_1 = require("../../constants/style");
exports.ButtonStyle = styled_1["default"].button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  height: 50px;\n  font-size: ", ";\n  font-weight: 700;\n  color: ", ";\n  background-color: ", ";\n  ", "\n  border-radius: 5px;\n  transition: 0.5s;\n  cursor: pointer;\n\n  &:hover:not(:disabled) {\n    color: ", ";\n    background-color: ", ";\n  }\n\n  &:active:not(:disabled) {\n    background-color: ", ";\n    ", "\n  }\n\n  &:disabled {\n    opacity: 0.9;\n    cursor: default;\n  }\n"], ["\n  width: 100%;\n  height: 50px;\n  font-size: ", ";\n  font-weight: 700;\n  color: ", ";\n  background-color: ", ";\n  ", "\n  border-radius: 5px;\n  transition: 0.5s;\n  cursor: pointer;\n\n  &:hover:not(:disabled) {\n    color: ", ";\n    background-color: ", ";\n  }\n\n  &:active:not(:disabled) {\n    background-color: ", ";\n    ", "\n  }\n\n  &:disabled {\n    opacity: 0.9;\n    cursor: default;\n  }\n"])), style_1.FONTSIZE.M, function (_a) {
    var color = _a.color, filled = _a.filled;
    return filled
        ? color === types_1.ColorTheme.White
            ? "inherit"
            : style_1.COLOR.white["default"]
        : style_1.COLOR[color]["default"];
}, function (_a) {
    var color = _a.color, filled = _a.filled;
    return filled
        ? style_1.COLOR[color]["default"]
        : color === types_1.ColorTheme.White
            ? "transparent"
            : style_1.COLOR.white["default"];
}, function (_a) {
    var color = _a.color, filled = _a.filled;
    return !filled && "border: 2px solid ".concat(style_1.COLOR[color]["default"], ";");
}, function (_a) {
    var color = _a.color;
    return color === types_1.ColorTheme.White ? "inherit" : style_1.COLOR.white["default"];
}, function (_a) {
    var color = _a.color;
    return style_1.COLOR[color]["default"];
}, function (_a) {
    var color = _a.color;
    return style_1.COLOR[color].active;
}, function (_a) {
    var color = _a.color, filled = _a.filled;
    return !filled && "border: 2px solid ".concat(style_1.COLOR[color].active, ";");
});
var templateObject_1;
