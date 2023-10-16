import "./App.css";
import MessageInput from "./MessageInput/MessageInput.tsx";
import MessageList from "./MessageList/MessageList";
import Header from "./Header/Header";
import { getInitialMessage, respond } from "./Blinkbot/respond";
import { useLocalStorage } from "usehooks-ts";
import "./Blinkbot.css";

type Message = {
  user: "Blinkbot" | "Human";
  text: string;
  timestamp: Date;
  isUser: boolean;
};

const getInitialState = (): [Message] => [
  {
    user: "Blinkbot",
    isUser: false,
    text: getInitialMessage(),
    timestamp: new Date(),
  },
];

function App() {
  const [messages, setMessages] = useLocalStorage<Array<Message>>(
    "messages",
    getInitialState(),
  );

  const addMessage = (message: Omit<Message, "timestamp">) => {
    setMessages((oldMessages) => [
      ...oldMessages,
      { ...message, timestamp: new Date() },
    ]);
  };

  const handleUserMessage = async (message: string) => {
    addMessage({ text: message, user: "Human", isUser: true });

    const botResponse = await respond(message).catch(
      (error) => `I had a problem: ${error.message}`,
    );
    addMessage({ text: botResponse, user: "Blinkbot", isUser: false });
  };

  const clearMessages = () => {
    setMessages(getInitialState());
  };

  return (
    <div className={"App"}>
      <div className={"App__headerContainer"}>
        <Header onReset={clearMessages} />
      </div>
      <MessageList messages={messages} />
      <div className={"App__messageInputContainer"}>
        <MessageInput onMessage={handleUserMessage} />
      </div>
    </div>
  );
}

export default App;
