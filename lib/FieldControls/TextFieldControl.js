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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from "react";
import { Controller } from "react-hook-form";
import { TextField } from "@material-ui/core";
export var TextFieldControl = function (_a) {
    var control = _a.control, error = _a.error, name = _a.name, defaultValue = _a.defaultValue, _b = _a.fullWidth, fullWidth = _b === void 0 ? true : _b, rest = __rest(_a, ["control", "error", "name", "defaultValue", "fullWidth"]);
    return (React.createElement(Controller, __assign({ name: name, as: TextField, control: control, fullWidth: fullWidth, error: !!error, helperText: error === null || error === void 0 ? void 0 : error.message, defaultValue: defaultValue || "" }, rest)));
};
//# sourceMappingURL=TextFieldControl.js.map