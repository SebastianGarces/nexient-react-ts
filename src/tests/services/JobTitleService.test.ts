import { doGet, doPost, doPut, doDelete } from "../../app/services/ApiService";
import {
    createJobTitle, deleteJobTitle,
    getArchivedJobTitles,
    getJobTitle,
    getJobTitles,
    updateJobTitle
} from "../../app/services/JobTitleService";

import {JobTitle} from "../../app/@types"

jest.mock('../../app/services/ApiService')

describe("Job Title Service", () => {
    let jobTitle: JobTitle;

    beforeEach(() => {
        jobTitle = {
            id: 1,
            name: "Principal Technologist",
            isActive: false,
        }
    });

    describe("getJobTitles", () => {
        it("calls doGet with the correct service URL", () => {
            getJobTitles();

            expect(doGet).toHaveBeenCalledWith("/titles");
        })
    })

    describe("getArchivedJobTitles", () => {
        it("calls doGet with the correct service URL", () => {
            getArchivedJobTitles();

            expect(doGet).toHaveBeenCalledWith("/titles/archives");
        })
    })

    describe("getJobTitle", () => {
        it("calls doGet with the correct service URL", () => {
            getJobTitle(1);

            expect(doGet).toHaveBeenCalledWith("/titles/1");
        })
    })

    describe("createJobTitle", () => {
        it("calls doPost with the correct service URL", () => {
            createJobTitle(jobTitle);

            expect(doPost).toHaveBeenCalledWith("/titles", jobTitle);
        })
    })

    describe("updateJobTitle", () => {
        it("calls doPut with the correct service URL", () => {
            updateJobTitle(jobTitle);

            expect(doPut).toHaveBeenCalledWith("/titles", jobTitle);
        })
    })

    describe("deleteJobTitle", () => {
        it("calls doDelete with the correct service URL", () => {
            deleteJobTitle(1);

            expect(doDelete).toHaveBeenCalledWith("/titles/1");
        })
    })
});
