import React from "react";
import OWCard from "./OWCard/OWCard";

const OWCards = (props) => {
  let owPlayersOnly = props.users.filter((user) => user.OWStats.userName);

  return owPlayersOnly.map(
    ({
      name,
      OWStats: {
        userName,
        portrait,
        level,
        competitiveGames: { won, lost, draw, played },
        competitiveStats: {
          tank: { rank: tRank, rank_img: tRank_img },
          damage: { rank: dRank, rank_img: dRank_img },
          support: { rank: sRank, rank_img: sRank_img },
        },
      },
    }) => {
      return (
        <div key={userName}>
          <OWCard
            name={name}
            username={userName}
            portrait={portrait}
            level={level}
            won={won}
            lost={lost}
            draw={draw}
            played={played}
            tankRank={tRank}
            tankImg={tRank_img}
            dmgRank={dRank}
            dmgImg={dRank_img}
            sptRank={sRank}
            sptImg={sRank_img}
          />
        </div>
      );
    }
  );
};

export default OWCards;
