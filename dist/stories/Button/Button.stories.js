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
var Button_1 = __importDefault(require("../../components/Button"));
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
exports["default"] = {
    title: "Button",
    component: Button_1["default"],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: "color" }
    }
};
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
var Template = function (args) { return (react_1["default"].createElement(react_1["default"].Fragment, null,
    react_1["default"].createElement(Button_1["default"], __assign({}, args)))); };
exports.Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
exports.Primary.args = {
    children: "Button"
};
