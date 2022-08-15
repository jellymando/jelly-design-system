"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var types_1 = require("../../types");
var styled_1 = require("./styled");
var Button = react_1["default"].forwardRef(function (_a, ref) {
    var id = _a.id, className = _a.className, _b = _a.type, type = _b === void 0 ? "button" : _b, _c = _a.color, color = _c === void 0 ? types_1.ColorTheme.Primary : _c, _d = _a.size, size = _d === void 0 ? types_1.Size.Medium : _d, _e = _a.filled, filled = _e === void 0 ? false : _e, _f = _a.transition, transition = _f === void 0 ? false : _f, _g = _a.onClick, onClick = _g === void 0 ? function () { } : _g, children = _a.children;
    return (react_1["default"].createElement(styled_1.ButtonStyle, { id: id, className: className, type: type, color: color, sizing: size, filled: filled, transition: transition, ref: ref, onClick: onClick }, children));
});
exports["default"] = Button;
