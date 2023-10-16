import blinkLogo from "../../public/Blink-text.svg";

function Header() {
  return (
    <div>
      <a href={"https://joinblink.com"} target={"_blank"}>
        <img src={blinkLogo} className={"logo"} alt={"Blink logo"} />
      </a>
    </div>
  );
}

export default Header;
