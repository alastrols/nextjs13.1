import { FabProps } from "@mui/material";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setCookie, getCookie, deleteCookie } from "cookies-next";
import Router from "next/router";

// News JP
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
// News JP

// News EN
export const getNewsEN = createAsyncThunk(
  "news/en/get",
  async (keyword?: string): Promise<any> => {
    const url = process.env.NEXT_PUBLIC_BASE_URL_API;
    if (keyword) {
      const response = await axios.get(
        `${url}/news/en/get?keyword=${keyword}`,
        {
          headers: {
            "access-token": `Bearer ${getCookie("access-token")}`,
          },
        }
      );
      return response.data.data;
    } else {
      const response = await axios.get(`${url}/news/en/select`, {
        headers: {
          "access-token": `Bearer ${getCookie("access-token")}`,
        },
      });
      return response.data.data;
    }
  }
);
export const getNewsENById = createAsyncThunk(
  "news/en/getbyid",
  async (id?: number): Promise<any> => {
    const url = process.env.NEXT_PUBLIC_BASE_URL_API;
    if (id) {
      const response = await axios.get(`${url}/news/en/getbyid?id=${id}`, {
        headers: {
          "access-token": `Bearer ${getCookie("access-token")}`,
        },
      });
      return response.data.data;
    }
  }
);
export const addNewsEN = createAsyncThunk(
  "news/en/add",
  async (data: FormData) => {
    const url = process.env.NEXT_PUBLIC_BASE_URL_API;
    const response = await axios.post(`${url}/news/en/add`, data, {
      headers: {
        "access-token": `Bearer ${getCookie("access-token")}`,
      },
    });
    return response;
  }
);

export const deleteNewsEN = createAsyncThunk(
  "news/en/delete",
  async (id?: any) => {
    const url = process.env.NEXT_PUBLIC_BASE_URL_API;
    await axios.delete(`${url}/news/en/delete?id=${id}`, {
      headers: {
        "access-token": `Bearer ${getCookie("access-token")}`,
      },
    });

    return { status: "success" };
  }
);

export const deleteAllNewsEN = createAsyncThunk(
  "news/en/alldelete",
  async (id?: any) => {
    const url = process.env.NEXT_PUBLIC_BASE_URL_API;
    id.forEach(async (id: number) => {
      await axios.delete(`${url}/news/en/delete?id=${id}`, {
        headers: {
          "access-token": `Bearer ${getCookie("access-token")}`,
        },
      });
    });

    return { status: "success" };
  }
);

export const editNewsEN = createAsyncThunk(
  "news/en/edit",
  async (data: FormData) => {
    const url = process.env.NEXT_PUBLIC_BASE_URL_API;
    const response = await axios.post(`${url}/news/en/edit`, data, {
      headers: {
        "access-token": `Bearer ${getCookie("access-token")}`,
      },
    });
    return response;
  }
);
// News EN

// News TH
export const getNewsTH = createAsyncThunk(
  "news/th/get",
  async (keyword?: string): Promise<any> => {
    const url = process.env.NEXT_PUBLIC_BASE_URL_API;
    if (keyword) {
      const response = await axios.get(
        `${url}/news/th/get?keyword=${keyword}`,
        {
          headers: {
            "access-token": `Bearer ${getCookie("access-token")}`,
          },
        }
      );
      return response.data.data;
    } else {
      const response = await axios.get(`${url}/news/th/select`, {
        headers: {
          "access-token": `Bearer ${getCookie("access-token")}`,
        },
      });
      return response.data.data;
    }
  }
);
export const getNewsTHById = createAsyncThunk(
  "news/th/getbyid",
  async (id?: number): Promise<any> => {
    const url = process.env.NEXT_PUBLIC_BASE_URL_API;
    if (id) {
      const response = await axios.get(`${url}/news/th/getbyid?id=${id}`, {
        headers: {
          "access-token": `Bearer ${getCookie("access-token")}`,
        },
      });
      return response.data.data;
    }
  }
);
export const addNewsTH = createAsyncThunk(
  "news/th/add",
  async (data: FormData) => {
    const url = process.env.NEXT_PUBLIC_BASE_URL_API;
    const response = await axios.post(`${url}/news/th/add`, data, {
      headers: {
        "access-token": `Bearer ${getCookie("access-token")}`,
      },
    });
    return response;
  }
);

export const deleteNewsTH = createAsyncThunk(
  "news/th/delete",
  async (id?: any) => {
    const url = process.env.NEXT_PUBLIC_BASE_URL_API;
    await axios.delete(`${url}/news/th/delete?id=${id}`, {
      headers: {
        "access-token": `Bearer ${getCookie("access-token")}`,
      },
    });

    return { status: "success" };
  }
);

export const deleteAllNewsTH = createAsyncThunk(
  "news/th/alldelete",
  async (id?: any) => {
    const url = process.env.NEXT_PUBLIC_BASE_URL_API;
    id.forEach(async (id: number) => {
      await axios.delete(`${url}/news/th/delete?id=${id}`, {
        headers: {
          "access-token": `Bearer ${getCookie("access-token")}`,
        },
      });
    });

    return { status: "success" };
  }
);

export const editNewsTH = createAsyncThunk(
  "news/th/edit",
  async (data: FormData) => {
    const url = process.env.NEXT_PUBLIC_BASE_URL_API;
    const response = await axios.post(`${url}/news/th/edit`, data, {
      headers: {
        "access-token": `Bearer ${getCookie("access-token")}`,
      },
    });
    return response;
  }
);
// News TH
