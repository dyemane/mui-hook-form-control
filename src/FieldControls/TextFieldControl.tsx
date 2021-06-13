import React from "react"
import { Control, Controller } from "react-hook-form"
import { TextField } from "@material-ui/core"

type FIXME = any

interface TextFieldControlProps {
  label?: string
  control: Control<FIXME>
  error: FIXME
  name: string
  defaultValue?: FIXME
  fullWidth?: boolean
  [key: string]: FIXME
}
export const TextFieldControl = ({
  control,
  error,
  name,
  defaultValue,
  fullWidth = true,
  ...rest
}: TextFieldControlProps) => (
  <Controller
    name={name}
    as={TextField}
    control={control}
    fullWidth={fullWidth}
    error={!!error}
    helperText={error?.message}
    defaultValue={defaultValue || ""}
    {...rest}
  />
)
