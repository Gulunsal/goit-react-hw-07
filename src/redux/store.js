import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contactsSlice"; // Default olarak dışa aktarımı kullanıyoruz
import filtersReducer from "./filtersSlice";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
  },
});
