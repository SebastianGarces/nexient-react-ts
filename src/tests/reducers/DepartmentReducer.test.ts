import departmentReducer from '../../app/reducers/DepartmentReducer';
import { ReducerActions } from "../../app/@types";

describe('Department Reducer', () => {
    [
        {
            state: {
                name: '',
                isActive: false,
            },
            action: {
                type: 'reset'
            },
            response: {
                name: "",
                isActive: true,
            }
        },
        {
            state: {
                name: "Marketing",
                isActive: false,
            },
            action: {
                type: 'reset'
            },
            response: {
                name: "",
                isActive: true,
            }
        },
        {
            state: {
                name: "",
                isActive: true
            },
            action: {
                type: 'update',
                field: 'name',
                value: 'Delivery'
            },
            response: {
                name: "Delivery",
                isActive: true,
            }
        },
        {
            state: {
                name: "Marketing",
                isActive: true
            },
            action: {
                type: 'update',
                field: 'name',
                value: 'Delivery'
            },
            response: {
                name: "Delivery",
                isActive: true,
            }
        },
        {
            state: {
                name: "Marketing",
                isActive: true
            },
            action: {
                type: 'fake',
                field: 'name',
                value: 'Delivery'
            },
            response: {
                name: "Marketing",
                isActive: true
            }
        },
    ].forEach(testCase => {
        it(`returns the expected response for action type: ${testCase.action.type}`, () => {
            expect(departmentReducer(testCase.state, testCase.action as ReducerActions)).toEqual(testCase.response);
        })
    })
})