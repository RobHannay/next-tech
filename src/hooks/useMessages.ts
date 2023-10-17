import { useLocalStorage } from "usehooks-ts";
import { getInitialMessage } from "../Blinkbot/respond";
import { useCallback, useMemo } from "react";
import { v4 as uuid } from "uuid";
import { produce } from "immer";

type Message = {
  id: string;
  isCurrentUser: boolean;
  isLoading?: boolean;
  text: string;
  timestamp: Date;
  user: "Blinkbot" | "Human";
};

const getNewMessage = (message: Omit<Message, "id" | "timestamp">) => ({
  isLoading: false,
  ...message,
  timestamp: new Date(),
  id: uuid(),
});

const getInitialState = () => {
  let newMessage = getNewMessage({
    user: "Blinkbot",
    isCurrentUser: false,
    text: getInitialMessage(),
  });
  return {
    [newMessage.id]: newMessage,
  };
};

function useLocalStorageImmer<T>(localStorageKey: string, initialState: T) {
  const [state, _setState] = useLocalStorage(localStorageKey, initialState);
  const updateState = useMemo(() => produce(_setState), []);
  return [state, updateState];
}

export function useMessages() {
  const [messages, setMessages] = useLocalStorageImmer<Record<string, Message>>(
    "messages",
    getInitialState(),
  );

  const addMessage = (message: Parameters<typeof getNewMessage>[0]) => {
    const newMessage = getNewMessage(message);
    // @ts-ignore
    setMessages((oldMessages) => {
      oldMessages[newMessage.id] = newMessage;
      return oldMessages;
    });

    return newMessage;
  };

  const updateMessage = (messageUpdate: Partial<Message> & { id: string }) => {
    // @ts-ignore
    setMessages((oldMessages) => {
      Object.assign(oldMessages[messageUpdate.id], messageUpdate);
      return oldMessages;
    });
  };

  const resetMessages = useCallback(() => {
    // @ts-ignore
    setMessages(getInitialState());
  }, []);

  return { messages, addMessage, resetMessages, updateMessage };
}
