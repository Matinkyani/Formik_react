import * as yup from "yup";
import { Formik, Form,  FieldArray } from "formik";
import FavoriteField from "./FavoriteField";
import { useEffect, useState } from "react";
import FormikControl from "./formikElements/FormikControl";
import axios from "axios";
const initialValues = {
  name: "",
  email: "",
  passWord: "",
  Bio: "",
  address: {
    city: "",
    postalCode: "",
  },
  phone: ["", ""],
  favorite: [""],
  education:1,
  gender:1,
  skill:[],
  date : "",
  Image : null
};


const validationSchema = yup.object({
  name: yup
    .string()
    .trim()
    .required("لطفا نام خود را وارد کنید"),

  email: yup
    .string()
    .email("لطفا قالب ایمیل را رعایت کنید: aaa@example.com")
    .required("لطفا ایمیل خود را وارد کنید"),
  date: yup
    .string()
    .required("لطفا تاریخ تولد خود را وارد کنید"),

  passWord: yup
    .string()
    .required("لطفا رمز عبور خود را وارد کنید")
    .min(8, "رمز عبور باید حداقل ۸ کاراکتر باشد"),

  address: yup.object({
    city: yup.string().required("لطفا نام شهر خود را وارد کنید"),
    postalCode: yup.string().required("لطفا کدپستی خود را وارد کنید"),
  }),

  phone: yup
    .array()
    .of(yup.string().required("شماره خود را صحیح وارد کنید")),

  favorite: yup
    .array()
    .of(yup.string().required("لطفا علایق خود را وارد کنید")),
    education:yup
    .string()
    .required("لطفا تحصیلات خود را وارد کنید"),
  Image: yup
  .mixed()
  .required("لطفا فایل خود را بارگزاری کنید")
  .test("fileSize","حجم فایل باید کمتر از 100 مگ باشد",value=>value &&value.size<=100 * 1024 * 1024)
});
const options =[
  {id:1 , value: "ابتدایی"},
  {id:2 , value: "سیکل"},
  {id:3 , value: "لیسانس"},
  {id:4 , value: "فوق لیسانس"}
]
const genders = [
  {id:1 , value: "مرد"},
  {id:2 , value: "خانم"},
]
  const skills = [
      {id:1 , value: "HTML"},
      {id:2 , value: "CSS"},
      {id:3 , value: "JS"},
      {id:4 , value: "REACT"},

  ]


export const validateBio = (value) => {
  if (!value || !value.trim()) {
    return "لطفا بیوگرافی خود را وارد کنید";
  }

  return undefined;
};


const onSubmit = (values, submitProps) => {
  setTimeout(() => {
    let formData = new FormData()
    formData.append("image",values.Image)
    submitProps.setSubmitting(false);
    submitProps.resetForm();
    axios.post("",formData,{headers:{"Content-Type":"multipart/formData"}})
  }, 5000);
};


export const inputClass =
  "h-12 w-full rounded-xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm text-white outline-none transition-all duration-300 placeholder:text-slate-500 hover:border-white/20 focus:border-violet-400 focus:bg-slate-950/60 focus:ring-4 focus:ring-violet-500/15";

const buttonClass =
  "w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/15";

