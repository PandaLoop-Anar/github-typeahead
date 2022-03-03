import { useContext } from "react";

import classes from "./Card.module.css";

import FavouritesContext from "../../store/favourites-context";

function Card(props) {
  const favouritesCtx = useContext(FavouritesContext);

  const itemIsFavourite = favouritesCtx.itemIsFavourite(props.id);

  function toggleFavouritesStatusHandler() {
    if (itemIsFavourite) {
      favouritesCtx.removeFavourite(props.id);
    } else {
      favouritesCtx.addFavourite({
        id: props.id,
        login: props.login,
        avatar_url: props.avatar_url,
        html_url: props.html_url,
      });
    }
  }

  function goProfileClickHandler() {
    window.open(props.html_url, "_blank").focus();
  }

  return (
    <div className={classes.card}>
      <img src={props.avatar_url} alt="profile_photo" />
      <h3>{props.login}</h3>
      <div className={classes.btns}>
        <button onClick={goProfileClickHandler}>Go to Profile</button>
        <button onClick={toggleFavouritesStatusHandler}>
          {itemIsFavourite ? "Remove from Favourites" : "Add to Favourites"}
        </button>
      </div>
    </div>
  );
}

export default Card;
