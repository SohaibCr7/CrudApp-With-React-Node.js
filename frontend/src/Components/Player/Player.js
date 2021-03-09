import React from "react";



export default function Player(props) {

  return (
    <div>
      <button className="btn-floating btn-small cyan pulse" onClick={() => props.deletePlayer(props.playerData._id)}>Del</button>
      <button className="btn-floating btn-small cyan pulse" onClick={() => props.getPlayerById(props.playerData._id)}>Edit</button>
      <a
        href="#!"
        className="collection-item"
        key={props.playerData._id}
        onClick={props.updatePlayer.bind(this, props.playerData)}
      >
        {props.playerData.firstname} {props.playerData.lastname}</a>
        
    </div>
  );
}
