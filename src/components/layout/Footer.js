import classes from "./Footer.module.css";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <div className={classes.container}>
      <p>
        Procject was created as part of train effective technical test to show
        creator's skills in React (JS), HTML and CSS.
      </p>
      <span>
        Created by: <br /> Anar Mamedovi
      </span>
      <span>
        <FontAwesomeIcon icon={faCopyright} />
        {""} Anar {""} 2022
      </span>
    </div>
  );
}

export default Footer;
