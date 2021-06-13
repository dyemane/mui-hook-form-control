import React from "react"
import { Controller } from "react-hook-form"
import {
  Link,
  Switch,
  Radio,
  FormControlLabel,
  RadioGroup,
  Checkbox,
  FormHelperText,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@material-ui/core"
import { truncate } from "lodash"

type FIXME = any

export const CheckboxControl = ({
  onChange,
  color,
  disabled,
  className,
  label,
  control,
  error,
  name,
  defaultValue,
  ...rest
}: FIXME) => (
  <Controller
    name={name}
    control={control}
    error={!!error}
    helperText={error?.message}
    defaultValue={defaultValue || false}
    {...rest}
    render={(props) => {
      return (
        <FormControlLabel
          checked={!!props.value}
          className={className}
          disabled={disabled}
          control={
            <Checkbox
              color={color}
              onChange={(e, v) => {
                props.onChange(v)
                onChange && onChange(v)
              }}
            />
          }
          label={label}
        />
      )
    }}
  />
)

export const SwitchControl = ({
  onChange,
  helperText,
  disabled,
  className,
  label,
  control,
  error,
  name,
  defaultValue,
  ...rest
}: FIXME) => (
  <Controller
    name={name}
    control={control}
    error={!!error}
    defaultValue={defaultValue || false}
    {...rest}
    render={(props) => {
      const toggle = (e) => {
        e.stopPropagation()
        e.preventDefault()
        const newVal = !props.value
        props.onChange(newVal)
        onChange && onChange(newVal)
      }
      return (
        <div className={className}>
          <FormControlLabel
            disabled={disabled}
            control={
              <>
                <Switch
                  checked={!!props.value}
                  className='reg-left'
                  onChange={toggle}
                />
              </>
            }
            label={
              <div className='reg-left'>
                <InputLabel onClick={toggle}>{label}</InputLabel>
                {helperText && (
                  <FormHelperText className='huge-left' onClick={toggle}>
                    {helperText}
                  </FormHelperText>
                )}
                {error && (
                  <FormHelperText error>{error?.message}</FormHelperText>
                )}
              </div>
            }
          />
        </div>
      )
    }}
  />
)

interface RadioGroupOption {
  label: string
  value: FIXME
  className?: string
}

export const RadioGroupControl = ({
  helperText,
  required,
  color,
  onChange,
  options,
  control,
  error,
  name,
  defaultValue,
  ...rest
}: { options: RadioGroupOption[] } & FIXME) => (
  <Controller
    name={name}
    control={control}
    error={!!error}
    defaultValue={defaultValue || ""}
    {...rest}
    render={(props: FIXME) => {
      return (
        <RadioGroup>
          {options.map((opt: RadioGroupOption, i: number) => (
            <FormControlLabel
              key={i}
              label={opt.label}
              className={opt.className}
              control={
                <Radio
                  required={required}
                  color={color}
                  checked={props.value === opt.value}
                  onClick={() => {
                    props.onChange(opt.value)
                    onChange && onChange(opt.value)
                  }}
                />
              }
            />
          ))}
          {helperText && <FormHelperText>{helperText}</FormHelperText>}
          {error && <FormHelperText error>{error?.message}</FormHelperText>}
        </RadioGroup>
      )
    }}
  />
)

export const FileButtonControl = ({
  onChange,
  required,
  className,
  helperText,
  control,
  error,
  name,
  label = "Upload File",
  defaultValue,
  ...rest
}: FIXME) => (
  <Controller
    name={name}
    control={control}
    error={!!error}
    helperText={error?.message}
    defaultValue={defaultValue?.url || defaultValue || ""}
    {...rest}
    render={(props: FIXME) => {
      const fileUrl = defaultValue?.url
      return (
        <div className={className}>
          {!props.value?.name && fileUrl && (
            <FormHelperText>
              <Link
                target='blank'
                onClick={() => {
                  window.open(fileUrl)
                }}
              >
                {truncate(fileUrl.split("/").pop(), { length: 100 })}
              </Link>
            </FormHelperText>
          )}
          {props.value?.name && (
            <FormHelperText>{props.value?.name}</FormHelperText>
          )}
          <Button variant='contained' component='label'>
            {label}
            {required && <sup style={{ color: "red" }}>*</sup>}
            <input
              type='file'
              hidden
              onChange={(e: FIXME) => {
                if (e?.currentTarget?.files?.length) {
                  props.onChange(e.currentTarget.files[0])
                  onChange && onChange(e.currentTarget.files[0])
                }
              }}
            />
          </Button>

          {helperText && <FormHelperText>{helperText}</FormHelperText>}
          {error && <FormHelperText error>{error?.message}</FormHelperText>}
        </div>
      )
    }}
  />
)

interface SelectOption {
  label: string
  value: FIXME
  disabled?: boolean
}
export const SelectControl = ({
  required,
  label,
  onChange,
  className,
  options,
  control,
  error,
  name,
  defaultValue,
  ...rest
}: { options: SelectOption[] } & FIXME) => (
  <Controller
    name={name}
    control={control}
    error={!!error}
    helperText={error?.message}
    defaultValue={defaultValue || ""}
    {...rest}
    render={(props: FIXME) => {
      return (
        <>
          <div className={className}>
            <InputLabel required={required} shrink>
              {label}
            </InputLabel>
            <Select
              required={required}
              error={!!error}
              fullWidth={true}
              value={props.value}
              onChange={({ target: { value } }) => {
                props.onChange(value)
              }}
            >
              {options.map((opt: SelectOption, i: number) => (
                <MenuItem key={i} value={opt.value} disabled={opt.disabled}>
                  {opt.label}
                </MenuItem>
              ))}
            </Select>
          </div>
          {error && <FormHelperText error>{error?.message}</FormHelperText>}
        </>
      )
    }}
  />
)
