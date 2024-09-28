import { createSlice,nanoid } from "@reduxjs/toolkit";
// import { nanoid } from "nanoid";

interface User {
  id: string;
  username: string;
  handphone: string;
  password: string;
  confirmPassword: string;
}

const initialState: User[] = [
  { 
    id: nanoid(), 
    username: 'anonim', 
    handphone: '1234567890',
    password: '123',
    confirmPassword: '123',
  },
];

const usersSlice = createSlice({
  name: 'users',
  initialState: initialState,
  reducers: {

    addUser: (state, action) => {
      const { username, handphone, password, confirmPassword } = action.payload as Omit<User, 'id'>;
      state.push({ id: nanoid(), username, handphone, password, confirmPassword });
    },

    updateUser: (state, action) => {
      const { id, username, handphone, password, confirmPassword } = action.payload as User;
      const existingUser = state.find(user => user.id === id);
      if (existingUser) {
        existingUser.username = username;
        existingUser.handphone = handphone;
        existingUser.password = password;
        existingUser.confirmPassword = confirmPassword;
      }
    },
  }
});

export const { addUser, updateUser } = usersSlice.actions;
export default usersSlice.reducer;
