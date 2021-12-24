import { ReducerActions } from "../@types";

enum DepartmentTypes {
  reset = "reset",
  update = "update",
}

type DepartmentState = {
  name: string;
  isActive: boolean;
};

export const initialDepartment: DepartmentState = {
  name: "",
  isActive: false,
};

export default (state: DepartmentState, action: ReducerActions): DepartmentState => {
  switch (action.type) {
    case DepartmentTypes.reset:
      return { ...state, name: "", isActive: true };
    case DepartmentTypes.update:
      return { ...state, [action.field]: action.value };
    default:
      return state;
  }
};
