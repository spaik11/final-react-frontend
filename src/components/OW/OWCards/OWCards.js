import React from "react";
import OWCard from "./OWCard/OWCard";
import styles from "./OWCards.module.css";

const OWCards = (props) => {
  return (
    <div className={styles.container}>
      {props.users.map(
        ({ level, icon, name, ratings, competitiveStats: { topHeroes } }) => (
          <OWCard
            key={level}
            portrait={icon}
            name={name}
            tankRank={ratings[0].level}
            tankImg={ratings[0].rankIcon}
            dmgRank={ratings[1].level}
            dmgImg={ratings[1].rankIcon}
            sptRank={ratings[2].level}
            sptImg={ratings[2].rankIcon}
          />
        )
      )}
    </div>
  );
};

export default OWCards;
