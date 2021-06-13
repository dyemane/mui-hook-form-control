import {
  CheckboxControl,
  SwitchControl,
  FileButtonControl,
  RadioGroupControl,
  SelectControl,
} from "../src"
import { checkChecked, checkError, checkHelper, checkLabel } from "./utils"

describe("CheckboxControl", () => {
  checkLabel(CheckboxControl)
  checkHelper(SwitchControl)
  checkChecked(CheckboxControl, { defaultValue: true })
  checkChecked(CheckboxControl, { defaultValue: false })
})

describe("SwitchControl", () => {
  checkLabel(SwitchControl)
  checkError(SwitchControl)
  checkHelper(SwitchControl)
  checkChecked(SwitchControl, { defaultValue: true })
  checkChecked(SwitchControl, { defaultValue: false })
})

describe("FileButtonControl", () => {
  checkLabel(FileButtonControl)
  checkError(FileButtonControl)
  checkHelper(FileButtonControl)
})

const options = [{ label: "option 1", value: "value 1" }]

describe("RadioGroupControl", () => {
  checkHelper(RadioGroupControl, { options })
  checkError(RadioGroupControl, { options })
})

describe("SelectControl", () => {
  checkLabel(SelectControl, { options })
  checkError(SelectControl, { options })
})
