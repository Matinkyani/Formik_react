import { FastField,ErrorMessage } from "formik";
import { inputClass } from "../RegisterForm";
import PersonalError from "../PersonalError";
import { validateBio } from "../RegisterForm";
const TextArea = (props) => {
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
            name={props.name}
            placeholder={props.placeholder}
            className={inputClass}
            as="textarea"
            validate={validateBio}
          />

          <ErrorMessage name={props.name} component={PersonalError} />
        </div>

    );
};

export default TextArea;