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
exports.ButtonStyle = styled_1["default"].button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  height: ", "px;\n  font-size: ", ";\n  font-weight: 700;\n  color: ", ";\n  background-color: ", ";\n  ", "\n  border-radius: 5px;\n  cursor: pointer;\n\n  ", "\n\n  &:disabled {\n    opacity: 0.9;\n    cursor: default;\n  }\n"], ["\n  width: 100%;\n  height: ", "px;\n  font-size: ", ";\n  font-weight: 700;\n  color: ", ";\n  background-color: ", ";\n  ", "\n  border-radius: 5px;\n  cursor: pointer;\n\n  ", "\n\n  &:disabled {\n    opacity: 0.9;\n    cursor: default;\n  }\n"])), function (_a) {
    var sizing = _a.sizing;
    return style_1.SIZE.height[sizing];
}, style_1.FONTSIZE.M, function (_a) {
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
    var transition = _a.transition, color = _a.color, filled = _a.filled;
    return transition &&
        "\n    transition: 0.5s;\n    &:hover:not(:disabled) {\n      color: ".concat(color === types_1.ColorTheme.White ? "inherit" : style_1.COLOR.white["default"], ";\n      background-color: ").concat(style_1.COLOR[color]["default"], ";\n    };\n\n    &:active:not(:disabled) {\n      background-color: ").concat(style_1.COLOR[color].active, ";\n      ").concat(!filled && "border: 2px solid ".concat(style_1.COLOR[color].active, ";"), "\n    };\n  ");
});
var templateObject_1;
