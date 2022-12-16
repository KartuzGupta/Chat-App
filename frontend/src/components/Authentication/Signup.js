import { useToast } from "@chakra-ui/toast";
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router";
import '../../css/form.css'
import Loader from '../loader/Loader'
const Signup = () => {
  const [showPass, setShowPass] = useState(false)
  const [showConfPass, setShowConfPass] = useState(false)

  const handlePassClick = () => {
    setShowPass(!showPass);
  }
  const handleConfPassClick = () => {
    setShowConfPass(!showConfPass);
  }
  const toast = useToast();
  const history = useHistory();

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [confirmpassword, setConfirmpassword] = useState();
  const [password, setPassword] = useState();
  const [isLoading, setIsLoading] = useState(false)

  const submitHandler = async () => {
    setIsLoading(true);
    if (!name || !email || !password || !confirmpassword) {
      toast({
        title: "Please Fill all the Feilds",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
      setIsLoading(false);
      return;
    }
    if (email.search('@') === -1) {
      toast({
        title: "Enter valid email!",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
      setIsLoading(false);
      return;
    }
    if (password !== confirmpassword) {
      toast({
        title: "Passwords Do Not Match",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
      setIsLoading(false);
      return;
    }
    console.log(name, email, password);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/api/user",
        {
          name,
          email,
          password,
        },
        config
      );
      console.log(data);
      toast({
        title: "Registration Successful",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
      history.push("/chats");
      setIsLoading(false);
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
      setIsLoading(false);
    }
  };


  return (
    <div>

      <div className="loginFormBox">
        {/* <label htmlFor="name"  ></label> */}
        <input type="text" name='name' placeholder='Enter name' id='name' value={name}
          onChange={(e) => setName(e.target.value)} required style={{ marginBottom: "1vw" }} />
        {/* <label htmlFor="email">Email</label> */}
        <input type="email" name='email' placeholder='Enter email' id='email' value={email}
          onChange={(e) => setEmail(e.target.value)} required />

        {/* <label htmlFor="password">Password</label> */}
        <div className='passBox'>
          <input type={showPass ? "text" : "password"} name='password' placeholder='Enter password' id='password' value={password}
            onChange={(e) => setPassword(e.target.value)} required />
          <button className='showPasswordBtn' onClick={handlePassClick}>{showPass ? <p>Hide</p> : <p>Show</p>}</button>
        </div>
        {/* <label htmlFor="confirmPass">Confirm Password</label> */}
        <div className='passBox'>
          <input type={showConfPass ? "text" : "password"} name='confirmPass' placeholder='Confirm password' id='confirmPass' value={confirmpassword}
            onChange={(e) => setConfirmpassword(e.target.value)} required />
          <button className='showPasswordBtn' onClick={handleConfPassClick} >{showConfPass ? <p>Hide</p> : <p>Show</p>}</button>
        </div>
        {isLoading ? <Loader /> : <button onClick={submitHandler} style={{ marginTop: "4vw" }}>Sign Up</button>}
        {/* {isLoading ? <Loader /> :  <button onClick={submitHandler}><span>GO</span> <i class="fa fa-check"></i></button>} */}
      </div>
    </div>
  )
};

export default Signup;
