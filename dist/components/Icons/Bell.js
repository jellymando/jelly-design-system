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
var React = __importStar(require("react"));
var Bell = function (_a) {
    var _b = _a.width, width = _b === void 0 ? 32 : _b, _c = _a.height, height = _c === void 0 ? 32 : _c, _d = _a.color, color = _d === void 0 ? "#000" : _d;
    return (React.createElement("svg", { width: 32, height: 32 },
        React.createElement("title", null),
        React.createElement("g", null,
            React.createElement("path", { d: "M16 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3Zm0-4a1 1 0 1 0 1 1 1 1 0 0 0-1-1ZM16 30a5 5 0 0 1-4.84-3.75 1 1 0 0 1 1-1.25h7.74a1 1 0 0 1 1 1.25A5 5 0 0 1 16 30Zm-2.24-3a3 3 0 0 0 4.48 0Z" }),
            React.createElement("path", { d: "M28 27H4a1 1 0 0 1-1-1v-1.8a3 3 0 0 1 2.77-3V14a8 8 0 0 1 8-8h4.46a8 8 0 0 1 8 8v7.21a3 3 0 0 1 2.77 3V26a1 1 0 0 1-1 1ZM5 25h22v-.8a1 1 0 0 0-1-1h-.77a1 1 0 0 1-1-1V14a6 6 0 0 0-6-6h-4.46a6 6 0 0 0-6 6v8.2a1 1 0 0 1-1 1H6a1 1 0 0 0-1 1Z" }))));
};
exports["default"] = Bell;
