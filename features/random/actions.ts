import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { setCookie } from 'cookies-next';

export const getKanyeQuote = createAsyncThunk('kanye/kanyeQuote', async () => {
  const response = await axios.get('https://api.kanye.rest/');
  return response.data;
});
