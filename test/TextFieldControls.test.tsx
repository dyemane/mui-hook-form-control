import { TextFieldControl } from "../src"
import { checkChecked, checkLabel, checkName, checkValue } from "./utils"

describe("TextFieldControl", () => {
  checkChecked(TextFieldControl)
  checkLabel(TextFieldControl)
  checkName(TextFieldControl)
  checkValue(TextFieldControl)
})
