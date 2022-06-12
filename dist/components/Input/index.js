"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var types_1 = require("../../types");
var styled_1 = require("./styled");
var Input = function (_a) {
    var _b = _a.type, type = _b === void 0 ? "text" : _b, label = _a.label, _c = _a.color, color = _c === void 0 ? types_1.ColorTheme.Gray : _c, _d = _a.size, size = _d === void 0 ? types_1.Size.Medium : _d;
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        label && react_1["default"].createElement(styled_1.Label, null, label),
        react_1["default"].createElement(styled_1.InputStyle, { type: type, color: color, sizing: size })));
};
exports["default"] = Input;
