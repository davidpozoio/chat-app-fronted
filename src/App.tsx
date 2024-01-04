import { Routes, Route } from "react-router-dom";
import "./App.css";
import User from "./pages/user/User";
import Chat from "./pages/chat/Chat";
import Nav from "./components/Nav";
import { useEffect } from "react";
import { socket } from "./socket";
import { Message, useAppStore } from "./store/store";

function App() {
  const addMessage = useAppStore((state) => state.addMessage);

  useEffect(() => {
    socket.on("message", (data: Message) => {
      console.log(data);
      addMessage(data);
    });
  }, [addMessage]);

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/user" element={<User />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </>
  );
}

export default App;
