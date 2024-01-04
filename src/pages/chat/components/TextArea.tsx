import { TextField, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useAppStore } from "../../../store/store";
import { useDebounceTextField } from "../../../hooks/useDebounceTextField";
import { ChangeEventHandler } from "react";
import { socket } from "../../../socket";

const TextArea = () => {
  const message = useAppStore((state) => state.message);
  const nameUser = useAppStore((state) => state.name);
  const { handleChange } = useDebounceTextField(500);

  const handleSubmit: ChangeEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const form = Object.fromEntries(new FormData(e.target));
    console.log(form);
    socket.emit("message", { ...form, nameUser });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="write something..."
          multiline
          size="medium"
          name="message"
          defaultValue={message}
          onChange={handleChange}
        />
        <IconButton type="submit">
          <SendIcon color="primary" />
        </IconButton>
      </form>
    </>
  );
};
export default TextArea;
