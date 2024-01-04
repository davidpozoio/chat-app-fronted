import { connect } from "socket.io-client";

export const socket = connect("https://chat-backend-app-igjn.onrender.com", {
  forceNew: true,
});
