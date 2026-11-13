import { FastField,ErrorMessage } from "formik";
import { inputClass } from "../RegisterForm";
import PersonalError from "../PersonalError";
const Input = (props) => {
    return (
        <div className="space-y-2">
        <label
          htmlFor={props.name}
          className="block text-sm font-medium text-slate-200"
        >
          {props.label}
        </label>

        <FastField
          id={props.name}
          name= {props.name}
          type="text"
          placeholder= {props.placeholder}
          className={inputClass}
        />

        <ErrorMessage name={props.name} component={PersonalError} />
        </div>
            
    );
};

export default Input;