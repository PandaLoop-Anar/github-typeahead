import classes from "./Pagination.module.css";

function Pagination({ cardsPerPage, totalCards, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className={classes.pagination}>
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={classes.page_item}
            onClick={() => paginate(number)}
          >
            {number}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;
