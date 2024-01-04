import { Container, Typography, TextField, Button } from "@mui/material";
import { useFormik } from "formik";
import { useAppStore } from "../../store/store";

interface UserForm {
  name: string;
}

type Optional<T> = {
  [U in keyof T]?: T[U];
};

const validation = (values: UserForm) => {
  const errors: Optional<UserForm> = {};
  if (!values.name) {
    errors.name = "name is required";
  }
  return errors;
};

const User = () => {
  const setName = useAppStore((state) => state.setName);
  const userForm = useFormik({
    initialValues: {
      name: "",
    },
    validate: validation,
    onSubmit: (values) => {
      console.log(values);
      setName(values.name);
    },
  });

  return (
    <Container>
      <Typography variant="h2" textAlign="center">
        User name
      </Typography>
      <form action="" onSubmit={userForm.handleSubmit}>
        <TextField
          error={Boolean(userForm.touched && userForm.errors.name)}
          helperText={userForm.errors.name}
          label="name"
          variant="outlined"
          component="a"
          name="name"
          value={userForm.values.name}
          onChange={userForm.handleChange}
          onFocus={userForm.handleBlur}
          required
        />
        <Button variant="contained" type="submit">
          Change name
        </Button>
      </form>
    </Container>
  );
};
export default User;
