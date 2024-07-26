import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  extensionNumber: string
  passCode: string
}

interface ExampleState {
  defaultUser: UserState
}

const initialState: ExampleState = {
  defaultUser: {
    extensionNumber: '9876',
    passCode: '1234'
  }
}

const counterSlice = createSlice({
  name: 'defaultuser',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state.defaultUser = action.payload
    }
  }
});

export const { setUser } = counterSlice.actions;
export default counterSlice.reducer;