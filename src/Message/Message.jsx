import { Avatar, Card, CardBody, Spinner } from "@nextui-org/react";
import "./Message.css";
import { useLayoutEffect, useRef, useState } from "react";
import cx from "classnames";
import { useTimeout } from "usehooks-ts";
import { BsRobot } from "react-icons/bs";

function Message({ message, isLast, isFirstOfUserGroup }) {
  const ref = useRef(null);

  let isBotMessage = message.user === "Blinkbot";

  const [isLoading, setIsLoading] = useState(isBotMessage);

  useLayoutEffect(() => {
    if (isLast) {
      ref?.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [isLast]);

  useTimeout(() => {
    setIsLoading(false);
  }, 800);

  return (
    <div
      className={cx("Message", {
        Message_human: !isBotMessage,
        Message_bot: isBotMessage,
      })}
      ref={ref}
    >
      <Avatar icon={isBotMessage ? <BsRobot size={24} /> : undefined} />
      <div>
        {isBotMessage && isFirstOfUserGroup && <>{message.user}</>}
        <Card className={"Message__card"} shadow={"sm"}>
          <CardBody>{isLoading ? <Spinner /> : message.text}</CardBody>
        </Card>
      </div>
    </div>
  );
}

export default Message;
