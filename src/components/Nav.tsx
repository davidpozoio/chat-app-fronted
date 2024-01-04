import { Tab, Tabs } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Nav = () => {
  const location = useLocation();
  const [value, setValue] = useState(location.pathname.replace("/", () => ""));
  const navigate = useNavigate();

  useEffect(() => {
    navigate(`${value}`);
  }, [value]);

  return (
    <Tabs
      value={value}
      onChange={(e, newValue) => {
        console.log(e);
        setValue(newValue);
      }}
    >
      <Tab label="user" value="user" />
      <Tab label="chat" value="chat" />
    </Tabs>
  );
};
export default Nav;
