import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { getHomes } from '../slices/mainSlice'

export const getHomeAction = createAsyncThunk(
  'getHomeAction',
  async (param,{ dispatch }) => {
    const response = await axios.get(
      'https://fakestoreapi.com/products/'
    )
    const data = await response.data
    dispatch(getHomes(data))
  }
)
