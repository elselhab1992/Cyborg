import React from "react";
import BottomSection from "../BottomSection/BottomSection";
import { Games } from "./../../Data";
import { SecondaryButtons } from "./../Buttons/Buttons";

const GamingLibrary = () => {
  const games = Games.map((game) => {
    return (
      <div className="col-md-12" key={game.id}>
        <div className="content">
          <ul>
            <li>
              <img src={game.image} alt="game" />
            </li>
            <li>
              <h6>{game.title}</h6>
              <span>{game.subtitle}</span>
            </li>
            <li>
              <h6>Date Added</h6>
              <span>{game.dateAdded}</span>
            </li>

            <li>
              <h6>Hours Played</h6>
              <span>{game.hoursPlayed}</span>
            </li>
            <li>
              <h6>Currently</h6>
              <span>{game.currently}</span>
            </li>

            <SecondaryButtons>Download</SecondaryButtons>
          </ul>
        </div>
      </div>
    );
  });

  return (
    <>
      <BottomSection games={games} />
    </>
  );
};

export default GamingLibrary;
