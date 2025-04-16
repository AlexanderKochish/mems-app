import axios from "axios";

import { MemType } from "@/types";

const BASE_URL = import.meta.env.VITE_BASE_API;
const api = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});

export const getAllMemes = async (search: string): Promise<MemType[]> => {
  const { data } = await api.get<MemType[]>(`/memes?search=${search}`);

  return data || [];
};

export const getOneMemById = async (id: string): Promise<MemType> => {
  const { data } = await api.get<MemType>(`/memes/${id}`);

  return data || {};
};
