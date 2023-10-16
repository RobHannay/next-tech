import { Button, Input } from "@nextui-org/react";
import { FormEvent, useRef, useState } from "react";
import "./MessageInput.css";
import { BiPaperPlane } from "react-icons/bi";

const fieldName = "message";

function MessageInput({ onMessage }) {
  const input = useRef(null);
  const [value, setValue] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (value) {
      onMessage(value);
      setValue("");
    }

    input.current?.focus();
  };

  return (
    <form onSubmit={handleSubmit} className={"MessageInput__container"}>
      <Input
        label={"Write a message"}
        name={fieldName}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        variant="bordered"
        ref={input}
      />
      <Button
        type={"submit"}
        onMouseDown={(e) => e.preventDefault()}
        isIconOnly
        className="MessageInput__button"
      >
        <BiPaperPlane size={24} />
      </Button>
    </form>
  );
}

export default MessageInput;
