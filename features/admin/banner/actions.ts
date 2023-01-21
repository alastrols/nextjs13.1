import { FabProps } from "@mui/material";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setCookie, getCookie, deleteCookie } from "cookies-next";
import Router from "next/router";

// Banner JP
export const getBanner = createAsyncThunk(
  "banner/get",
  async (keyword?: string): Promise<any> => {
    const url = process.env.NEXT_PUBLIC_BASE_URL_API;
    if (keyword) {
      const response = await axios.get(`${url}/banner/get?keyword=${keyword}`, {
        headers: {
          "access-token": `Bearer ${getCookie("access-token")}`,
        },
      });
      return response.data.data;
    } else {
      const response = await axios.get(`${url}/banner/select`, {
        headers: {
          "access-token": `Bearer ${getCookie("access-token")}`,
        },
      });
      return response.data.data;
    }
  }
);
export const getBannerById = createAsyncThunk(
  "banner/getbyid",
  async (id?: number): Promise<any> => {
    const url = process.env.NEXT_PUBLIC_BASE_URL_API;
    if (id) {
      const response = await axios.get(`${url}/banner/getbyid?id=${id}`, {
        headers: {
          "access-token": `Bearer ${getCookie("access-token")}`,
        },
      });
      return response.data.data;
    }
  }
);
export const addBanner = createAsyncThunk(
  "banner/add",
  async (data: FormData) => {
    const url = process.env.NEXT_PUBLIC_BASE_URL_API;
    const response = await axios.post(`${url}/banner/add`, data, {
      headers: {
        "access-token": `Bearer ${getCookie("access-token")}`,
      },
    });
    return response;
  }
);

export const deleteBanner = createAsyncThunk(
  "banner/delete",
  async (id?: any) => {
    const url = process.env.NEXT_PUBLIC_BASE_URL_API;
    await axios.delete(`${url}/banner/delete?id=${id}`, {
      headers: {
        "access-token": `Bearer ${getCookie("access-token")}`,
      },
    });

    return { status: "success" };
  }
);

export const deleteAllBanner = createAsyncThunk(
  "banner/alldelete",
  async (id?: any) => {
    const url = process.env.NEXT_PUBLIC_BASE_URL_API;
    id.forEach(async (id: number) => {
      await axios.delete(`${url}/banner/delete?id=${id}`, {
        headers: {
          "access-token": `Bearer ${getCookie("access-token")}`,
        },
      });
    });

    return { status: "success" };
  }
);

export const editBanner = createAsyncThunk(
  "banner/edit",
  async (data: FormData) => {
    const url = process.env.NEXT_PUBLIC_BASE_URL_API;
    const response = await axios.post(`${url}/banner/edit`, data, {
      headers: {
        "access-token": `Bearer ${getCookie("access-token")}`,
      },
    });
    return response;
  }
);

export const sortableBanner = createAsyncThunk(
  "banner/sortable",
  async (data: any) => {
    const url = process.env.NEXT_PUBLIC_BASE_URL_API;
    const response = await axios.post(`${url}/banner/sortable`, data, {
      headers: {
        "access-token": `Bearer ${getCookie("access-token")}`,
      },
    });
    return response;
  }
);

// Banner JP

// Banner EN
export const getBannerEN = createAsyncThunk(
  "banner/en/get",
  async (keyword?: string): Promise<any> => {
    const url = process.env.NEXT_PUBLIC_BASE_URL_API;
    if (keyword) {
      const response = await axios.get(
        `${url}/banner/en/get?keyword=${keyword}`,
        {
          headers: {
            "access-token": `Bearer ${getCookie("access-token")}`,
          },
        }
      );
      return response.data.data;
    } else {
      const response = await axios.get(`${url}/banner/en/select`, {
        headers: {
          "access-token": `Bearer ${getCookie("access-token")}`,
        },
      });

      return response.data.data;
    }
  }
);
export const getBannerENById = createAsyncThunk(
  "banner/en/getbyid",
  async (id?: number): Promise<any> => {
    const url = process.env.NEXT_PUBLIC_BASE_URL_API;
    if (id) {
      const response = await axios.get(`${url}/banner/en/getbyid?id=${id}`, {
        headers: {
          "access-token": `Bearer ${getCookie("access-token")}`,
        },
      });
      return response.data.data;
    }
  }
);
export const addBannerEN = createAsyncThunk(
  "banner/en/add",
  async (data: FormData) => {
    const url = process.env.NEXT_PUBLIC_BASE_URL_API;
    const response = await axios.post(`${url}/banner/en/add`, data, {
      headers: {
        "access-token": `Bearer ${getCookie("access-token")}`,
      },
    });
    return response;
  }
);

