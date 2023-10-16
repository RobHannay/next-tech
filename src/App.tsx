import blinkLogo from "/Blink-text.svg";
import "./App.css";
import MessageInput from "./MessageInput/MessageInput.tsx";
import MessageList from "./MessageList/MessageList";
import { getInitialMessage } from "./Blinkbot/respond";
import { useLocalStorage } from "@uidotdev/usehooks";
import { Button } from "@nextui-org/react";

const getInitialState = () => [getInitialMessage()];

function App() {
  const [messages, setMessages] = useLocalStorage<Array<string>>(
    "messages",
    getInitialState(),
  );

  const handleUserMessage = (message: string) => {
    setMessages([...messages, message]);
  };

  const clearMessages = () => {
    setMessages(getInitialState());
  };

  return (
    <div className={"column"}>
      <div>
        <a href={"https://joinblink.com"} target={"_blank"}>
          <img src={blinkLogo} className={"logo"} alt={"Blink logo"} />
        </a>
      </div>

      <p className={"testClass"}>Open App.tsx to get started.</p>
      <MessageList messages={messages} />
      <MessageInput onMessage={handleUserMessage} />
      <Button onClick={clearMessages}>Clear all</Button>
    </div>
  );
}

export default App;
