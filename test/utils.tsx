import * as React from "react"
import { render } from "enzyme"
import { useForm } from "react-hook-form"

type FIXME = any

export const fieldDefaultProps = {
  name: "Field Name",
  defaultValue: "Field Value",
  label: "Field Label",
  error: undefined,
}
export const getWrapper = (FieldComponent, props = {}) => {
  const TestWrapper = () => {
    const { control } = useForm()
    return (
      <FieldComponent
        {...{ ...fieldDefaultProps, ...props }}
        control={control}
      />
    )
  }
  return <TestWrapper />
}

export const checkLabel = (FieldComponent, props = {}) => {
  it("shows label", () => {
    const fieldWrapper = render(getWrapper(FieldComponent, props))
    expect(
      fieldWrapper.find(".MuiInputLabel-root").text() ||
        fieldWrapper.find("label").text() ||
        fieldWrapper.find(".MuiFormControlLabel-label").text()
    ).toEqual(fieldDefaultProps.label)
  })
}

export const checkName = (FieldComponent, props = {}) => {
  it("has name", () => {
    const fieldWrapper = render(getWrapper(FieldComponent, props))
    expect(fieldWrapper.find("input").attr("name")).toEqual(
      fieldDefaultProps.name
    )
  })
}

export const checkValue = (FieldComponent, props = {}) => {
  it("has value", () => {
    const fieldWrapper = render(getWrapper(FieldComponent, props))
    expect(fieldWrapper.find("input").attr("value")).toEqual(
      fieldDefaultProps.defaultValue
    )
  })
}

export const checkChecked = (
  FieldComponent,
  props = { defaultValue: false }
) => {
  it(`is checked is ${props.defaultValue}`, () => {
    const fieldWrapper = render(getWrapper(FieldComponent, props))
    expect(!!fieldWrapper.find("input").attr("checked")).toEqual(
      !!props.defaultValue
    )
  })
}

export const checkError = (FieldComponent, props = {}) => {
  it("shows error", () => {
    const fieldWrapper = render(
      getWrapper(FieldComponent, { error: "Field Error", ...props })
    )
    expect(fieldWrapper.find(".Mui-error").length).not.toBe(0)
  })
}

export const checkHelper = (FieldComponent, props = {} as FIXME) => {
  it("shows helper", () => {
    const helperText = props?.helperText || "Helper Text"
    const fieldWrapper = render(
      getWrapper(FieldComponent, { helperText, ...props })
    )

    expect(fieldWrapper.find(".MuiFormHelperText-root").text()).toBe(helperText)
  })
}
