
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface RegistrationState {
  gender: 'Male' | 'Female' | null;
  name: string;
  lastName: string;
  nationality: string;  
  type: string;
  username: string;
  instagram: string;
  email: string;
  phone: string;
  password: string;
}

const initialState: RegistrationState = {
  gender: null,
  name: '',
  lastName: '',
  nationality: '',
  type: '',
  username: '',
  instagram: '',
  email: '',
  phone: '',
  password: ''
};

const registrationSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    setGender: (state, action: PayloadAction<'Male' | 'Female'>) => {
      state.gender = action.payload;
    },
    setPersonalInfo: (state, action: PayloadAction<{
      name: string;
      lastName: string;
      nationality: string;
      type: string;
    }>) => {
      state.name = action.payload.name;
      state.lastName = action.payload.lastName;
      state.nationality = action.payload.nationality;
      state.type = action.payload.type;
    },
    setProfileInfo: (state, action: PayloadAction<{
      username: string;
      instagram: string;
      email: string;
      phone: string;
    }>) => {
      state.username = action.payload.username;
      state.instagram = action.payload.instagram;
      state.email = action.payload.email;
      state.phone = action.payload.phone;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    clearRegistration: () => initialState,
  },
});

export const { 
  setGender, 
  setPersonalInfo, 
  setProfileInfo, 
  setPassword, 
  clearRegistration 
} = registrationSlice.actions;

export default registrationSlice.reducer;