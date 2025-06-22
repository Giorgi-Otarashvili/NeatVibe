import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import registrationReducer from './registrationsSlice';

const persistConfig = {
  key: 'registration',
  storage: AsyncStorage,
  whitelist: ['registration']
};

const persistedRegistrationReducer = persistReducer(persistConfig, registrationReducer);

export const store = configureStore({
  reducer: {
    registration: persistedRegistrationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;