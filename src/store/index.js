import { configureStore } from "@reduxjs/toolkit";
import { charactersReducer } from "./slice/characters";

const store = configureStore({
  reducer: {
    characters: charactersReducer,
  },
});

export default store;
