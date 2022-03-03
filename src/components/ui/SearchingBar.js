import { useRef } from "react";

import classes from "./SearchingBar.module.css";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SearchingBar(props) {
  const nameInputRef = useRef();

  function submitHandler(e) {
    e.preventDefault();

    const enteredName = nameInputRef.current.value;

    console.log(enteredName);
    props.onSearch(enteredName);
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div>
        <label htmlFor="searchF">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </label>
        <input type="text" id="searchF" ref={nameInputRef} required></input>
        <button>Search</button>
      </div>
    </form>
  );
}

export default SearchingBar;
