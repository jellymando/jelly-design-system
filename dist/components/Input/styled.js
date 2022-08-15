"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.InputStyle = exports.Label = exports.InputWrap = void 0;
var styled_1 = __importDefault(require("@emotion/styled"));
var style_1 = require("../../constants/style");
exports.InputWrap = styled_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  ", ";\n"], ["\n  display: flex;\n  ", ";\n"])), function (_a) {
    var inline = _a.inline;
    return inline
        ? "\n        flex-direction: row;\n        align-items: center;\n      "
        : "\n        flex-direction: column;\n        label {\n          margin-bottom: 5px;\n        }\n      ";
});
exports.Label = styled_1["default"].label(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 140px;\n  font-size: ", ";\n"], ["\n  width: 140px;\n  font-size: ", ";\n"])), style_1.FONTSIZE.M);
exports.InputStyle = styled_1["default"].input(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: 100%;\n  height: ", "px;\n  font-size: ", ";\n  border: 1px solid ", ";\n  border-radius: 5px;\n  margin: 0 auto;\n  padding: 0 15px;\n\n  &:focus {\n    outline: 1px solid ", ";\n  }\n"], ["\n  width: 100%;\n  height: ", "px;\n  font-size: ", ";\n  border: 1px solid ", ";\n  border-radius: 5px;\n  margin: 0 auto;\n  padding: 0 15px;\n\n  &:focus {\n    outline: 1px solid ", ";\n  }\n"])), function (_a) {
    var sizing = _a.sizing;
    return style_1.SIZE.height[sizing];
}, style_1.FONTSIZE.M, function (_a) {
    var color = _a.color;
    return style_1.COLOR[color]["default"];
}, function (_a) {
    var color = _a.color;
    return style_1.COLOR[color].active;
});
var templateObject_1, templateObject_2, templateObject_3;
