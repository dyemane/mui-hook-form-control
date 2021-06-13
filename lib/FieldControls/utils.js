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
import * as React from "react";
import { render } from "enzyme";
import { useForm } from "react-hook-form";
export var fieldDefaultProps = {
    name: "Field Name",
    defaultValue: "Field Value",
    label: "Field Label",
    error: undefined,
};
export var getWrapper = function (FieldComponent, props) {
    if (props === void 0) { props = {}; }
    var TestWrapper = function () {
        var control = useForm().control;
        return (React.createElement(FieldComponent, __assign({}, __assign(__assign({}, fieldDefaultProps), props), { control: control })));
    };
    return React.createElement(TestWrapper, null);
};
export var checkLabel = function (FieldComponent, props) {
    if (props === void 0) { props = {}; }
    it("shows label", function () {
        var fieldWrapper = render(getWrapper(FieldComponent, props));
        expect(fieldWrapper.find(".MuiInputLabel-root").text() ||
            fieldWrapper.find("label").text() ||
            fieldWrapper.find(".MuiFormControlLabel-label").text()).toEqual(fieldDefaultProps.label);
    });
};
export var checkName = function (FieldComponent, props) {
    if (props === void 0) { props = {}; }
    it("has name", function () {
        var fieldWrapper = render(getWrapper(FieldComponent, props));
        expect(fieldWrapper.find("input").attr("name")).toEqual(fieldDefaultProps.name);
    });
};
export var checkValue = function (FieldComponent, props) {
    if (props === void 0) { props = {}; }
    it("has value", function () {
        var fieldWrapper = render(getWrapper(FieldComponent, props));
        expect(fieldWrapper.find("input").attr("value")).toEqual(fieldDefaultProps.defaultValue);
    });
};
export var checkChecked = function (FieldComponent, props) {
    if (props === void 0) { props = { defaultValue: false }; }
    it("is checked is " + props.defaultValue, function () {
        var fieldWrapper = render(getWrapper(FieldComponent, props));
        expect(!!fieldWrapper.find("input").attr("checked")).toEqual(!!props.defaultValue);
    });
};
export var checkError = function (FieldComponent, props) {
    if (props === void 0) { props = {}; }
    it("shows error", function () {
        var fieldWrapper = render(getWrapper(FieldComponent, __assign({ error: "Field Error" }, props)));
        expect(fieldWrapper.find(".Mui-error").length).not.toBe(0);
    });
};
export var checkHelper = function (FieldComponent, props) {
    if (props === void 0) { props = {}; }
    it("shows helper", function () {
        var helperText = (props === null || props === void 0 ? void 0 : props.helperText) || "Helper Text";
        var fieldWrapper = render(getWrapper(FieldComponent, __assign({ helperText: helperText }, props)));
        expect(fieldWrapper.find(".MuiFormHelperText-root").text()).toBe(helperText);
    });
};
//# sourceMappingURL=utils.js.map