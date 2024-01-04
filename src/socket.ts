import { connect } from "socket.io-client";

export const socket = connect(import.meta.env.PATH || "http://localhost:8000", {
  forceNew: true,
});
