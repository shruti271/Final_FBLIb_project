import * as Yup from "yup";

export const registerValidationSchema = Yup.object().shape({
  email: Yup.string().required("Email is required").email("Email is invalid"),
  password: Yup.string()
    .required("Password is required")
    .max(40, "Password must not exceed 40 characters"),
  acceptTerms: Yup.bool().oneOf([true]),
});

export const loginvalidationSchema = Yup.object().shape({
  email: Yup.string().required("Email is required").email("Email is invalid"),
  password: Yup.string()
    .required("Password is required")
    .max(40, "Password must not exceed 40 characters"),
});

export const forgetvalidationSchema = Yup.object().shape({
  email: Yup.string().required("Email is required").email("Email is invalid"),
});
