import { FastField,ErrorMessage } from "formik";
import { inputClass } from "../RegisterForm";
import PersonalError from "../PersonalError";
import { validateBio } from "../RegisterForm";
const Select = (props) => {
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
            as="select"
          >
            {
                props.option.map((o)=>(
                    <option value={o.id} key={o.id}>{o.value}</option>
                ))
            }
          </FastField>

          <ErrorMessage name={props.name} component={PersonalError} />
        </div>
    );
};

export default Select;