import { ReducerActions } from "../@types";

enum JobTitleTypes {
  reset = "reset",
  update = "update",
}

type JobTitleState = {
  name: string;
  isActive: boolean;
};

export const initialJobTitle: JobTitleState = {
  name: "",
  isActive: true,
};

export default (state: JobTitleState, action: ReducerActions): JobTitleState => {
  switch (action.type) {
    case JobTitleTypes.reset:
      return { ...state, name: "", isActive: true };
    case JobTitleTypes.update:
      return { ...state, [action.field]: action.value };
    default:
      return state;
  }
};
