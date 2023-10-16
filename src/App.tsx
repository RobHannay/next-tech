import "./App.css";
import MessageInput from "./MessageInput/MessageInput.tsx";
import MessageList from "./MessageList/MessageList";
import Header from "./Header/Header";
import { getInitialMessage } from "./Blinkbot/respond";
import { useLocalStorage } from "@uidotdev/usehooks";
import { Button } from "@nextui-org/react";
import "./Blinkbot.css";

type Message = {
  user: "Blinkbot" | "Human";
  text: string;
  timestamp: Date;
};

const getInitialState = (): [Message] => [
  { user: "Blinkbot", text: getInitialMessage(), timestamp: new Date() },
];

function App() {
  const [messages, setMessages] = useLocalStorage<Array<Message>>(
    "messages",
    getInitialState(),
  );

  const addMessage = (text: string, user: Message["user"]) => {
    setMessages([...messages, { user, text, timestamp: new Date() }]);
  };

  const handleUserMessage = (message: string) => {
    addMessage(message, "Human");
  };

  const clearMessages = () => {
    setMessages(getInitialState());
  };

  return (
    <div className={"App"}>
      <div className={"App__headerContainer"}>
        <Header />
      </div>
      <MessageList messages={messages} />
      <div className={"App__messageInputContainer"}>
        <MessageInput onMessage={handleUserMessage} />
        <Button onClick={clearMessages}>Restart conversation</Button>
      </div>
    </div>
  );
}

export default App;
