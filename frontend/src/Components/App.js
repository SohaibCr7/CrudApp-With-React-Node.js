import React from "react";
import "./App.css";
import axios from "axios";

import PlayerList from "./Player/PlayerList";
import PlayerSingle from "./Player/PlayerSingle";
import PlayerForm from "./Player/PlayerForm";

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      Players: [],
      currentPlayer: {},
    }
    this.UpdateCurrentPlayer = this.UpdateCurrentPlayer.bind(this);
  }
  
  componentDidMount(){
    const url = 'http://localhost:8080/player';
    axios.get(url)
    .then((Response) => {
      this.setState({
        Players: Response.data
      })
    })
    .catch((error) => {
      console.log(error);
    });
  }

  UpdateCurrentPlayer(item){
    this.setState({
      currentPlayer: item,
    })
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <nav>
              <div className="nav-wrapper deep-purple lighten-3">
                <a href="/" className="brand-logo">Crud Application</a>
              </div>
          </nav>
        </div>
        <div className="row">
          <div className="col s3">
            <PlayerList player={this.state.Players} UpdateCurrentPlayer={this.UpdateCurrentPlayer}/>
          </div>
          <div className="col s9">
            <PlayerSingle player={this.state.currentPlayer}/>
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <PlayerForm />
          </div>
        </div>
      </div>
    );
  }
  
}

export default App;
