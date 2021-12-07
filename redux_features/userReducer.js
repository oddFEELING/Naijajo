import { createSlice } from '@reduxjs/toolkit';
import { getDomainLocale } from 'next/dist/shared/lib/router/router';

let noUser = {
  id: null,
  firstname: null,
  email: null,
  iat: null,
};

// set slice
export const userSlice = createSlice({
  name: 'User',
  initialState: { value: noUser },
  reducers: {
    setuser: (state, action) => {
      state.value = action.payload;
    },
    logout: (state) => {
      state.value = noUser;
    },
  },
});
export const { setuser } = userSlice.actions;

export default userSlice.reducer;
