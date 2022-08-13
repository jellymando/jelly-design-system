"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
exports.__esModule = true;
var react_1 = __importStar(require("react"));
var types_1 = require("../../types");
var styled_1 = require("./styled");
var Input = (0, react_1.forwardRef)(function (_a, ref) {
    var id = _a.id, className = _a.className, _b = _a.type, type = _b === void 0 ? "text" : _b, value = _a.value, label = _a.label, _c = _a.color, color = _c === void 0 ? types_1.ColorTheme.Gray : _c, _d = _a.size, size = _d === void 0 ? types_1.Size.Medium : _d, _e = _a.inline, inline = _e === void 0 ? false : _e, _f = _a.onChange, onChange = _f === void 0 ? function () { } : _f;
    return (react_1["default"].createElement(styled_1.InputWrap, { inline: inline },
        label && react_1["default"].createElement(styled_1.Label, null, label),
        react_1["default"].createElement(styled_1.InputStyle, { id: id, className: className, type: type, value: value, color: color, sizing: size, ref: ref, onChange: onChange })));
});
exports["default"] = Input;
