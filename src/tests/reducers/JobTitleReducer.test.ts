import jobTitleReducer from '../../app/reducers/JobTitleReducer';
import { ReducerActions } from "../../app/@types";

describe('Job Title Reducer', () => {
    [
        {
            state: {
                name: "Developer I",
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
                name: "Developer I",
                isActive: true
            },
            action: {
                type: 'update',
                field: 'name',
                value: 'Delivery Manager'
            },
            response: {
                name: "Delivery Manager",
                isActive: true,
            }
        },
        {
            state: {
                name: "Developer I",
                isActive: true,
            },
            action: {
                type: 'fake',
                field: 'name',
                value: 'Delivery Manager'
            },
            response: {
                name: "Developer I",
                isActive: true,
            }
        },
    ].forEach(testCase => {
        it(`returns the expected response for action type: ${testCase.action.type}`, () => {
            expect(jobTitleReducer(testCase.state, testCase.action as ReducerActions)).toEqual(testCase.response);
        })
    })
})