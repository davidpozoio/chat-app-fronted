import { Card, CardContent, Typography } from "@mui/material";

interface MessageCardProps {
  userName: string;
  message: string;
  me: boolean;
}

const MessageCard = ({ userName, message, me }: MessageCardProps) => {
  if (me) {
    return (
      <Card
        sx={{
          width: "45%",
          justifySelf: "end",
          textAlign: "end",
          backgroundColor: "#b7ff65",
        }}
      >
        <CardContent>
          <Typography variant="h6">{userName}</Typography>
          <Typography variant="body2">{message}</Typography>
        </CardContent>
      </Card>
    );
  }
  return (
    <Card
      sx={{
        width: "45%",
      }}
      variant="elevation"
    >
      <CardContent>
        <Typography variant="h6">{userName}</Typography>
        <Typography variant="body2">{message}</Typography>
      </CardContent>
    </Card>
  );
};
export default MessageCard;
