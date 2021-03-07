import React from 'react';

const PlayerSingle = (props) => {
    return (
        <div className="row">
            <div className="col s8">
                <div className="card">
                    <div className="card-image">
                        <img src="soccer.jfif" alt="Ronaldo" height="400px"/>
                        <span className="card-title">{props.player.firstname} {props.player.lastname}</span>
                    </div>
                    <div className="card-content">
                        <p>Phone: {props.player.phone} -- Email: {props.player.email}</p>
                        <p>Strenght: {props.player.strenght} -- Endurance: {props.player.endurance}</p>
                    </div>
                    <div className="card-action">
                        Team: {props.player.team}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PlayerSingle;