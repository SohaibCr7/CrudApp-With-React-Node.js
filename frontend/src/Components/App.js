import React from "react";
import "./App.css";
import axios from "axios";

import PlayerList from "./Player/PlayerList";
import PlayerSingle from "./Player/PlayerSingle";
import PlayerForm from "./Player/PlayerForm";
const url = "http://localhost:8080/player";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Players: [],
      currentPlayer: {},
      player: {},
    };
    this.UpdateCurrentPlayer = this.UpdateCurrentPlayer.bind(this);
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
  componentDidMount() {
    this.getPlayers();
  }

  UpdateCurrentPlayer(item) {
    this.setState({
      currentPlayer: item,
    });
  }

  getPlayerById = async (id) => {
    console.log(id, "id");
    try {
      const { data } = await axios.get(url + "/" + id);
      console.log(data);
      this.setState({ player: data });
      // return data;
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
              getPlayers={this.getPlayers}
              player={this.state.player}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