export const deleteBannerEN = createAsyncThunk(
  "banner/en/delete",
  async (id?: any) => {
    const url = process.env.NEXT_PUBLIC_BASE_URL_API;
    await axios.delete(`${url}/banner/en/delete?id=${id}`, {
      headers: {
        "access-token": `Bearer ${getCookie("access-token")}`,
      },
    });

    return { status: "success" };
  }
);

export const deleteAllBannerEN = createAsyncThunk(
  "banner/en/alldelete",
  async (id?: any) => {
    const url = process.env.NEXT_PUBLIC_BASE_URL_API;
    id.forEach(async (id: number) => {
      await axios.delete(`${url}/banner/en/delete?id=${id}`, {
        headers: {
          "access-token": `Bearer ${getCookie("access-token")}`,
        },
      });
    });

    return { status: "success" };
  }
);

export const editBannerEN = createAsyncThunk(
  "banner/en/edit",
  async (data: FormData) => {
    const url = process.env.NEXT_PUBLIC_BASE_URL_API;
    const response = await axios.post(`${url}/banner/en/edit`, data, {
      headers: {
        "access-token": `Bearer ${getCookie("access-token")}`,
      },
    });
    return response;
  }
);

export const sortableBannerEN = createAsyncThunk(
  "banner/en/sortable",
  async (data: any) => {
    const url = process.env.NEXT_PUBLIC_BASE_URL_API;
    const response = await axios.post(`${url}/banner/en/sortable`, data, {
      headers: {
        "access-token": `Bearer ${getCookie("access-token")}`,
      },
    });
    return response;
  }
);
// Banner EN

// Banner TH
export const getBannerTH = createAsyncThunk(
  "banner/th/get",
  async (keyword?: string): Promise<any> => {
    const url = process.env.NEXT_PUBLIC_BASE_URL_API;
    if (keyword) {
      const response = await axios.get(
        `${url}/banner/th/get?keyword=${keyword}`,
        {
          headers: {
            "access-token": `Bearer ${getCookie("access-token")}`,
          },
        }
      );
      return response.data.data;
    } else {
      const response = await axios.get(`${url}/banner/th/select`, {
        headers: {
          "access-token": `Bearer ${getCookie("access-token")}`,
        },
      });
      return response.data.data;
    }
  }
);
export const getBannerTHById = createAsyncThunk(
  "banner/th/getbyid",
  async (id?: number): Promise<any> => {
    const url = process.env.NEXT_PUBLIC_BASE_URL_API;
    if (id) {
      const response = await axios.get(`${url}/banner/th/getbyid?id=${id}`, {
        headers: {
          "access-token": `Bearer ${getCookie("access-token")}`,
        },
      });
      return response.data.data;
    }
  }
);
export const addBannerTH = createAsyncThunk(
  "banner/th/add",
  async (data: FormData) => {
    const url = process.env.NEXT_PUBLIC_BASE_URL_API;
    const response = await axios.post(`${url}/banner/th/add`, data, {
      headers: {
        "access-token": `Bearer ${getCookie("access-token")}`,
      },
    });
    return response;
  }
);

export const deleteBannerTH = createAsyncThunk(
  "banner/th/delete",
  async (id?: any) => {
    const url = process.env.NEXT_PUBLIC_BASE_URL_API;
    await axios.delete(`${url}/banner/th/delete?id=${id}`, {
      headers: {
        "access-token": `Bearer ${getCookie("access-token")}`,
      },
    });

    return { status: "success" };
  }
);

export const deleteAllBannerTH = createAsyncThunk(
  "banner/th/alldelete",
  async (id?: any) => {
    const url = process.env.NEXT_PUBLIC_BASE_URL_API;
    id.forEach(async (id: number) => {
      await axios.delete(`${url}/banner/th/delete?id=${id}`, {
        headers: {
          "access-token": `Bearer ${getCookie("access-token")}`,
        },
      });
    });

    return { status: "success" };
  }
);

export const editBannerTH = createAsyncThunk(
  "banner/th/edit",
  async (data: FormData) => {
    const url = process.env.NEXT_PUBLIC_BASE_URL_API;
    const response = await axios.post(`${url}/banner/th/edit`, data, {
      headers: {
        "access-token": `Bearer ${getCookie("access-token")}`,
      },
    });
    return response;
  }
);

export const sortableBannerTH = createAsyncThunk(
  "banner/en/sortable",
  async (data: any) => {
    const url = process.env.NEXT_PUBLIC_BASE_URL_API;
    const response = await axios.post(`${url}/banner/th/sortable`, data, {
      headers: {
        "access-token": `Bearer ${getCookie("access-token")}`,
      },
    });
    return response;
  }
);
// Banner TH
