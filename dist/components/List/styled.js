"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.Li = exports.Ul = exports.FormStyle = void 0;
var styled_1 = __importDefault(require("@emotion/styled"));
var style_1 = require("../../constants/style");
exports.FormStyle = styled_1["default"].form(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n"], ["\n  width: 100%;\n"])));
exports.Ul = styled_1["default"].ul(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin-bottom: 30px;\n"], ["\n  margin-bottom: 30px;\n"])));
exports.Li = styled_1["default"].li(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  font-size: ", ";\n  &:not(:last-of-type) {\n    margin-bottom: 15px;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  font-size: ", ";\n  &:not(:last-of-type) {\n    margin-bottom: 15px;\n  }\n"])), style_1.FONTSIZE.M);
var templateObject_1, templateObject_2, templateObject_3;
