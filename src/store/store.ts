import { create } from "zustand";

interface User {
  name: string;
  message: string;
  setName: (newName: string) => void;
  setMessage: (newMessage: string) => void;
}

export interface Message {
  message: string;
  nameUser: string;
}

interface Chat {
  messages: Message[];
  addMessage: (message: Message) => void;
}

export const useAppStore = create<User & Chat>((set, get) => ({
  name: "me",
  message: "",
  setName: (newName) => {
    set({ name: newName });
  },
  setMessage: (newMessage) => {
    set({ message: newMessage });
  },
  messages: [],
  addMessage: (message) => {
    set({ messages: [...get().messages, message] });
  },
}));
