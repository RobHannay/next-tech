import { Button, Input } from "@nextui-org/react";
import { FormEvent } from "react";

const fieldName = 'message';

function MessageInput({ onMessage }) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    onMessage(formData.get(fieldName));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input label={"Write a message"} name={fieldName}/>
      <Button type={"submit"}>Send</Button>
    </form>
  );
}

export default MessageInput;
