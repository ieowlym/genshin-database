import {
  Box,
  Button,
  FormControl,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase-config";

import styled from "@emotion/styled";
import { getInputState } from "../utils/formUtils";
import { required } from "../utils/validators";

// Снизу функция че то ломает меню
// onAuthStateChanged(auth,(currentUser)=>{
//     setUser(currentUser)
// })

const onSubmit = (data, toDo) => {
  if (toDo.target.name === "register") {
    registerUser(data);
  } else if (toDo.target.name === "login") {
    loginUser(data);
  }
};

const registerUser = async (data) => {
  try {
    const user = await createUserWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );
    console.log(user);
  } catch (error) {
    console.log(error.message);
  }
};
const loginUser = async (data) => {
  const user = await signInWithEmailAndPassword(
    auth,
    data.email,
    data.password
  );
  console.log(user);
};

const style = {
  boxShadow: 24,
  p: 4,
  width: {
    xs: "90%",
    sm: 400,
  },
};

const StyledBox = styled(Box)`
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 8px;
`;

export const LoginModal = ({ ...props }) => {
  const { register, handleSubmit, formState } = useForm();

  return (
    <Modal
      {...props}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <StyledBox sx={style}>
        <form style={{ display: "flex", flexDirection: "column" }}>
          <Typography
            variant="h5"
            noWrap
            sx={{
              fontWeight: 700,
              color: "black",
              textDecoration: "none",
              mb: 2,
            }}
          >
            Authorization
          </Typography>

          <FormControl sx={{ width: "100%", mb: 2 }}>
            <TextField
              label="E-mail"
              variant="outlined"
              type="email"
              {...register("email", {
                required: true,
                maxLength: 20,
              })}
              {...getInputState(formState, "email")}
            />
          </FormControl>
          <FormControl sx={{ width: "100%", mb: 2 }}>
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              {...register("password", {
                required: true,
              })}
              {...getInputState(formState, "password")}
            />
          </FormControl>

          <Box>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleSubmit(onSubmit)}
              sx={{
                mr: 1,
              }}
            >
              Login
            </Button>

            <Button
              variant="contained"
              color="success"
              onClick={handleSubmit(onSubmit)}
            >
              Register
            </Button>
          </Box>
        </form>
      </StyledBox>
    </Modal>
  );
};
