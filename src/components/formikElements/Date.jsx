import { FastField, ErrorMessage } from "formik";
import { inputClass } from "../RegisterForm";
import PersonalError from "../PersonalError";
import jMoment from "moment-jalaali";
import { useEffect, useState } from "react";

const days = Array.from({ length: 31 }, (_, i) => i + 1);

const months = [
  { id: 1, value: "فروردین" },
  { id: 2, value: "اردیبهشت" },
  { id: 3, value: "خرداد" },
  { id: 4, value: "تیر" },
  { id: 5, value: "مرداد" },
  { id: 6, value: "شهریور" },
  { id: 7, value: "مهر" },
  { id: 8, value: "آبان" },
  { id: 9, value: "آذر" },
  { id: 10, value: "دی" },
  { id: 11, value: "بهمن" },
  { id: 12, value: "اسفند" },
];

const Date = (props) => {
  const [Day, setDay] = useState("");
  const [Month, setMonth] = useState("");
  const [Year, setYear] = useState("");
  const [Years, setYears] = useState([]);
  const [show, setShow] = useState(false);

  // مقدار اولیه تاریخ
  useEffect(() => {
    const now = jMoment();

    setDay(now.jDate());
    setMonth(now.jMonth() + 1);
    setYear(now.jYear());
  }, []);

  // باز کردن انتخاب تاریخ
  const handleShow = () => {
    const currentYear = parseInt(Year);


    const arr = [];

    for (
      let index = currentYear;
      index >= currentYear - 100;
      index--
    ) {
      arr.push(index);
    }

    setYears(arr);
    setShow(true);
  };

  // ثبت تاریخ در Formik
  const handleSetDate = (e) => {
    e.stopPropagation();

    if (!Day || !Month || !Year) {
      return;
    }

    const date = `${Day} / ${Month} / ${Year}`;

    // ثبت مقدار در Formik
    props.formik.setFieldValue(props.name, date);

    // مشخص کردن فیلد به عنوان touched
    props.formik.setFieldTouched(props.name, true);

    setShow(false);
  };

  return (
    <div className="space-y-2">

      {/* عنوان */}
      <label
        htmlFor={props.name}
        className="block text-sm font-medium text-slate-200"
      >
        {props.label}
      </label>

      {/* input */}
      <span onClick={handleShow}>
        <FastField
          id={props.name}
          type="text"
          name={props.name}
          placeholder={props.label}
          className={inputClass}
          readOnly
        />
      </span>

      {/* انتخاب تاریخ */}
      {show ? (
        <div
          className="flex items-center gap-2"
          onClick={(e) => e.stopPropagation()}
        >

          {/* روز */}
          <div>
            <select
              value={Day}
              onChange={(e) => setDay(e.target.value)}
              className="
                rounded-md
                border border-slate-600
                bg-slate-800
                px-2 py-2
                text-slate-200
                outline-none
                focus:border-indigo-500
              "
            >
              {days.map((day) => (
                <option key={day} value={day}>
                  {day}
                </option>
              ))}
            </select>
          </div>

          {/* ماه */}
          <div>
            <select
              value={Month}
              onChange={(e) => setMonth(e.target.value)}
              className="
                rounded-md
                border border-slate-600
                bg-slate-800
                px-2 py-2
                text-slate-200
                outline-none
                focus:border-indigo-500
              "
            >
              {months.map((month) => (
                <option key={month.id} value={month.id}>
                  {month.value}
                </option>
              ))}
            </select>
          </div>

          {/* سال */}
          <div>
            <select
              value={Year}
              onChange={(e) => setYear(e.target.value)}
              className="
                rounded-md
                border border-slate-600
                bg-slate-800
                px-2 py-2
                text-slate-200
                outline-none
                focus:border-indigo-500
              "
            >
              {Years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>

          {/* ثبت */}
          <button
            type="button"
            onClick={handleSetDate}
            className="
              cursor-pointer
              rounded-md
              px-2 py-2
              transition
              hover:bg-slate-700
            "
          >
            ✅
          </button>

        </div>
      ) : null}

      {/* خطای Formik */}
      <ErrorMessage
        name={props.name}
        component={PersonalError}
      />

    </div>
  );
};

export default Date;