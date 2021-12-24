import { CreateJobTitle, FormError } from "../@types";

export default function validateJobTitle(values: CreateJobTitle): FormError<CreateJobTitle> {
  const errors: FormError<CreateJobTitle> = {};
  if (!values.name) {
    errors.name = "Job title is required";
  }

  return errors;
}
