import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  roles: [],
};

const rolesSlice = createSlice({
  name: "roles",
  initialState,
  reducers: {
    addRole: (state, action) => {
      state.roles.push(action.payload);
    },
    deleteRole: (state, action) => {
      state.roles = state.roles.filter((role) => role.id !== action.payload);
    },
    editRole: (state, action) => {
      const { id, updatedRole } = action.payload;
      const index = state.roles.findIndex((role) => role.id === id);
      if (index !== -1) {
        state.roles[index] = { ...state.roles[index], ...updatedRole };
      }
    },
  },
});

export const { addRole, deleteRole, editRole } = rolesSlice.actions;

export default rolesSlice.reducer;
