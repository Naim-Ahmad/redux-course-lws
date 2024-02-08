import axiosInstance from "../../../config/axios";

export const getTransaction = async () => {
  const res = await axiosInstance.get("/transactions");
  return res.data;
};

export const postTransaction = async (data) => {
  const res = await axiosInstance.post("/transactions", data);
  return res.data;
};

export const editTransaction = async ({ id, data }) => {
  const res = await axiosInstance.put(`/transactions/${id}`, data);
  return res.data;
};

export const deleteTransaction = async (id) => {
  const res = await axiosInstance.delete(`/transactions/${id}`);
  return res.data;
};
