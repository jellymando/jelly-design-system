"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var styled_1 = require("./styled");
var List = function (_a) {
    var children = _a.children;
    return (react_1["default"].createElement(styled_1.Ul, null, children.map(function (el, i) { return (react_1["default"].createElement(styled_1.Li, { key: i }, el)); })));
};
exports["default"] = List;
