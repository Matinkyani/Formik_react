import { ErrorMessage } from "formik";
import { inputClass } from "../RegisterForm";
import PersonalError from "../PersonalError";
const File = (props) => {
    return (
        <div className="space-y-2">
        <label
          htmlFor={props.name}
          className="block text-sm font-medium text-slate-200"
        >
          {props.label}
        </label>
        <input type="file" name={props.name} placeholder={props.label} className={inputClass}
        onChange={e=>{
            props.formik.setFieldValue(props.name,e.target.files[0]) 
        }}
        />

        <ErrorMessage name={props.name} component={PersonalError} />
        </div>
    );
};

export default File;