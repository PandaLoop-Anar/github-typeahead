import Card from "./Card";

import classes from "./Cards.module.css";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Cards({ userCards, isLoading }) {
  if (isLoading) {
    return (
      <h3>
        <FontAwesomeIcon icon={faSpinner} className={classes.spiner} />
      </h3>
    );
  } else {
    window.scrollTo(0, 0);
  }

  return userCards.map((card) => (
    <Card
      key={card.id}
      id={card.id}
      login={card.login}
      avatar_url={card.avatar_url}
      html_url={card.html_url}
      // url={card.url}
    />
  ));
}

export default Cards;
