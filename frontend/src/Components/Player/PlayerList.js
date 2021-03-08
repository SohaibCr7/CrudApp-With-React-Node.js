import React from "react";
import Player from "./Player";
const PlayerList = (props) => {
  return (
    <div>
      <ul className="collection with-header">
        <li className="collection header">
          <h4>player</h4>
        </li>
        {props.players.map((item) => (
          <Player key={item._id} getPlayerById={props.getPlayerById} playerData={item} updatePlayer={props.UpdateCurrentPlayer} ></Player>
        ))}
      </ul>
    </div>
  );
};

export default PlayerList;
