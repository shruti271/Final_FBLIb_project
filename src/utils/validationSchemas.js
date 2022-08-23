import * as Yup from "yup";

export const registerValidationSchema = Yup.object().shape({
  email: Yup.string().required("Email is required").email("Email is invalid"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must have at least 6 characters")
    .test("passwordRequirements", "Must Contain Characters ans Numbers", (value) =>
      [/[a-z]/, /[0-9]/, /* /[^a-zA-Z0-9]/,/[!@#$%]/ */].every((pattern) =>
        pattern.test(value)
      )
    ),
  acceptTerms: Yup.bool().oneOf([true]),
});

export const loginvalidationSchema = Yup.object().shape({
  email: Yup.string().required("Email is required").email("Email is invalid"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must have at least 6 characters")
    .test("passwordRequirements", "Must Contain Characters ans Numbers", (value) =>
      [/[a-z]/, /[0-9]/,/* /[^a-zA-Z0-9]/,/[!@#$%]/ */].every((pattern) =>
        pattern.test(value)
      )
    ),
});

export const forgetvalidationSchema = Yup.object().shape({
  email: Yup.string().required("Email is required").email("Email is invalid"),
});
