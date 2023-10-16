import { useLocalStorage } from "usehooks-ts";
import { getInitialMessage } from "../Blinkbot/respond";
import { useCallback, useMemo } from "react";
import { v4 as uuid } from "uuid";
import { produce } from "immer";
type Message = {
  user: "Blinkbot" | "Human";
  text: string;
  timestamp: Date;
  isCurrentUser: boolean;
  id: string;
};

const getNewMessage = (
  message: Pick<Message, "user" | "text" | "isCurrentUser">,
) => ({
  ...message,
  timestamp: new Date(),
  id: uuid(),
});

const getInitialState = (): [Message] => [
  getNewMessage({
    user: "Blinkbot",
    isCurrentUser: false,
    text: getInitialMessage(),
  }),
];

function useLocalStorageImmer<T>(localStorageKey: string, initialState: T) {
  const [state, _setState] = useLocalStorage(localStorageKey, initialState);
  const updateState = useMemo(() => produce(_setState), []);
  return [state, updateState];
}

export function useMessages() {
  const [messages, setMessages] = useLocalStorageImmer<Array<Message>>(
    "messages",
    getInitialState(),
  );

  const addMessage = (message: Parameters<typeof getNewMessage>[0]) => {
    // @ts-ignore
    setMessages((oldMessages) => {
      oldMessages.push(getNewMessage(message));
      return oldMessages;
    });
  };

  const resetMessages = useCallback(() => {
    // @ts-ignore
    setMessages(getInitialState());
  }, []);

  return { messages, addMessage, resetMessages };
}
