import { createReducer } from "@reduxjs/toolkit";
import {
  getBanner,
  getBannerById,
  getBannerEN,
  getBannerENById,
  getBannerTH,
  getBannerTHById,
} from "@/features/admin/banner/actions";
import { bannerState } from "@/models/banner.model";

const initialState: bannerState = {
  data: {
    banner_id: "",
    topic: "",
    post_date: "",
    status: "",
    file: "",
    arr: "",
    created_at: "",
  },
  dataEN: {
    banner_id: "",
    topic: "",
    post_date: "",
    status: "",
    file: "",
    arr: "",
    created_at: "",
  },
  dataTH: {
    banner_id: "",
    topic: "",
    post_date: "",
    status: "",
    file: "",
    arr: "",
    created_at: "",
  },
};

export const bannerReducer = createReducer(initialState, (builder) => {
  builder.addCase(getBanner.fulfilled, (state, action) => {
    state.data = action.payload;
  });
  builder.addCase(getBannerById.fulfilled, (state, action) => {
    state.data = action.payload;
  });
  builder.addCase(getBannerEN.fulfilled, (state, action) => {
    state.dataEN = action.payload;
  });
  builder.addCase(getBannerENById.fulfilled, (state, action) => {
    state.dataEN = action.payload;
  });
  builder.addCase(getBannerTH.fulfilled, (state, action) => {
    state.dataTH = action.payload;
  });
  builder.addCase(getBannerTHById.fulfilled, (state, action) => {
    state.dataTH = action.payload;
  });
});

export default bannerReducer;
