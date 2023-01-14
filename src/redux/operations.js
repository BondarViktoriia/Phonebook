import axios from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit";

// import { fetchingError,fetchingInProgress,fetchingSuccess } from './contactsSlice';

axios.defaults.baseURL = 'https://63c154277165626718786e76.mockapi.io';


export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
      console.log('response :>> ', response);
      return response.data;

    } catch (error) {

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk("contacts/addContact",
  async ({name,number}, thunkAPI) => {
    try {
      const response = await axios.post("/contacts",  {name,number} )
      console.log('addcontact',response.data)
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)



export const deleteContact = createAsyncThunk("contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
  }
})

