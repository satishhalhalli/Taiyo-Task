import { createSlice } from "@reduxjs/toolkit";

const addContactSlice = createSlice({
  name: "app",
  initialState: {
    contacts: [],
  },
  reducers: {
    addContact: (state, action) => {
      console.log(action.payload);

      const { formData, index } = action.payload;
      console.log(formData);
      console.log(index);
      // state.contacts.push(action.payload);
      const newContact = action.payload;

      if (index) {
        state.contacts[index] = newContact;
      } else {
        state.contacts.push(newContact);
      }
    },

    updateContact: (state, action) => {
      const { formData, index } = action.payload;
      state.contacts[index] = formData;
    },

    deleteContact: (state, action) => {
      state.contacts.splice(action.payload, 1);
    },
  },
});

export const { addContact, updateContact, deleteContact } =
  addContactSlice.actions;
export default addContactSlice.reducer;
