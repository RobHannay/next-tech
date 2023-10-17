import Message from "../Message/Message.jsx";
import { ScrollShadow } from "@nextui-org/react";
import { useMemo } from "react";

const sortByTime = (a, b) => {
  return new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime();
};

function MessageList({ messages }) {
  const sortedMessages = useMemo(() => {
    return Object.values(messages).sort(sortByTime);
  }, [messages]);

  const lastIndex = sortedMessages.length - 1;

  return (
    <ScrollShadow className={"App__messageListContainer"}>
      {sortedMessages.map((message, index) => (
        <Message
          key={message.id}
          isLast={index === lastIndex}
          message={message}
          isFirstOfUserGroup={message.user !== sortedMessages[index - 1]?.user}
        />
      ))}
    </ScrollShadow>
  );
}

export default MessageList;
