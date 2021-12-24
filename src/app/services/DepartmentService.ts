import { doDelete, doGet, doPost, doPut } from "./ApiService";
import { Department, BaseDepartment } from "../@types";

const serviceUrl = "/depts";

export const getActiveDepartments = (): Promise<Department[]> => {
  return doGet<Department[]>(serviceUrl);
};

export const getArchivedDepartments = (): Promise<Department[]> => {
  return doGet<Department[]>(`${serviceUrl}/archives`);
};

export const getDepartmentById = (departmentId: number): Promise<Department> => {
  return doGet<Department>(`${serviceUrl}/${departmentId}`);
};

export const createDepartment = (department: BaseDepartment): Promise<BaseDepartment> => {
  return doPost<BaseDepartment>(serviceUrl, department);
};

export const updateDepartment = (department: Department): Promise<Department> => {
  return doPut<Department>(`${serviceUrl}`, department);
};

export const deleteDepartment = (departmentId: number): Promise<Department> => {
  return doDelete<Department>(`${serviceUrl}/${departmentId}`);
};
