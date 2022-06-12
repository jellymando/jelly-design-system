"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.Primary = void 0;
var react_1 = __importDefault(require("react"));
var Input_1 = __importDefault(require("../../components/Input"));
exports["default"] = {
    title: "Input",
    component: Input_1["default"],
    argTypes: {
        backgroundColor: { control: "color" }
    }
};
var Template = function (args) { return (react_1["default"].createElement(react_1["default"].Fragment, null,
    react_1["default"].createElement(Input_1["default"], __assign({}, args)))); };
exports.Primary = Template.bind({});
exports.Primary.args = {
    children: "Input"
};
