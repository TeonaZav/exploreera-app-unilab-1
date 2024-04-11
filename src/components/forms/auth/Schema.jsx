import * as Yup from "yup";

export const loginValidationSchema = Yup.object().shape({
  userEmail: Yup.string()
    .required("Email is required")
    .email("Email is invalid"),
  userPassword: Yup.string().required("Password is required"),
});

export const signUpValidationSchema = Yup.object().shape({
  firstName: Yup.string().required("Firstname is required"),
  lastName: Yup.string().required("Lastname is required"),
  userEmail: Yup.string()
    .required("Email is required")
    .email("Email is invalid"),
  userPassword: Yup.string()
    .required("Password is required")
    .min(6, "Must be at least 6 characters long"),
  confirmPassword: Yup.string()
    .required("Confirming password is required")
    .oneOf([Yup.ref("userPassword"), null], "Passwords must match"),
});

export const dateUpValidationSchema = Yup.object().shape({
  startDate: Yup.object({
    date: Yup.date()
      .typeError("Invalid date format")
      .required("Date is required"),
  }),
});
