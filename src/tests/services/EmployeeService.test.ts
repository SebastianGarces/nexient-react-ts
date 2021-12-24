import { doGet, doPost, doPut, doDelete } from "../../app/services/ApiService";
import {
    createEmployee, deleteEmployee,
    getArchivedEmployees,
    getEmployeesByManagerId,
    getEmployeeById,
    getEmployees,
    updateEmployee
} from "../../app/services/EmployeeService";
import { Employee } from '../../app/@types';

jest.mock('../../app/services/ApiService')

describe("Employee Service", () => {
    let employee: Employee;

    beforeEach(() => {
        employee = {
            id: 1,
            firstName: 'Test',
            lastName: 'User',
            middleInitial: '', 
            email: '', 
            isActive: false, 
            isManager: false,
            jobTitle: undefined,
            department: undefined
        }
    });

    describe("getEmployees", () => {
        it("calls doGet with the correct service URL", () => {
            getEmployees();

            expect(doGet).toHaveBeenCalledWith("/emps")
        })
    });

    describe("getArchivedEmployees", () => {
        it("calls doGet with the correct service URL", () => {
            getArchivedEmployees();

            expect(doGet).toHaveBeenCalledWith("/emps/archives")
        })
    });

    describe("getEmployeesByManagerId", () => {
        it("calls doGet with the correct service URL", () => {
            getEmployeesByManagerId(1);

            expect(doGet).toHaveBeenCalledWith("/emps/manager/1")
        })
    });

    describe("getEmployeeById", () => {
        it("calls doGet with the correct service URL", () => {
            getEmployeeById(1);

            expect(doGet).toHaveBeenCalledWith("/emps/1")
        })
    });

    describe("createEmployee", () => {
        it("calls doPost with the correct service URL", () => {
            createEmployee(employee);

            expect(doPost).toHaveBeenCalledWith("/emps", employee);
        })
    });

    describe("updateEmployee", () => {
        it("calls doPut with the correct service URL", () => {
            updateEmployee(employee);

            expect(doPut).toHaveBeenCalledWith("/emps", employee);
        })
    });

    describe("deleteEmployee", () => {
        it("calls doDelete with the correct service URL", () => {
            deleteEmployee(1);

            expect(doDelete).toHaveBeenCalledWith("/emps/1");
        })
    });

});
