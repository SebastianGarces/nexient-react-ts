import { ReactNode, FunctionComponent } from "react";
import { Department, Employee, JobTitle, CreateEmployee } from "../../@types";

type SelectProps = {
  name: keyof CreateEmployee;
  label: string;
  options: JobTitle[] | Employee[] | Department[];
  getOptionValue: (option: JobTitle | Employee | Department) => ReactNode;
  register: (fieldName: keyof CreateEmployee) => void;
  cyTestId: string;
  className: string;
};

const Select: FunctionComponent<SelectProps> = ({
  name,
  label,
  options,
  getOptionValue,
  register,
  cyTestId,
  ...props
}): JSX.Element => {
  return (
    <fieldset {...props}>
      <label htmlFor={name}>{label}</label>
      <select {...register(name)} data-testid={cyTestId}>
        <option hidden selected value={0}>
          Select one...
        </option>
        {options.map(option => {
          return (
            <option
              key={option.id}
              value={option.id}
              data-testid={`${cyTestId}-option-${option.id}`}
            >
              {getOptionValue(option)}
            </option>
          );
        })}
      </select>
    </fieldset>
  );
};

export default Select;
