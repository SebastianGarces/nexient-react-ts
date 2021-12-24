import { CreateEmployee, FormError } from "../@types";

export default function validateEmployee(values: CreateEmployee): FormError<CreateEmployee> {
  const errors: FormError<CreateEmployee> = {};

  if (!values.firstName) {
    errors.firstName = "First name is required";
  }

  if (!values.lastName) {
    errors.lastName = "Last name is required";
  }

  if (!values.jobTitle) {
    errors.jobTitle = "Job title is required";
  }

  return errors;
}
