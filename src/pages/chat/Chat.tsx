import { Container } from "@mui/material";
import { useAppStore } from "../../store/store";
import TextArea from "./components/TextArea";
import MessageCard from "./components/MessageCard";

const Chat = () => {
  const name = useAppStore((state) => state.name);
  const messages = useAppStore((state) => state.messages);
  return (
    <Container
      sx={{ pt: 2, display: "grid", gridTemplateColumns: "1fr", gap: 2 }}
    >
      {messages.map((message, index) => {
        return (
          <MessageCard
            me={message.nameUser === name}
            key={index}
            userName={message.nameUser}
            message={message.message}
          />
        );
      })}
      {name}
      <TextArea />
    </Container>
  );
};
export default Chat;
