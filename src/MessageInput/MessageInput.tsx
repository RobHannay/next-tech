import { Button, Input } from "@nextui-org/react";
import { FormEvent } from "react";

const fieldName = "message";

function MessageInput({ onMessage }) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const messageText = formData.get(fieldName);

    if (messageText) {
      onMessage(messageText);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={"MessageInput__container"}>
      <Input label={"Write a message"} name={fieldName} />
      <Button type={"submit"} onMouseDown={(e) => e.preventDefault()}>
        Send
      </Button>
    </form>
  );
}

export default MessageInput;
