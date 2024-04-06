import { Box, Button, TextField, Typography } from "@mui/material";
import "../../index.css";
import { useState, useEffect } from "react";
import api from "../../api/login";
import Register from "./Register";

const Login = () => {
  const [isSignedUp, setisSignedUp] = useState(false);
  const [successLogin, setsuccessLogin] = useState(false);

  const [inputs, setinputs] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setinputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setsuccessLogin(true);
  };

  const resetState = () => {
    setisSignedUp(!isSignedUp);
    setinputs({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <>
      {successLogin ? (
        <Register/>
      ) : (
        <form onSubmit={handleSubmit}>
          <Box
            display="flex"
            flexDirection={"column"}
            maxWidth={400}
            alignItems="center"
            justifyContent="center"
            margin="auto"
            marginTop={5}
            padding={3}
            borderRadius={5}
            boxShadow={"5px 5px 10px #ccc"}
            sx={{
              ":hover": {
                boxShadow: "10px 10px 20px #ccc",
              },
            }}
          >
            <Typography variant="h2" padding={3} textAlign="center">
              {isSignedUp ? "Sign Up" : "Login"}
            </Typography>
            {isSignedUp && (
              <TextField
                name="name"
                value={inputs.name}
                margin="normal"
                type="text"
                variant="outlined"
                placeholder="Name"
                onChange={handleChange}
              />
            )}

            <TextField
              value={inputs.email}
              name="email"
              margin="normal"
              onChange={handleChange}
              type="email"
              variant="outlined"
              placeholder="Email"
            ></TextField>

            <TextField
              value={inputs.password}
              name="password"
              margin="normal"
              type="password"
              variant="outlined"
              placeholder="Password"
              onChange={handleChange}
            ></TextField>
            <Button
              type="submit"
              sx={{
                marginTop: 3,
                borderRadius: 3,
              }}
              variant="contained"
              color="warning"
            >
              {isSignedUp ? "Sign Up" : "Login"}
            </Button>
            <Button
              sx={{
                marginTop: 3,
                borderRadius: 3,
              }}
              onClick={resetState}
            >
              Change to {isSignedUp ? "Login" : "Signup"}
            </Button>
          </Box>
        </form>
      )}
    </>
  );
};

export default Login;
