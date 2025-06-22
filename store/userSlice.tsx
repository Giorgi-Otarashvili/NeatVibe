import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserInfo {
  username?: string;
  password?: string;
  [key: string]: any;
}

interface RegistrationData {
  gender?: string;
  name?: string;
  lastName?: string;
  nationality?: string;
  type?: string;
  username?: string;
  instagram?: string;
  email?: string;
  phone?: string;
  password?: string;
}

interface UserState {
  isLoggedIn: boolean;
  userInfo: UserInfo | null;
  registrationData: RegistrationData | null;
}

const initialState: UserState = {
  isLoggedIn: false,
  userInfo: null,
  registrationData: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserInfo>) => {
      state.isLoggedIn = true;
      state.userInfo = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.userInfo = null;
      state.registrationData = null;
    },
    setRegistrationData: (state, action: PayloadAction<RegistrationData>) => {
      state.registrationData = action.payload;
    },
    updateRegistrationData: (state, action: PayloadAction<RegistrationData>) => {
      state.registrationData = {
        ...state.registrationData,
        ...action.payload
      };
    },
  },
});

export const { login, logout, setRegistrationData, updateRegistrationData } = userSlice.actions;
export default userSlice.reducer;