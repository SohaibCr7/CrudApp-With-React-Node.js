import React from "react";



export default function Player(props) {

  return (
    <div>
      <button className="btn-floating btn-small cyan pulse" onClick={() => props.getPlayerById(props.playerData._id)}><i className="material-icons">edit</i></button>
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
