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
import { Link, Switch, TextField, Radio, FormControlLabel, RadioGroup, Checkbox, FormHelperText, InputLabel, Select, MenuItem, Button, } from "@material-ui/core";
import { identity, pick, pickBy, truncate } from "lodash";
export var getDirtyFieldData = function (rest, dirtyFields) { return (__assign({}, pick(rest, Object.keys(pickBy(dirtyFields, identity))))); };
export var TextFieldControl = function (_a) {
    var control = _a.control, error = _a.error, name = _a.name, defaultValue = _a.defaultValue, _b = _a.fullWidth, fullWidth = _b === void 0 ? true : _b, rest = __rest(_a, ["control", "error", "name", "defaultValue", "fullWidth"]);
    return (React.createElement(Controller, __assign({ name: name, as: TextField, control: control, fullWidth: fullWidth, error: !!error, helperText: error === null || error === void 0 ? void 0 : error.message, defaultValue: defaultValue || "" }, rest)));
};
export var CheckboxControl = function (_a) {
    var onChange = _a.onChange, color = _a.color, disabled = _a.disabled, className = _a.className, label = _a.label, control = _a.control, error = _a.error, name = _a.name, defaultValue = _a.defaultValue, rest = __rest(_a, ["onChange", "color", "disabled", "className", "label", "control", "error", "name", "defaultValue"]);
    return (React.createElement(Controller, __assign({ name: name, control: control, error: !!error, helperText: error === null || error === void 0 ? void 0 : error.message, defaultValue: defaultValue || false }, rest, { render: function (props) {
            return (React.createElement(FormControlLabel, { checked: !!props.value, className: className, disabled: disabled, control: React.createElement(Checkbox, { color: color, onChange: function (e, v) {
                        props.onChange(v);
                        onChange && onChange(v);
                    } }), label: label }));
        } })));
};
export var SwitchControl = function (_a) {
    var onChange = _a.onChange, helperText = _a.helperText, disabled = _a.disabled, className = _a.className, label = _a.label, control = _a.control, error = _a.error, name = _a.name, defaultValue = _a.defaultValue, rest = __rest(_a, ["onChange", "helperText", "disabled", "className", "label", "control", "error", "name", "defaultValue"]);
    return (React.createElement(Controller, __assign({ name: name, control: control, error: !!error, defaultValue: defaultValue || false }, rest, { render: function (props) {
            var toggle = function (e) {
                e.stopPropagation();
                e.preventDefault();
                var newVal = !props.value;
                props.onChange(newVal);
                onChange && onChange(newVal);
            };
            return (React.createElement("div", { className: className },
                React.createElement(FormControlLabel, { disabled: disabled, control: React.createElement(React.Fragment, null,
                        React.createElement(Switch, { checked: !!props.value, className: 'reg-left', onChange: toggle })), label: React.createElement("div", { className: 'reg-left' },
                        React.createElement(InputLabel, { onClick: toggle }, label),
                        helperText && (React.createElement(FormHelperText, { className: 'huge-left', onClick: toggle }, helperText)),
                        error && (React.createElement(FormHelperText, { error: true }, error === null || error === void 0 ? void 0 : error.message))) })));
        } })));
};
export var RadioGroupControl = function (_a) {
    var helperText = _a.helperText, required = _a.required, color = _a.color, onChange = _a.onChange, options = _a.options, control = _a.control, error = _a.error, name = _a.name, defaultValue = _a.defaultValue, rest = __rest(_a, ["helperText", "required", "color", "onChange", "options", "control", "error", "name", "defaultValue"]);
    return (React.createElement(Controller, __assign({ name: name, control: control, error: !!error, defaultValue: defaultValue || "" }, rest, { render: function (props) {
            return (React.createElement(RadioGroup, null,
                options.map(function (opt, i) { return (React.createElement(FormControlLabel, { key: i, label: opt.label, className: opt.className, control: React.createElement(Radio, { required: required, color: color, checked: props.value === opt.value, onClick: function () {
                            props.onChange(opt.value);
                            onChange && onChange(opt.value);
                        } }) })); }),
                helperText && React.createElement(FormHelperText, null, helperText),
                error && React.createElement(FormHelperText, { error: true }, error === null || error === void 0 ? void 0 : error.message)));
        } })));
};
export var FileButtonControl = function (_a) {
    var onChange = _a.onChange, required = _a.required, className = _a.className, helperText = _a.helperText, control = _a.control, error = _a.error, name = _a.name, defaultValue = _a.defaultValue, rest = __rest(_a, ["onChange", "required", "className", "helperText", "control", "error", "name", "defaultValue"]);
    return (React.createElement(Controller, __assign({ name: name, control: control, error: !!error, helperText: error === null || error === void 0 ? void 0 : error.message, defaultValue: (defaultValue === null || defaultValue === void 0 ? void 0 : defaultValue.url) || defaultValue || "" }, rest, { render: function (props) {
            var _a, _b, _c;
            var fileUrl = defaultValue === null || defaultValue === void 0 ? void 0 : defaultValue.url;
            return (React.createElement("div", { className: className },
                !((_a = props.value) === null || _a === void 0 ? void 0 : _a.name) && fileUrl && (React.createElement(FormHelperText, null,
                    React.createElement(Link, { target: 'blank', onClick: function () {
                            window.open(fileUrl);
                        } }, truncate(fileUrl.split("/").pop(), { length: 100 })))),
                ((_b = props.value) === null || _b === void 0 ? void 0 : _b.name) && (React.createElement(FormHelperText, null, (_c = props.value) === null || _c === void 0 ? void 0 : _c.name)),
                React.createElement(Button, { variant: 'contained', component: 'label' },
                    "Upload File ",
                    required && React.createElement("sup", { style: { color: "red" } }, "*"),
                    React.createElement("input", { type: 'file', hidden: true, onChange: function (e) {
                            var _a, _b;
                            if ((_b = (_a = e === null || e === void 0 ? void 0 : e.currentTarget) === null || _a === void 0 ? void 0 : _a.files) === null || _b === void 0 ? void 0 : _b.length) {
                                props.onChange(e.currentTarget.files[0]);
                                onChange && onChange(e.currentTarget.files[0]);
                            }
                        } })),
                helperText && React.createElement(FormHelperText, null, helperText),
                error && React.createElement(FormHelperText, { error: true }, error === null || error === void 0 ? void 0 : error.message)));
        } })));
};
export var FileControl = FileButtonControl;
export var SelectControl = function (_a) {
    var required = _a.required, label = _a.label, onChange = _a.onChange, className = _a.className, options = _a.options, control = _a.control, error = _a.error, name = _a.name, defaultValue = _a.defaultValue, rest = __rest(_a, ["required", "label", "onChange", "className", "options", "control", "error", "name", "defaultValue"]);
    return (React.createElement(Controller, __assign({ name: name, control: control, error: !!error, helperText: error === null || error === void 0 ? void 0 : error.message, defaultValue: defaultValue || "" }, rest, { render: function (props) {
            return (React.createElement(React.Fragment, null,
                React.createElement("div", { className: className },
                    React.createElement(InputLabel, { required: required, shrink: true }, label),
                    React.createElement(Select, { required: required, error: !!error, fullWidth: true, value: props.value, onChange: function (_a) {
                            var value = _a.target.value;
                            props.onChange(value);
                        } }, options.map(function (opt, i) { return (React.createElement(MenuItem, { key: i, value: opt.value, disabled: opt.disabled }, opt.label)); }))),
                error && React.createElement(FormHelperText, { error: true }, error === null || error === void 0 ? void 0 : error.message)));
        } })));
};
export var renderFormHelper = function (_a) {
    var touched = _a.touched, error = _a.error;
    if (!(touched && error)) {
        return;
    }
    else {
        return React.createElement(FormHelperText, null, touched && error);
    }
};
export var localOptions = [
    { label: "English", value: "en_US" },
    { label: "German", value: "de_DE" },
    { label: "Spanish (Spain)", value: "es_ES" },
    { label: "Spanish (Latin America)", value: "es_419" },
    { label: "French", value: "fr_FR" },
    { label: "Italian", value: "it_IT" },
    { label: "Dutch", value: "nl_NL" },
    { label: "Polish", value: "pl_PL" },
    { label: "Portuguese (Brazil)", value: "pt_BR" },
    { label: "Swedish", value: "sv_SE" },
    { label: "Turkish", value: "tr_TR" },
];
