import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface I_User {
  name: string;
  age: number;
}

const init: I_User = {
  name: "sam",
  age: 0,
};

const users = createSlice({
  name: "user",
  initialState: init,
  reducers: {
    show: (state, action: PayloadAction<I_User>) => {
      state = action.payload;
    },
  },
});

export const { show } = users.actions;
export const selectUser = (state: RootState) => state.user;
export default users.reducer;
