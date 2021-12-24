import { doDelete, doGet, doPost, doPut } from "./ApiService";
import { JobTitle, BaseJobTitle } from "../@types";

const serviceUrl = "/titles";

export const getJobTitles = async (): Promise<JobTitle[]> => {
  return await doGet<JobTitle[]>(serviceUrl);
};

export const getArchivedJobTitles = async (): Promise<JobTitle[]> => {
  return await doGet<JobTitle[]>(`${serviceUrl}/archives`);
};

export const getJobTitle = async (jobTitleId: number): Promise<JobTitle> => {
  return await doGet<JobTitle>(`${serviceUrl}/${jobTitleId}`);
};

export const createJobTitle = async (jobTitle: BaseJobTitle): Promise<BaseJobTitle> => {
  return await doPost<BaseJobTitle>(serviceUrl, jobTitle);
};

export const updateJobTitle = async (jobTitle: JobTitle): Promise<JobTitle> => {
  return await doPut<JobTitle>(`${serviceUrl}`, jobTitle);
};

export const deleteJobTitle = async (jobTitleId: number): Promise<JobTitle> => {
  return await doDelete<JobTitle>(`${serviceUrl}/${jobTitleId}`);
};
