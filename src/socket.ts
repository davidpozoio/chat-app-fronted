import { connect } from "socket.io-client";

export const socket = connect("http://localhost:8000", {
  forceNew: true,
});
