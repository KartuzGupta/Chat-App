import React, { useState } from "react";
import "../css/form.css";
import { Box, Container, Text } from "@chakra-ui/react";
import Loader from "../components/loader/Loader";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        bg="#ffffffc9"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
      >
        <Text fontSize="4xl" fontFamily="Work sans">
          Forget Password
        </Text>
      </Box>
      <Box bg="#ffffffc9" w="100%" p={4} borderRadius="lg" borderWidth="1px">
        <div data-testid="login-component">
          <div className="loginFormBox">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              placeholder="Enter email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          {loading ? (
            <Loader />
          ) : (
            <button className="submitBtn">Send OTP</button>
          )}
        </div>
      </Box>
    </Container>
  );
};

export default ForgetPassword;
