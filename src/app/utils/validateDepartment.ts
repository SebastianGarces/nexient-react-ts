import { CreateDepartment, FormError } from "../@types";

export default function validateCreateDepartment(values: CreateDepartment): FormError<CreateDepartment> {
  const errors: FormError<CreateDepartment> = {};
  if (!values.name) {
    errors.name = "Department name is required";
  }

  return errors;
}
