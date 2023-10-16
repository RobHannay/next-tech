import blinkLogo from "../../public/Blink-text.svg";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { BiMenu, BiReset } from "react-icons/bi";
import "./Header.css";
import { GoKebabHorizontal } from "react-icons/go";
import { BsThreeDotsVertical } from "react-icons/bs";

function Header({ onReset }) {
  return (
    <header className={"Header"}>
      <a href={"https://joinblink.com"} target={"_blank"}>
        <img src={blinkLogo} className={"logo"} alt={"Blink logo"} />
      </a>
      <Dropdown>
        <DropdownTrigger>
          <Button isIconOnly variant={"bordered"}>
            <BsThreeDotsVertical />
          </Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions">
          <DropdownItem
            key="restart"
            onClick={onReset}
            color="danger"
            startContent={<BiReset />}
          >
            Restart Conversation
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </header>
  );
}

export default Header;
