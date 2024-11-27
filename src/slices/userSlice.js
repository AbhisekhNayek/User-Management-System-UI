import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    updateUserStatus: (state, action) => {
      const { id, status } = action.payload;
      const user = state.users.find(user => user.id === id);
      if (user) user.status = status;
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter(user => user.id !== action.payload);
    },
  },
});

export const { addUser, updateUserStatus, deleteUser } = userSlice.actions;
export default userSlice.reducer;
