import { FastField, ErrorMessage } from "formik";
import PersonalError  from "../PersonalError";
import { Fragment } from "react";
const Checkbox = (props) => {
  return (
    <div className="space-y-3">

      {/* عنوان */}
      <label
        htmlFor={props.name}
        className="block text-sm font-semibold text-slate-200"
      >
        {props.label}
      </label>

      <FastField
        id={props.name}
        name={props.name}
        placeholder={props.placeholder}
      >
        {({ field }) => {

          // اگر مقدار field.value وجود نداشت،
          // یک آرایه خالی در نظر بگیر
          const selectedValues = Array.isArray(field.value)
            ? field.value
            : [];

          return (
            <div className="grid gap-3 sm:grid-cols-2">

              {props.option.map((r) => {

                const isChecked = selectedValues.includes(r.value);

                return (
                  <Fragment key={r.id}>

                    <label
                      htmlFor={r.id}
                      className={`
                        group flex cursor-pointer items-center gap-3
                        rounded-xl border px-4 py-3
                        transition-all duration-200
                        ${
                          isChecked
                            ? "border-indigo-500 bg-indigo-500/10"
                            : "border-slate-700 bg-slate-800/40 hover:border-slate-500"
                        }
                      `}
                    >

                      <input
                        type="checkbox"
                        id={r.id}
                        name={field.name}
                        value={r.value}
                        checked={isChecked}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                        className="
                          h-4 w-4 cursor-pointer
                          rounded border-slate-600
                          bg-slate-800
                          text-indigo-500
                          accent-indigo-500
                          focus:ring-2 focus:ring-indigo-500/40
                        "
                      />

                      <span
                        className={`
                          text-sm transition-colors
                          ${
                            isChecked
                              ? "text-indigo-300"
                              : "text-slate-300 group-hover:text-white"
                          }
                        `}
                      >
                        {r.value}
                      </span>

                    </label>

                  </Fragment>
                );
              })}

            </div>
          );
        }}
      </FastField>

      <ErrorMessage
        name={props.name}
        component={PersonalError}
      />

    </div>
  );
};

export default Checkbox;