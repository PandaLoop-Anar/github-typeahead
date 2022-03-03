import { useContext } from "react";

import FavouritesContext from "../store/favourites-context";
import CardBox from "../components/ui/CardBox";

import classes from "./Favourites.module.css";
import Footer from "../components/layout/Footer";

function Favourites() {
  const favouritesCtx = useContext(FavouritesContext);

  let content;

  if (favouritesCtx.totalFavourites === 0) {
    content = (
      <p className={classes.messageField}>
        You got no favorites yet. So start adding some 😉
      </p>
    );
  } else {
    content = <CardBox cards={favouritesCtx.favourites} />;
  }
  return (
    <div className={classes.container}>
      <h2 className={classes.favouritesH2}>My Favourite GitHub Profiles</h2>
      {content}
      <Footer />
    </div>
  );
}

export default Favourites;
