
import { Field, ErrorMessage } from "formik";
import { inputClass } from "./RegisterForm";

const FavoriteField = ({ form, push, remove }) => {
  const { favorite } = form.values;

  return (
    <>
      <i
        className="cursor-pointer text-blue-100"
        onClick={() => push("")}
      >
        +
      </i>

      <label
        htmlFor="favorite[0]"
        className="block text-sm font-medium text-slate-200"
      >
        علایق
      </label>

      {favorite.map((f, i) => (
        <div key={i} className="mb-3">
          <Field
            type="text"
            className={inputClass}
            name={`favorite[${i}]`}
          />

          <ErrorMessage name={`favorite[${i}]`}>
            {(message) => (
              <small className="block rounded-lg border border-red-400/10 bg-red-400/5 px-3 py-2 text-xs leading-5 text-red-300">
                {message}
              </small>
            )}
          </ErrorMessage>

          {favorite.length > 1 && (
            <i
              className="cursor-pointer text-red-400"
              onClick={() => remove(i)}
            >
            ⛌
            </i>
          )}
        </div>
      ))}
    </>
  );
};

export default FavoriteField;
