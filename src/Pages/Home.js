import { useNavigate } from "react-router-dom";

import classes from "./Home.module.css";
import girlImg from "../images/girl.jpg";

function Home() {
  const navigate = useNavigate();
  function clickHandle() {
    navigate("/searching-page");
    return;
  }
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <div>
          <h1>GitHub Typeahead </h1>
          <h3>Find any GitHub user</h3>
          <button onClick={clickHandle}>Start Searching</button>
        </div>
        <img src={girlImg} alt="girl_image" className={classes.image} />
      </div>
    </div>
  );
}

export default Home;
