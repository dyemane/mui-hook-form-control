import { CheckboxControl, SwitchControl, FileButtonControl, RadioGroupControl, SelectControl, } from "./FieldControls";
import { checkChecked, checkError, checkHelper, checkLabel } from "./utils";
describe("CheckboxControl", function () {
    checkLabel(CheckboxControl);
    checkHelper(SwitchControl);
    checkChecked(CheckboxControl, { defaultValue: true });
    checkChecked(CheckboxControl, { defaultValue: false });
});
describe("SwitchControl", function () {
    checkLabel(SwitchControl);
    checkError(SwitchControl);
    checkHelper(SwitchControl);
    checkChecked(SwitchControl, { defaultValue: true });
    checkChecked(SwitchControl, { defaultValue: false });
});
describe("FileButtonControl", function () {
    checkLabel(FileButtonControl);
    checkError(FileButtonControl);
    checkHelper(FileButtonControl);
});
var options = [{ label: "option 1", value: "value 1" }];
describe("RadioGroupControl", function () {
    checkHelper(RadioGroupControl, { options: options });
    checkError(RadioGroupControl, { options: options });
});
describe("SelectControl", function () {
    checkLabel(SelectControl, { options: options });
    checkError(SelectControl, { options: options });
});
//# sourceMappingURL=FieldControls.test.js.map