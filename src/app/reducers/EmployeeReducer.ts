import { Department, JobTitle, Employee, ReducerActions } from "../@types";

enum EmployeeTypes {
  reset = "reset",
  update = "update",
}

type EmployeeState = {
  isActive: boolean;
  isManager: boolean;
  firstName: string;
  lastName: string;
  email: string;
  middleInitial: string;
  jobTitle: JobTitle | Record<string, unknown>;
  department: Department | Record<string, unknown>;
  manager: Employee | Record<string, unknown>;
};

export const initialEmployee: EmployeeState = {
  isActive: true,
  isManager: false,
  firstName: "",
  lastName: "",
  middleInitial: "",
  jobTitle: {},
  department: {},
  manager: {},
  email: "",
}

export default (state: EmployeeState, action: ReducerActions): EmployeeState => {
  switch (action.type) {
    case EmployeeTypes.reset:
      return {
        ...state,
        isActive: true,
        firstName: "",
        lastName: "",
        middleInitial: "",
        jobTitle: {},
        department: {},
        manager: {},
        email: "",
      };
    case EmployeeTypes.update:
      return { ...state, [action.field]: action.value };
    default:
      return state;
  }
};
