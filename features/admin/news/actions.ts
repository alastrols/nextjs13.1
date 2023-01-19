import { FabProps } from "@mui/material";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setCookie, getCookie, deleteCookie } from "cookies-next";
import Router from "next/router";

export const getNews = createAsyncThunk(
  "news/get",
  async (keyword?: string): Promise<any> => {
    const url = process.env.NEXT_PUBLIC_BASE_URL_API;
    if (keyword) {
      const response = await axios.get(`${url}/news/get?keyword=${keyword}`, {
        headers: {
          "access-token": `Bearer ${getCookie("access-token")}`,
        },
      });
      return response.data.data;
    } else {
      const response = await axios.get(`${url}/news/select`, {
        headers: {
          "access-token": `Bearer ${getCookie("access-token")}`,
        },
      });
      return response.data.data;
    }
  }
);
export const getNewsById = createAsyncThunk(
  "news/getbyid",
  async (id?: number): Promise<any> => {
    const url = process.env.NEXT_PUBLIC_BASE_URL_API;
    if (id) {
      const response = await axios.get(`${url}/news/getbyid?id=${id}`, {
        headers: {
          "access-token": `Bearer ${getCookie("access-token")}`,
        },
      });
      return response.data.data;
    }
  }
);
export const addNews = createAsyncThunk("news/add", async (data: FormData) => {
  const url = process.env.NEXT_PUBLIC_BASE_URL_API;
  const response = await axios.post(`${url}/news/add`, data, {
    headers: {
      "access-token": `Bearer ${getCookie("access-token")}`,
    },
  });
  return response;
});

export const deleteNews = createAsyncThunk("news/delete", async (id?: any) => {
  const url = process.env.NEXT_PUBLIC_BASE_URL_API;
  await axios.delete(`${url}/news/delete?id=${id}`, {
    headers: {
      "access-token": `Bearer ${getCookie("access-token")}`,
    },
  });

  return { status: "success" };
});

export const deleteAllNews = createAsyncThunk(
  "news/alldelete",
  async (id?: any) => {
    const url = process.env.NEXT_PUBLIC_BASE_URL_API;
    id.forEach(async (id: number) => {
      await axios.delete(`${url}/news/delete?id=${id}`, {
        headers: {
          "access-token": `Bearer ${getCookie("access-token")}`,
        },
      });
    });

    return { status: "success" };
  }
);

// export const deleteAllNews = createAsyncThunk(
//   "user/deleteall",
//   async (id: string) => {
//     await userService.deleteAllAccount(id);
//     store.dispatch(getAccount());
//   }
// );

export const editNews = createAsyncThunk(
  "news/edit",
  async (data: FormData) => {
    const url = process.env.NEXT_PUBLIC_BASE_URL_API;
    const response = await axios.post(`${url}/news/edit`, data, {
      headers: {
        "access-token": `Bearer ${getCookie("access-token")}`,
      },
    });
    return response;
  }
);