const RegisterForm = () => {
const [savedData, setSavedData] = useState(null);
const [myValues, setMyvalues] = useState(null);

const handleSaveData = (formik) => {
  const data = formik.values;

  localStorage.setItem("saved data", JSON.stringify(data));

  setSavedData(data);

  console.log("اطلاعات ذخیره شد:", data);
};

useEffect(() => {
  const localSavedData = localStorage.getItem("saved data");

  if (localSavedData) {
    setSavedData(JSON.parse(localSavedData));
  }
}, []);

const handleGetSavedData = () => {
  if (savedData) {
    setMyvalues(savedData);
  }
};  return (
    <Formik
      initialValues={myValues || initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      validateOnMount
      enableReinitialize
    >
      {(formik) => (
        <div
          dir="rtl"
          className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#090b17] px-5 py-10 font-sans"
        >
          {/* Background Glow */}
          <div className="pointer-events-none absolute -left-20 -top-20 h-80 w-80 rounded-full bg-purple-600/30 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-cyan-500/25 blur-[100px]" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-[100px]" />

          {/* Glass Card */}
          <div className="relative w-full max-w-md rounded-[28px] border border-white/15 bg-white/[0.07] p-7 shadow-[0_25px_80px_rgba(0,0,0,0.4)] backdrop-blur-2xl sm:p-10">
            <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

            {/* Icon */}
            <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-400 text-3xl text-white shadow-lg shadow-violet-500/25">
              ✦
            </div>

            {/* Heading */}
            <h1
              dir="ltr"
              className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
            >
              Create Account
            </h1>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              به سایت ما خوش اومدید.
            </p>

            <Form className="mt-9 space-y-5" noValidate>
              {/* Name */}
              <FormikControl 
              control = "input"
              name = "name"
              type = "text"
              label = "نام و نام خانوادگی"
              placeholder="مثال : متین کیانی"
              />
              {/* Email */}
              <FormikControl 
              control = "input"
              name = "email"
              type = "email"
              label = "ایمیل"
              placeholder="مثال : example@gmail.com"
              />
              {/* Password */}
              <FormikControl 
              control = "input"
              name = "passWord"
              type = "password"
              label = "رمز عبور"
              placeholder="رمز عبور خود را وارد کنید"
              />
              {/* Bio */}
              <FormikControl 
              control = "textarea"
              name = "Bio"
              label = "بیوگرافی"
              placeholder="بیوگرافی خود را اینجا وارد کنی"
              />
              {/* City */}
              <FormikControl 
              control = "input"
              name = "address.city"
              type = "text"
              label ="شهر"
              placeholder="مثال :تهران"
              />              
              {/* Postal Code */}
              <FormikControl 
              control = "input"
              name = "address.postalCode"
              type = "number"
              label ="کدپستی"
              placeholder="مثال :222999"
              />              
              {/* Mobile Phone */}
              <FormikControl 
              control = "input"
              name = "phone[0]"
              type = "number"
              label ="تلفن همراه"
              placeholder="مثال :0900xxxxx"
              />              
              {/* Phone */}
              <FormikControl 
              control = "input"
              name = "phone[1]"
              type = "number"
              label ="تلفن ثابت"
              placeholder="مثال :021xxxxx"
              />    
              {/* education */}
              <FormikControl 
              control = "select"
              name = "education"
              label ="تحصیلات"
              option = {options}
              />    
              {/* gender */}
              <FormikControl 
              control = "radio"
              name = "gender"
              label ="جنسیت"
              option = {genders}
              />    
              {/* Skills */}
              <FormikControl 
              control = "checkbox"
              name = "skill"
              label ="مهارت ها"
              option = {skills}
              />    
              {/* datePicker */}
              <FormikControl 
              formik={formik}
              control = "date"
              name = "date"
              label = "تاریخ تولد"
              />    
              {/* uploadFile */}
              <FormikControl 
              formik={formik}
              control = "file"
              name = "Image"
              label = " اسناد"
              />    
              
              {/* Favorite */}
              <FieldArray name="favorite">
                {(props) => <FavoriteField {...props} />}
              </FieldArray>

              {/* Validate Entire Form */}
              <div className="space-y-3 border-t border-white/10 pt-5">
                <button
                  type="button"
                  className={buttonClass}
                  onClick={async () => {
                    await formik.setTouched(
                      {
                        name: true,
                        email: true,
                        passWord: true,
                        Bio: true,
                        address: {
                          city: true,
                          postalCode: true,
                        },
                        phone: [true, true],
                        favorite: formik.values.favorite.map(() => true),
                      },
                      false
                    );

                    const errors = await formik.validateForm();

                    console.log("خطاهای کل فرم:", errors);
                  }}
                >
                  اعتبارسنجی کل فرم
                </button>

                {/* Validate Email Only */}
                <button
                  type="button"
                  className={buttonClass}
                  onClick={async () => {
                    await formik.setFieldTouched("email", true, false);

                    await formik.validateField("email");

                    console.log(
                      "خطای ایمیل:",
                      formik.errors.email
                    );
                  }}
                >
                  اعتبارسنجی ایمیل 
                </button>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={formik.isSubmitting || !(formik.isValid && formik.dirty)}
                className="group mt-3 flex w-full cursor-pointer items-center justify-center gap-3 rounded-xl bg-gradient-to-l from-violet-600 via-indigo-500 to-cyan-500 px-5 py-4 text-sm font-bold text-white shadow-lg shadow-indigo-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-violet-500/30 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {formik.isSubmitting
                  ? "در حال ثبت‌نام..."
                  : "ثبت نام"}

                <span className="text-xl transition-transform duration-300 group-hover:-translate-x-1">
                  ←
                </span>
              </button>
              {
                (formik.isValid && formik.dirty)?(
                  <button type="button" 
                  onClick={()=>handleSaveData(formik)}
                  className="group mt-3 flex w-full cursor-pointer items-center justify-center gap-3 rounded-xl bg-gradient-to-l from-violet-600 via-indigo-500 to-cyan-500 px-5 py-4 text-sm font-bold text-white shadow-lg shadow-indigo-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-violet-500/30 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60">
                  ذخیره در سیستم
                  </button>
                ):null
              }
              {
                (savedData)?(
                  <button type="button"
                  onClick={handleGetSavedData}
                  className="group mt-3 flex w-full cursor-pointer items-center justify-center gap-3 rounded-xl bg-gradient-to-l from-violet-600 via-indigo-500 to-cyan-500 px-5 py-4 text-sm font-bold text-white shadow-lg shadow-indigo-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-violet-500/30 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60">
                    دریافت اطلاعات از سیستم
                  </button>
                ):null
              }
            </Form>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default RegisterForm;
