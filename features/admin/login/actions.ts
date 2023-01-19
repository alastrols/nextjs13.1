import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setCookie, getCookie, deleteCookie } from "cookies-next";
import Router from "next/router";

export const login = createAsyncThunk(
  "auth/login",
  async (data: FormData): Promise<any> => {
    const url = process.env.NEXT_PUBLIC_BASE_URL_API;
    const response = await axios.post(`${url}/login`, data);
    const token = response.data.data.token;
    if (token != "") {
      setCookie("access-token", token, { maxAge: 60 * 60 * 24 });
    }
    return response.data.data;
  }
);

export const getSession = createAsyncThunk("auth/session", async () => {
  const url = process.env.NEXT_PUBLIC_BASE_URL_API;

  const response = await axios.get(`${url}/profile`, {
    headers: { "access-token": `Bearer ${getCookie("access-token")}` },
  });
  return response.data;
});

export const logout = createAsyncThunk("auth/logout", async () => {
  deleteCookie("access-token");
  location.href = "/admin/login";
});
