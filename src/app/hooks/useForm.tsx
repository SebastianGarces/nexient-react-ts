import { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import { FormError } from '../@types';

type UseFormReturnType<T> = {
  setValue: (key: string, value: number | string) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  errors: FormError<T>;
  reset: () => void;
  register: (fieldName: keyof T) => {
    name: keyof T;
    id: keyof T;
    value: T[keyof T];
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  };
  formState: T;
}

export default function useForm<FormStateType>(
  initialFormState: FormStateType,
  validate: (formState: FormStateType) => FormError<FormStateType>,
  onSubmit: (formState: FormStateType) => void,
): UseFormReturnType<FormStateType> {
  const [formState, setFormState] = useState(initialFormState);
  const [errors, setErrors] = useState<FormError<FormStateType>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors(validate(formState));
    setIsSubmitting(true);
  }

  function reset() {
    setFormState(initialFormState);
  }

  function setValue(key: string, value: number | string) {
    setFormState(prevState => ({ ...prevState, [key]: value }));
  }

  function register(fieldName: keyof FormStateType) {
    return {
      name: fieldName,
      id: fieldName,
      value: formState[fieldName],
      onChange: handleChange,
    };
  }

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      onSubmit(formState);
    }
  }, [errors]);

  return {
    setValue,
    handleSubmit,
    errors,
    reset,
    register,
    formState,
  };
}
