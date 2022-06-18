"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var types_1 = require("../../types");
var styled_1 = require("./styled");
var Button = function (_a) {
    var _b = _a.type, type = _b === void 0 ? "button" : _b, _c = _a.color, color = _c === void 0 ? types_1.ColorTheme.Primary : _c, _d = _a.filled, filled = _d === void 0 ? false : _d, _e = _a.transition, transition = _e === void 0 ? false : _e, children = _a.children;
    return (react_1["default"].createElement(styled_1.ButtonStyle, { type: type, color: color, filled: filled, transition: transition }, children));
};
exports["default"] = Button;
