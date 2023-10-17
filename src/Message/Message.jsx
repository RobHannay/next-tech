import { Avatar, Card, CardBody, Skeleton, Spinner } from "@nextui-org/react";
import "./Message.css";
import { useLayoutEffect, useRef, useState } from "react";
import cx from "classnames";
import { useTimeout } from "usehooks-ts";
import { BsRobot } from "react-icons/bs";

function Message({ message, isLast, isFirstOfUserGroup }) {
  const ref = useRef(null);

  const [isLoading, setIsLoading] = useState(!message.isCurrentUser);

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
        Message_human: message.isCurrentUser,
        Message_bot: !message.isCurrentUser,
      })}
      ref={ref}
    >
      <Avatar
        icon={message.isCurrentUser ? undefined : <BsRobot size={24} />}
        className={"Message__avatar"}
      />
      <div>
        {!message.isCurrentUser && isFirstOfUserGroup && <>{message.user}</>}
        <Card className={"Message__card"} shadow={"sm"}>
          <CardBody>
            {isLoading ? (
              <Skeleton>fake loading text xyz fake loading text xyz</Skeleton>
            ) : (
              message.text
            )}
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default Message;
