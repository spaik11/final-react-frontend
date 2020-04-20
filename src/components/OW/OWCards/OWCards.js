import React from "react";
import OWCard from "./OWCard/OWCard";

const OWCards = (props) => {
  if (!props.users) {
    return "Loading...";
  }

  return props.users.map((user) => {
    return (
      <div key={user.overWatchId}>
        <OWCard name={user.name} overwatch={user.overWatchId} />
      </div>
    );
  });
};

export default OWCards;
