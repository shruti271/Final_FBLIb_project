import * as Yup from "yup";

export const registerValidationSchema = Yup.object().shape({
  firstname: Yup.string().required("Enter your firstname"),
  lastname: Yup.string().required("Username is required"),
  email: Yup.string().required("Email is required").email("Email is invalid"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .max(40, "Password must not exceed 40 characters"),
  acceptTerms: Yup.bool().oneOf([true], "Accept Terms is required"),
});

export const loginvalidationSchema = Yup.object().shape({
  email: Yup.string().required("Email is required").email("Email is invalid"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .max(40, "Password must not exceed 40 characters"),
});

export const forgetvalidationSchema = Yup.object().shape({
  email: Yup.string().required("Email is required").email("Email is invalid"),
});
