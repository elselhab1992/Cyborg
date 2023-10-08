import React from "react";
import { Data } from "../../Data";
import { FaStar, FaDownload } from "react-icons/fa";
import MostPopular from "./MostPopular";

const PopularCards = () => {
  const cards = Data.map((card) => {
    return (
      <>
        <div className="col-md-3" key={card.id}>
          <div className="card-items">
            <img src={card.image} alt={card.title} />
            <div className="flex-items">
              <h6>
                {card.title} <br />
                <span>{card.subtitle}</span>
              </h6>
              <ul>
                <li>
                  <span style={{ color: "yellow", marginLeft: 10 }}>
                    <FaStar />
                  </span>
                  <span style={{ marginLeft: 5 }}>{card.review}</span>
                </li>
                <li>
                  <span style={{ color: "#ec6090", marginRight: 5 }}>
                    <FaDownload />
                  </span>
                  <span>{card.download}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  });
  return (
    <div>
      <MostPopular cards={cards} />
    </div>
  );
};

export default PopularCards;
