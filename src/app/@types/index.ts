import { FC } from "react";

export type BaseEntity = {
  id: number;
  [key: string]: any;
};

export type BaseEmployee = {
  firstName: string;
  lastName: string;
  middleInitial: string;
  email: string;
  isActive: boolean;
  isManager: boolean;
  jobTitle: JobTitle | undefined;
  department: Department | undefined;
  manager?: Employee | null;
};
export type Employee = BaseEntity & BaseEmployee;
export type CreateEmployee = {
  firstName: string;
  lastName: string;
  middleInitial: string;
  email: string;
  jobTitle: number;
  department: number;
  manager: number;
};

export type BaseJobTitle = { isActive: boolean; name: string };
export type JobTitle = BaseEntity & BaseJobTitle;
export type CreateJobTitle = Omit<BaseJobTitle, "isActive">;

export type BaseDepartment = { isActive: boolean; name: string };
export type Department = BaseEntity & BaseDepartment;
export type CreateDepartment = Omit<BaseDepartment, "isActive">;

export type BaseMenuItem = {
  url: string;
  name: string;
  cyTestId?: string;
};

export type MenuItem = {
  primaryLink: BaseMenuItem;
  subMenu: BaseMenuItem[];
};

type ActionComponent = FC<{
  row: BaseEntity;
  handleEdit: (id: number) => void;
  handleDelete: (id: number) => void;
}>;

export type Column =
  | {
      customComponent: true;
      title: string;
      displayValue?: string;
      component: ActionComponent;
      handleEdit: (id: number) => void;
      handleDelete: (id: number) => void;
    }
  | {
      customComponent: false;
      title: string;
      displayValue: string;
      component?: ActionComponent;
      handleEdit?: (id: number) => void;
      handleDelete?: (id: number) => void;
    };

export type FormError<DataType> = {
  [key in keyof DataType]?: string;
};

export type ReducerActions = { type: "reset" } | { type: "update"; field: string; value: string };