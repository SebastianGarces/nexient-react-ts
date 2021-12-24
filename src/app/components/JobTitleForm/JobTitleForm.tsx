import { Dispatch, useEffect } from "react";
import { useToasts } from "react-toast-notifications";
import useForm from "../../hooks/useForm";
import { createJobTitle, getJobTitle, updateJobTitle } from "../../services/JobTitleService";
import validateJobTitle from "../../utils/validateJobTitle";
import Form from "../Form";
import { CreateJobTitle } from "../../@types";

type JobTitleFormProps =
  | {
      isEditing: true;
      editJobTitleId: number;
      toggleEditModal: () => void;
      setEditJobTitleId: Dispatch<number>;
    }
  | { isEditing: false };

export default function JobTitleForm(props: JobTitleFormProps): JSX.Element {
  const { addToast } = useToasts();

  const initialFormState = { name: "" };
  const { register, handleSubmit, setValue, errors, reset } = useForm<CreateJobTitle>(
    initialFormState,
    validateJobTitle,
    onSubmit
  );

  async function onSubmit(data: CreateJobTitle) {
    const jobTitle = { name: data.name, isActive: true };
    try {
      if (props.isEditing) {
        await updateJobTitle({
          ...jobTitle,
          id: props.editJobTitleId,
        });
      } else {
        await createJobTitle(jobTitle);
      }

      addToast("Job title saved", { appearance: "success", autoDismiss: true });
      reset();

      if (props.isEditing) {
        props.setEditJobTitleId(0);
        props.toggleEditModal();
      }
    } catch (error) {
      addToast("Error submiting form", { appearance: "error", autoDismiss: true });
    }
  }

  useEffect(
    function setJobTitleFields() {
      if (props.isEditing) {
        getJobTitle(props.editJobTitleId).then(res => {
          setValue("name", res.name);
        });
      }
    },
    [props.isEditing]
  );

  return (
    <Form onSubmit={handleSubmit}>
      <fieldset>
        <label htmlFor="name">Job title</label>
        <input type="text" data-testid="create-job-title-name" {...register("name")} />
      </fieldset>
      {errors.name ? <p className="error_message">{errors.name}</p> : null}

      <button type="submit" className="btn" data-testid="create-job-title-save-button">
        Save
      </button>
    </Form>
  );
}
