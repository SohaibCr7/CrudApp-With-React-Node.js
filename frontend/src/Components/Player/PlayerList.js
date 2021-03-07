import React from 'react';

const PlayerList = (props) => {
    return (
        <div>
           <ul className="collection with-header">
               <li className="collection header"> <h4>player</h4></li>
               {
                   props.player.map((item) => (
                       <a href="#!" className="collection-item" key={item._id} 
                       onClick={props.UpdateCurrentPlayer.bind(this,item)} >{item.firstname} {item.lastname}</a>
                   ))
               }
           </ul>
        </div>
      );
}
 
export default PlayerList;