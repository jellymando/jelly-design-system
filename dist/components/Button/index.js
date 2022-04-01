"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var styled_1 = require("./styled");
var Button = function (_a) {
    var type = _a.type, _b = _a.color, color = _b === void 0 ? "primary" : _b, _c = _a.filled, filled = _c === void 0 ? false : _c, children = _a.children;
    return (react_1["default"].createElement(styled_1.ButtonStyle, { type: type || "button", color: color, filled: filled }, children));
};
exports["default"] = Button;
