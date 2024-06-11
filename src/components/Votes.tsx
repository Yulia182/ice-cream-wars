import { useState } from "react";
import "./Votes.css";

const Votes = () => {
  const [chocolateVotes, setChocolateVotes] = useState<number>(0);
  const [vanillaVotes, setVanillaVotes] = useState<number>(0);
  const [strawberryVotes, setStraberryVotes] = useState<number>(0);
  const [totalVotes, setTotalVotes] = useState<number>(0);
  const chocolateVotesPercentage = (
    (chocolateVotes / totalVotes) *
    100
  ).toFixed(1);
  const vanillaVotesPercentage = ((vanillaVotes / totalVotes) * 100).toFixed(1);
  const strawberryVotesPercentage = (
    (strawberryVotes / totalVotes) *
    100
  ).toFixed(1);
  return (
    <div className="Votes">
      <div>
        <h2>Vote Here</h2>
        <button
          onClick={() => {
            setChocolateVotes(chocolateVotes + 1);
            setTotalVotes(totalVotes + 1);
          }}
        >
          Chocolate
        </button>
        <button
          onClick={() => {
            setVanillaVotes(vanillaVotes + 1);
            setTotalVotes(totalVotes + 1);
          }}
        >
          Vanilla
        </button>
        <button
          onClick={() => {
            setStraberryVotes(strawberryVotes + 1);
            setTotalVotes(totalVotes + 1);
          }}
        >
          Strawberry
        </button>
      </div>
      <p className={`${totalVotes === 0 ? "" : "hide"}`}>No votes yet</p>
      <div className={`${totalVotes > 0 ? "" : "hide"}`}>
        <div>
          Chocolate: {chocolateVotes} ({chocolateVotesPercentage}%)
          <div
            className="Graph chocolate"
            style={{ width: chocolateVotesPercentage + "%" }}
          ></div>
        </div>
        <div>
          Vanilla: {vanillaVotes} ({vanillaVotesPercentage}%)
          <div
            className="Graph vanilla"
            style={{ width: vanillaVotesPercentage + "%" }}
          ></div>
        </div>
        <div>
          Straberry: {strawberryVotes} ({strawberryVotesPercentage}%)
          <div
            className="Graph strawberry"
            style={{ width: strawberryVotesPercentage + "%" }}
          ></div>
        </div>
        {/* <div>{totalVotes}</div>  */}
      </div>
    </div>
  );
};

export default Votes;
