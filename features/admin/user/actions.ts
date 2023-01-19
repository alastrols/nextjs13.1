import { FabProps } from "@mui/material";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setCookie, getCookie, deleteCookie } from "cookies-next";
import Router from "next/router";

export const getUser = createAsyncThunk(
  "user/get",
  async (keyword?: string): Promise<any> => {
    const url = process.env.NEXT_PUBLIC_BASE_URL_API;
    if (keyword) {
      const response = await axios.get(`${url}/user/get?keyword=${keyword}`, {
        headers: {
          "access-token": `Bearer ${getCookie("access-token")}`,
        },
      });
      return response.data.data;
    } else {
      const response = await axios.get(`${url}/user/select`, {
        headers: {
          "access-token": `Bearer ${getCookie("access-token")}`,
        },
      });
      return response.data.data;
    }
  }
);
export const getUserById = createAsyncThunk(
  "user/getbyid",
  async (id?: number): Promise<any> => {
    const url = process.env.NEXT_PUBLIC_BASE_URL_API;
    if (id) {
      const response = await axios.get(`${url}/user/getbyid?id=${id}`, {
        headers: {
          "access-token": `Bearer ${getCookie("access-token")}`,
        },
      });
      return response.data.data;
    }
  }
);
export const addUser = createAsyncThunk("user/add", async (data: FormData) => {
  const url = process.env.NEXT_PUBLIC_BASE_URL_API;
  const response = await axios.post(`${url}/user/add`, data, {
    headers: {
      "access-token": `Bearer ${getCookie("access-token")}`,
    },
  });
  return response;
});

export const deleteUser = createAsyncThunk("user/delete", async (id?: any) => {
  const url = process.env.NEXT_PUBLIC_BASE_URL_API;
  await axios.delete(`${url}/user/delete?id=${id}`, {
    headers: {
      "access-token": `Bearer ${getCookie("access-token")}`,
    },
  });

  return { status: "success" };
});

export const deleteAllUser = createAsyncThunk(
  "user/alldelete",
  async (id?: any) => {
    const url = process.env.NEXT_PUBLIC_BASE_URL_API;
    id.forEach(async (id: number) => {
      await axios.delete(`${url}/user/delete?id=${id}`, {
        headers: {
          "access-token": `Bearer ${getCookie("access-token")}`,
        },
      });
    });

    return { status: "success" };
  }
);

export const editUser = createAsyncThunk(
  "user/edit",
  async (data: FormData) => {
    const url = process.env.NEXT_PUBLIC_BASE_URL_API;
    const response = await axios.post(`${url}/user/edit`, data, {
      headers: {
        "access-token": `Bearer ${getCookie("access-token")}`,
      },
    });
    return response;
  }
);

export const uploadUser = createAsyncThunk(
  "user/upload",
  async (data: FormData) => {
    const url = process.env.NEXT_PUBLIC_BASE_URL_API;
    const response = await axios.post(`${url}/user/upload`, data, {
      headers: {
        "access-token": `Bearer ${getCookie("access-token")}`,
      },
    });
    return response;
  }
);
