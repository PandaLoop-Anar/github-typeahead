import { useState, useEffect } from "react";

import Cards from "./Cards";
import Pagination from "./Pagination";
import classes from "./CardBox.module.css";

function CardBox(props) {
  const [userCards, setUserCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [curPage, setCurPage] = useState(1);
  const [cardsPerPage] = useState(12);
  ///
  useEffect(() => {
    setIsLoading(true);
    setUserCards(props.cards);
    setIsLoading(false);
  }, [props.cards]);

  //get current userCards
  const indexOfLastCard = curPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const curUserCards = userCards.slice(indexOfFirstCard, indexOfLastCard);

  //Change page
  const paginate = (pageNumber) => setCurPage(pageNumber);

  return (
    <div className={classes.cardBoxContainer}>
      <Cards userCards={curUserCards} isLoading={isLoading} />
      <div className={classes.btn_container}>
        <Pagination
          cardsPerPage={cardsPerPage}
          totalCards={userCards.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
}
export default CardBox;
