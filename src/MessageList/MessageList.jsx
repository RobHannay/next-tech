import Message from "../Message/Message.jsx";
import { ScrollShadow } from "@nextui-org/react";

function MessageList({ messages }) {
  const lastIndex = messages.length - 1;

  return (
    <ScrollShadow className={"App__messageListContainer"}>
      {messages.map((message, index) => (
        <Message key={index} isLast={index === lastIndex} message={message} />
      ))}
    </ScrollShadow>
  );
}

export default MessageList;
