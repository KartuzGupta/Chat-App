import { Box } from "@chakra-ui/layout";
import { useState } from "react";
import Chatbox from "../components/Chatbox";
import MyChats from "../components/MyChats";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import { ChatState } from "../Context/ChatProvider";
import { useDarkMode } from "../DarkMode";
import '../components/styles.css'

const Chatpage = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = ChatState();
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <div style={{ width: "100%", backgroundColor: isDarkMode ? '#121212' : '#fff', color: isDarkMode ? '#fff' : '#000' }}>
      {user && <SideDrawer />}
      <Box d="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box>
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
    </div>
  );
};

export default Chatpage;
