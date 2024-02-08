import axiosInstance from "../../utils/axios";

export const getJobs = async () => {
  const res = await axiosInstance.get("/jobs");
  return res.data;
};

export const getJob = async (id) => {
  const res = await axiosInstance.get(`/jobs/${id}`);
  return res.data;
};

export const postJob = async (jobData) => {
  const res = await axiosInstance.post("/jobs", jobData);
  return res.data;
};

export const putJob = async ({ jobId, jobData }) => {
  const res = await axiosInstance.put(`/jobs/${jobId}`, jobData);
  return res.data;
};

export const deleteJob = async (id) => {
  const res = await axiosInstance.delete(`/jobs/${id}`);
  return res.data;
};
