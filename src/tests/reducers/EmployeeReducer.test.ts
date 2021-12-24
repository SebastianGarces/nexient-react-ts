import employeeReducer from '../../app/reducers/EmployeeReducer';
import { ReducerActions } from "../../app/@types";

describe('Job Title Reducer', () => {
    [
        {
            state: {
                firstName: "Test",
                lastName: "User",
                middleInitial: "A",
                jobTitle: {
                    name: "Senior Marketing Director"
                },
                department: {
                    name: "Marketing"
                },
                manager: {},
                email: 'testperson@1.com',
                isActive: true,
                isManager: true,
            },
            action: {
                type: 'reset'
            },
            response: {
                firstName: "",
                lastName: "",
                middleInitial: "",
                jobTitle: {},
                department: {},
                manager: {},
                email: '',
                isActive: true,
                isManager: true,
            }
        },
        {
            state: {
                firstName: "",
                lastName: "",
                middleInitial: "",
                jobTitle: {},
                department: {},
                manager: {},
                email: '',
                isActive: true,
                isManager: false,
            },
            action: {
                type: 'update',
                field: 'firstName',
                value: 'John'
            },
            response: {
                firstName: "John",
                lastName: "",
                middleInitial: "",
                jobTitle: {},
                department: {},
                manager: {},
                email: '',
                isActive: true,
                isManager: false,
            }
        },
        {
            state: {
                firstName: "John",
                lastName: "",
                middleInitial: "",
                jobTitle: {},
                department: {},
                manager: {},
                email: '',
                isActive: true,
                isManager: false,
            },
            action: {
                type: 'update',
                field: 'lastName',
                value: 'Smith'
            },
            response: {
                firstName: "John",
                lastName: "Smith",
                middleInitial: "",
                jobTitle: {},
                department: {},
                manager: {},
                email: '',
                isActive: true,
                isManager: false,
            }
        },
        {
            state: {
                firstName: "John",
                lastName: "Smith",
                middleInitial: "",
                jobTitle: {},
                department: {},
                manager: {},
                email: '',
                isActive: true,
                isManager: false,
            },
            
            action: {
                type: 'update',
                field: 'middleInitial',
                value: 'A'
            },
            response: {
                firstName: "John",
                lastName: "Smith",
                middleInitial: "A",
                jobTitle: {},
                department: {},
                manager: {},
                email: '',
                isActive: true,
                isManager: false,
            }
        },
        {
            state: {
                firstName: "John",
                lastName: "Smith",
                middleInitial: "J",
                jobTitle: {},
                department: {},
                manager: {},
                email: '',
                isActive: true,
                isManager: false,
            },
            action: {
                type: 'update',
                field: 'email',
                value: 'john@johnnyjohn.john'
            },
            response: {
                firstName: "John",
                lastName: "Smith",
                middleInitial: "J",
                jobTitle: {},
                department: {},
                manager: {},
                email: 'john@johnnyjohn.john',
                isActive: true,
                isManager: false,
            }
        },
        {
            state: {
                firstName: "John",
                lastName: "Smith",
                middleInitial: "A",
                jobTitle: {},
                department: {},
                manager: {},
                email: '',
                isActive: true,
                isManager: false,
            },
            action: {
                type: 'update',
                field: 'jobTitle',
                value: {
                    id: 1,
                    name: "Developer I"
                }
            },
            response: {
                firstName: "John",
                lastName: "Smith",
                middleInitial: "A",
                jobTitle: {
                    id: 1,
                    name: "Developer I"
                },
                department: {},
                manager: {},
                email: '',
                isActive: true,
                isManager: false,
            }
        },
        {
            state: {
                firstName: "John",
                lastName: "Smith",
                middleInitial: "A",
                jobTitle: {
                    id: 1,
                    name: "Developer I"
                },
                department: {},
                manager: {},
                email: '',
                isActive: true,
                isManager: false,
            },
            action: {
                type: 'update',
                field: 'department',
                value: {
                    id: 100,
                    name: "Delivery"
                }
            },
            response: {
                firstName: "John",
                lastName: "Smith",
                middleInitial: "A",
                jobTitle: {
                    id: 1,
                    name: "Developer I"
                },
                department: {
                    id: 100,
                    name: "Delivery"
                },
                manager: {},
                email: '',
                isActive: true,
                isManager: false,
            }
        },
        {
            state: {
                firstName: "John",
                lastName: "Smith",
                middleInitial: "A",
                jobTitle: {
                    id: 1,
                    name: "Developer I"
                },
                department: {
                    id: 100,
                    name: "Delivery"
                },
                manager: {},
                email: '',
                isActive: true,
                isManager: false,
            },
            action: {
                type: 'update',
                field: 'manager',
                value: {
                    id: 1000,
                    firstName: "Mike",
                    lastName: "Jones",
                    middleInitial: "B"
                }
            },
            response: {
                firstName: "John",
                lastName: "Smith",
                middleInitial: "A",
                jobTitle: {
                    id: 1,
                    name: "Developer I"
                },
                department: {
                    id: 100,
                    name: "Delivery"
                },
                manager: {
                    id: 1000,
                    firstName: "Mike",
                    lastName: "Jones",
                    middleInitial: "B"
                },
                email: '',
                isActive: true,
                isManager: false,
            }
        },
        {
            state: {
                firstName: "John",
                lastName: "Smith",
                middleInitial: "A",
                jobTitle: {
                    id: 1,
                    name: "Developer I"
                },
                department: {
                    id: 100,
                    name: "Delivery"
                },
                manager: {},
                email: '',
                isActive: true,
                isManager: false,
            },
            action: {
                type: 'fake',
                field: 'name',
                value: 'John'
            },
            response: {
                firstName: "John",
                lastName: "Smith",
                middleInitial: "A",
                jobTitle: {
                    id: 1,
                    name: "Developer I"
                },
                department: {
                    id: 100,
                    name: "Delivery"
                },
                manager: {},
                email: '',
                isActive: true,
                isManager: false,
            }
        },
    ].forEach(testCase => {
        it(`returns the expected response for action type: ${testCase.action.type} ${testCase.action.field ? `and field: ${testCase.action.field}` : ''}`, () => {
            expect(employeeReducer(testCase.state, testCase.action as ReducerActions)).toEqual(testCase.response);
        })
    })
})