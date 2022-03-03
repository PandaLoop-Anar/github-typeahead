import { createContext, useState, useEffect } from "react";

const FavouritesContext = createContext({
  favourites: [],
  totalFavourites: 0,
  addFavourite: (favouriteCard) => {},
  removeFavourite: (cardId) => {},
  itemIsFavourite: (cardId) => {},
});

export function FavouritesContextProvider(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [userFavourites, setUserFavourites] = useState([]);
  ///
  const init = function () {
    const storage = localStorage.getItem("favourites");
    if (storage) setUserFavourites(JSON.parse(storage));
  };
  useEffect(() => {
    setIsLoading(true);
    init();
  }, []);

  const persistFavourites = function (stored) {
    localStorage.setItem("favourites", JSON.stringify(stored));
    setIsLoading(false);
  };

  function addFavouriteHandler(favouriteCard) {
    setUserFavourites((prevUserFavourites) => {
      return prevUserFavourites.concat(favouriteCard);
    });
    persistFavourites(userFavourites.concat(favouriteCard));
  }

  function removeFavouriteHandler(cardId) {
    setUserFavourites((prevUserFavourites) => {
      return prevUserFavourites.filter((card) => card.id !== cardId);
    });
    persistFavourites(userFavourites.filter((card) => card.id !== cardId));
  }

  function itemIsFavouriteHandler(cardId) {
    return userFavourites.some((card) => card.id === cardId);
  }

  const context = {
    favourites: userFavourites,
    totalFavourites: userFavourites.length,
    addFavourite: addFavouriteHandler,
    removeFavourite: removeFavouriteHandler,
    itemIsFavourite: itemIsFavouriteHandler,
  };
  if (isLoading) {
    // return (
    //   <section>
    //     <p>Loading...</p>
    //   </section>
    // );
  }

  return (
    <FavouritesContext.Provider value={context}>
      {props.children}
    </FavouritesContext.Provider>
  );
}

export default FavouritesContext;
