import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  id: number;
  name: string;
  number: string;
  profilePic: string;
}

interface UserState {
  users: User[];
}

// Define the profiles array before using it in the initialState
const profiles: User[] = [
  {
    id: 1,
    name: "Alice",
    number: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    id: 2,
    name: "Bob",
    number: "234567",
    profilePic: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    id: 3,
    name: "Carol",
    number: "345678",
    profilePic: "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    id: 4,
    name: "David",
    number: "456789",
    profilePic: "https://randomuser.me/api/portraits/men/2.jpg"
  },
  {
    id: 5,
    name: "Eve",
    number: "567890",
    profilePic: "https://randomuser.me/api/portraits/women/3.jpg"
  },
  {
    id: 6,
    name: "Frank",
    number: "678901",
    profilePic: "https://randomuser.me/api/portraits/men/3.jpg"
  },
  {
    id: 7,
    name: "Grace",
    number: "789012",
    profilePic: "https://randomuser.me/api/portraits/women/4.jpg"
  },
  {
    id: 8,
    name: "Hank",
    number: "890123",
    profilePic: "https://randomuser.me/api/portraits/men/4.jpg"
  },
  {
    id: 9,
    name: "Ivy",
    number: "901234",
    profilePic: "https://randomuser.me/api/portraits/women/5.jpg"
  },
  {
    id: 10,
    name: "Jack",
    number: "012345",
    profilePic: "https://randomuser.me/api/portraits/men/5.jpg"
  },
  {
    id: 11,
    name: "Katie",
    number: "234561",
    profilePic: "https://randomuser.me/api/portraits/women/6.jpg"
  },
  {
    id: 12,
    name: "Leo",
    number: "345672",
    profilePic: "https://randomuser.me/api/portraits/men/6.jpg"
  },
  {
    id: 13,
    name: "Mia",
    number: "456783",
    profilePic: "https://randomuser.me/api/portraits/women/7.jpg"
  },
  {
    id: 14,
    name: "Nate",
    number: "567894",
    profilePic: "https://randomuser.me/api/portraits/men/7.jpg"
  },
  {
    id: 15,
    name: "Olivia",
    number: "678905",
    profilePic: "https://randomuser.me/api/portraits/women/8.jpg"
  },
  {
    id: 16,
    name: "Paul",
    number: "789016",
    profilePic: "https://randomuser.me/api/portraits/men/8.jpg"
  },
  {
    id: 17,
    name: "Quinn",
    number: "890127",
    profilePic: "https://randomuser.me/api/portraits/women/9.jpg"
  },
  {
    id: 18,
    name: "Ryan",
    number: "901238",
    profilePic: "https://randomuser.me/api/portraits/men/9.jpg"
  },
  {
    id: 19,
    name: "Sophie",
    number: "012349",
    profilePic: "https://randomuser.me/api/portraits/women/10.jpg"
  },
  {
    id: 20,
    name: "Tom",
    number: "123450",
    profilePic: "https://randomuser.me/api/portraits/men/10.jpg"
  }
];

const initialState: UserState = {
  users: profiles,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
    },
    removeUser: (state, action: PayloadAction<number>) => {
      state.users = state.users.filter(user => user.id !== action.payload);
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;