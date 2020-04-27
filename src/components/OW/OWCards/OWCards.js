import React, { useState, useEffect } from "react";
import { OWCard } from "../../../components";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import styles from "./OWCards.module.css";

const OWCards = (props) => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    setPlayers(props.users);
  }, [props.users]);

  if (players.length === 0) {
    return <Loader type='Puff' color='#00BFFF' height={100} width={100} />;
  }

  return (
    <div className={styles.container}>
      {players.map(({ level, icon, name, ratings }) => (
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
      ))}
    </div>
  );
};

export default OWCards;
