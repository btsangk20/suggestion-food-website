import { RootState } from '@/redux/store';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

// Define a type for the slice state
interface AdminState {
  isLoggedInAdmin: boolean;
  adminInfo?: AdminInfoType;
}

// Define the initial state using that type
const initialState: AdminState = {
  isLoggedInAdmin: false
};

export const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    loginForAdmin: (state, action: PayloadAction<AdminInfoType>) => {
      state.isLoggedInAdmin = true;
      state.adminInfo = action.payload;
    }
  }
});

export const { loginForAdmin } = adminSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectIsLoggedInAdmin = (state: RootState) => state.admin.isLoggedInAdmin;

export default adminSlice.reducer;
