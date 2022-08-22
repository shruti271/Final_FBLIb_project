import * as Yup from "yup";

export const registerValidationSchema = Yup.object().shape({
  email: Yup.string().required("Email is required").email("Email is invalid"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must not exceed 6 characters")
    .test("passwordRequirements", "One special charcter", (value) =>
      [/[a-z]/, /[0-9]/, /[^a-zA-Z0-9]/,/[!@#$%]/].every((pattern) =>
        pattern.test(value)
      )
    ),
  acceptTerms: Yup.bool().oneOf([true]),
});

export const loginvalidationSchema = Yup.object().shape({
  email: Yup.string().required("Email is required").email("Email is invalid"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must not exceed 6 characters")
    .test("passwordRequirements", "one special charcter missing", (value) =>
      [/[a-z]/, /[0-9]/, /[^a-zA-Z0-9]/,/[!@#$%]/].every((pattern) =>
        pattern.test(value)
      )
    ),
});

export const forgetvalidationSchema = Yup.object().shape({
  email: Yup.string().required("Email is required").email("Email is invalid"),
});
