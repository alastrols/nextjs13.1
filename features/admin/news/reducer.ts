import { createReducer } from "@reduxjs/toolkit";
import {
  getNews,
  getNewsById,
  getNewsEN,
  getNewsENById,
  getNewsTH,
  getNewsTHById,
} from "@/features/admin/news/actions";
import { newsState } from "@/models/news.model";

const initialState: newsState = {
  data: {
    news_id: "",
    topic: "",
    post_date: "",
    status: "",
    detail: "",
    arr: "",
    year: "",
    filename: "",
    original_name: "",
    created_at: "",
  },
  dataEN: {
    news_id: "",
    topic: "",
    post_date: "",
    status: "",
    detail: "",
    arr: "",
    year: "",
    filename: "",
    original_name: "",
    created_at: "",
  },
  dataTH: {
    news_id: "",
    topic: "",
    post_date: "",
    status: "",
    detail: "",
    arr: "",
    year: "",
    filename: "",
    original_name: "",
    created_at: "",
  },
};

export const newsReducer = createReducer(initialState, (builder) => {
  builder.addCase(getNews.fulfilled, (state, action) => {
    state.data = action.payload;
  });
  builder.addCase(getNewsById.fulfilled, (state, action) => {
    state.data = action.payload;
  });
  builder.addCase(getNewsEN.fulfilled, (state, action) => {
    state.dataEN = action.payload;
  });
  builder.addCase(getNewsENById.fulfilled, (state, action) => {
    state.dataEN = action.payload;
  });
  builder.addCase(getNewsTH.fulfilled, (state, action) => {
    state.dataTH = action.payload;
  });
  builder.addCase(getNewsTHById.fulfilled, (state, action) => {
    state.dataTH = action.payload;
  });
});

export default newsReducer;
