import { Control, Controller, FieldError } from "react-hook-form";
import './CustomInput.css'
import { FormValues } from "../models";

interface Props {
  name: keyof FormValues;
  control: Control<FormValues>;
  label: string;
  type?: string;
  error?: FieldError;
  placeholder?: string;
}

const InputForm = ({ name, control, label, type, error, placeholder }: Props) => {
  return <div className="form-group">
    <label htmlFor={name}>{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field }) =>
          <input placeholder={placeholder} id={name} type={type} {...field} className={`form-control ${error ? "is-invalid" : ""}`}></input>
        }
      />
      {error && <p className="error">{error.message}</p>}
  </div>
}

export default InputForm;
