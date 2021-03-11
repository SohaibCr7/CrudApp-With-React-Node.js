
import React from 'react';

import axios from "axios";
import LoginFoam from "./LoginFoam";
import PlayerList from "./Player/PlayerList";
import PlayerSingle from "./Player/PlayerSingle";
import PlayerForm from "./Player/PlayerForm";
const url = "http://localhost:8080/player";

export default class Home extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
          Players: [],
          currentPlayer: {},
          player: {},
        };
        this.UpdateCurrentPlayer = this.UpdateCurrentPlayer.bind(this);
        this.deletePlayer = this.deletePlayer.bind(this);
        this.getPlayerById = this.getPlayerById.bind(this);
      }
    
      getPlayers = () => {
        axios
          .get(url)
          .then((Response) => {
            this.setState({
              Players: Response.data,
            });
          })
          .catch((error) => {
            console.log(error);
          });
      };
    
      deletePlayer(id) {
        axios
          .delete(url + "/" + id)
          .then((Response) => {
            alert("The record has been deleted");
          })
          .then(() => {
            // debugger;
            this.setState({
              Players: this.state.Players.filter((x) => x._id !== id),
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    
      componentDidMount() {
        this.getPlayers();
      }
    
      UpdateCurrentPlayer(item) {
        this.setState({
          currentPlayer: item,
        });
      }
    
      getPlayerById = (id) => {
        try {
          axios.get(url + "/" + id).then( (Response) => {
             this.setState({
              player: Response.data,
            }, () => {console.log(this.state.player)});
          });
        } catch (ex) {
          console.log(ex);
        }
        // axios
        //   .get(url + "/" + id)
        //   .then((Response) => {
        //     this.setState({
        //       player: Response.data,
        //     });
        //   })
        //   .catch((error) => {
        //     console.log(error);
        //   });
      };

    render() {
        return (
            <div className="container-fluid">
        <div className="row">
          <nav>
            <div className="nav-wrapper deep-purple lighten-3">
              <a href="/" className="brand-logo">
                Crud Application
              </a>
            </div>
          </nav>
        </div>
        <div className="row">
          <div className="col s3">
            <PlayerList
              players={this.state.Players}
              UpdateCurrentPlayer={this.UpdateCurrentPlayer}
              getPlayerById={this.getPlayerById}
              deletePlayer={this.deletePlayer}
            />
          </div>
          <div className="col s9">
            <PlayerSingle player={this.state.currentPlayer} />
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            {/* {this.state.player.firstname && <PlayerForm getPlayers={this.getPlayers} player={this.state.player}/>} */}
            <PlayerForm
              players={this.state.Players}
              refreshPlayer={this.getPlayers}
              player={this.state.player}
            />
          </div>
        </div>
      </div>
        )
    }
}
