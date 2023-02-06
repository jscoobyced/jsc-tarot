import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <>
      <h1>Welcome</h1>
      <span>Please chose your fortune:</span>
      <div className="home--choice">
        <Link to="/fortune">
          <img
            src={"images/cards/mid_size/00.png"}
            alt="Default card backgrouns"
          />
          4 cards fortune
        </Link>
        <Link to="/question">
          {" "}
          <img
            src={"images/cards/mid_size/00.png"}
            alt="Default card backgrouns"
          />
          1 card fortune
        </Link>
      </div>
    </>
  );
};

export default Home;
