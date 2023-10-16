import { Avatar, Card, CardBody, CardHeader } from "@nextui-org/react";
import "./Message.css";
import { useLayoutEffect, useRef } from "react";
import cx from "classnames";
function Message({ message, isLast }) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    if (isLast) {
      ref?.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [isLast]);

  let isBotMessage = message.user === "Blinkbot";
  return (
    <div
      className={cx("Message", {
        Message_human: !isBotMessage,
        Message_bot: isBotMessage,
      })}
      ref={ref}
    >
      <Avatar />
      <Card className={"Message__card"} shadow={"sm"}>
        <CardBody>{message.text}</CardBody>
      </Card>
    </div>
  );
}

export default Message;
