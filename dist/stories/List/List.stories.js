"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.Primary = void 0;
var react_1 = __importDefault(require("react"));
var List_1 = __importDefault(require("../../components/List"));
var Input_1 = __importDefault(require("../../components/Input"));
var Button_1 = __importDefault(require("../../components/Button"));
exports["default"] = {
    title: "List",
    component: List_1["default"],
    argTypes: {
        backgroundColor: { control: "color" }
    }
};
var Template = function (args) { return (react_1["default"].createElement(react_1["default"].Fragment, null,
    react_1["default"].createElement(List_1["default"], null,
        react_1["default"].createElement("h1", null, "Title"),
        react_1["default"].createElement("p", null, "Content"),
        react_1["default"].createElement(Input_1["default"], null),
        react_1["default"].createElement(Button_1["default"], null, "Button")))); };
exports.Primary = Template.bind({});
exports.Primary.args = {
    children: "List"
};
