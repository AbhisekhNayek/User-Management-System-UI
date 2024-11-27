import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./slices/userSlice";
import roleReducer from "./slices/rolesSlice";

const userPersistConfig = {
  key: "users", 
  storage,      
};

const rolePersistConfig = {
  key: "roles", 
  storage,      
};

const persistedUserReducer = persistReducer(userPersistConfig, userReducer);
const persistedRoleReducer = persistReducer(rolePersistConfig, roleReducer);

const store = configureStore({
  reducer: {
    users: persistedUserReducer,
    roles: persistedRoleReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export default store;
