import { doDelete, doGet, doPost, doPut } from "./ApiService";
import { BaseEmployee, Employee } from "../@types";

const serviceUrl = "/emps";

export const getEmployees = (): Promise<Employee[]> => {
  return doGet<Employee[]>(serviceUrl);
};

export const getArchivedEmployees = (): Promise<Employee[]> => {
  return doGet<Employee[]>(`${serviceUrl}/archives`);
};

export const getEmployeesByManagerId = (managerId: number): Promise<Employee[]> => {
  return doGet<Employee[]>(`${serviceUrl}/manager/${managerId}`);
};

export const getEmployeesWithNoManagers = (): Promise<Employee[]> => {
  return doGet<Employee[]>(`${serviceUrl}/noManager`);
};

export const getEmployeeById = (employeeId: number): Promise<Employee> => {
  return doGet<Employee>(`${serviceUrl}/${employeeId}`);
};

export const createEmployee = (employee: BaseEmployee): Promise<BaseEmployee> => {
  return doPost<BaseEmployee>(serviceUrl, employee);
};

export const updateEmployee = (employee: Employee): Promise<Employee> => {
  return doPut<Employee>(serviceUrl, employee);
};

export const deleteEmployee = (employeeId: number): Promise<Employee> => {
  return doDelete(`${serviceUrl}/${employeeId}`);
};
