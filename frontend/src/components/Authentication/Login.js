import { useState } from "react";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import Loader from "../loader/Loader";
import "../../css/form.css";

const Login = () => {
  console.log("Login");
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const toast = useToast();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const submitHandler = async () => {
    setLoading(true);
    if (!email || !password) {
      toast({
        title: "Please Fill all the Feilds",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
      setLoading(false);
      return;
    }

    // console.log(email, password);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/api/user/login",
        { email, password },
        config
      );

      console.log(JSON.stringify(data));
      toast({
        title: "Login Successful",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
      history.push("/chats");
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
      setLoading(false);
    }
  };

  const forgetPassword = () => {
    history.push("/forget-password");
  };

  return (
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
        <label htmlFor="password">Password</label>
        <div className="passBox">
          <input
            type={show ? "text" : "password"}
            name="password"
            placeholder="Enter password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="showPasswordBtn" onClick={handleClick}>
            {show ? <p>Hide</p> : <p>Show</p>}
          </button>
        </div>
        {loading ? (
          <Loader />
        ) : (
          <button className="submitBtn" onClick={submitHandler}>
            Login
          </button>
        )}
        <p className="forget-password-style" onClick={forgetPassword}>
          Forget Password
        </p>
      </div>
    </div>
  );
};

export default Login;
