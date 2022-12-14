import "./App.css";
import Homepage from "./Pages/Homepage";
import { Route } from "react-router-dom";
import Chatpage from "./Pages/Chatpage";
import signupui from "./components/UI/signupui";

function App() {
  return (
    <div className="App">
      <Route path="/" component={signupui} exact />
      <Route path="/chats" component={Chatpage} />
      <Route path="/sign" component={Chatpage} />
    </div>
  );
}

export default App;
