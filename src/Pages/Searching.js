import { useState, useEffect } from "react";
import Footer from "../components/layout/Footer";

import CardBox from "../components/ui/CardBox";
import SearchingBar from "../components/ui/SearchingBar";
import classes from "./Searching.module.css";

function Searching() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedUsers, setLoadedUsers] = useState([]);

  let content;
  let userName;
  function searchHandler(enteredName) {
    userName = enteredName.split(" ").join("");
    getDataFromAPI();
  }
  function getDataFromAPI() {
    // fetch(`https://api.github.com/search/users?q=${userName}+in:user`)
    fetch(
      `https://api.github.com/search/users?q=${userName}&user/repos?page=1&per_page=100`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        const cards = [];

        for (const key in data.items) {
          const card = {
            id: key,
            ...data.items[key],
          };
          cards.push(card);
        }

        setTimeout(() => {
          console.log(cards);
          setIsLoading(false);
          setLoadedUsers(cards);
        }, 1000);
      })
      .catch((error) => console.error(error));
  }

  useEffect(() => {
    setIsLoading(true);
  }, []);

  // content = <CardBox cards={loadedUsers} />;
  if (isLoading) {
    content = <CardBox cards={[]} />;
  } else {
    content = <CardBox cards={loadedUsers} />;
  }

  return (
    <div className={classes.container}>
      <SearchingBar onSearch={searchHandler} />

      {/* <CardBox cards={loadedUsers} /> */}

      {content}
      <Footer />
    </div>
  );
}

export default Searching;
