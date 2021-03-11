import React from "react";
import axios from "axios";

class PlayerForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        id: "",
        firstname: "",
        lastname: "",
        phone: "",
        email: "",
      },
    };
  }
  componentWillReceiveProps(nextProps) {
    const { player } = nextProps;
    if (player._id)
      this.setState({
        data: {
          id: player._id,
          firstname: player.firstname,
          lastname: player.lastname,
          phone: player.phone,
          email: player.email,
        },
      });
  }

  submitPlayer(event) {
    event.preventDefault();

    const { data } = this.state;
    // const { data } = await axios.get(url + "/" + id);
    let url =
      data.id !== ""
        ? "http://localhost:8080/playerUpdate/" + data.id
        : "http://localhost:8080/player";

    data.id !== ""
      ? axios
          .put(url, {
            firstname: data.firstname,
            lastname: data.lastname,
            phone: data.phone,
            email: data.email,
          })
          .then((response) => {
            console.log(response);
            this.props.refreshPlayer();
          })
          .catch((error) => {
            console.log(error);
          })
      : axios
          .post(url, {
            firstname: data.firstname,
            lastname: data.lastname,
            phone: data.phone,
            email: data.email,
          })
          .then((response) => {
            console.log(response);
            this.props.refreshPlayer();
          })
          .catch((error) => {
            console.log(error);
          });
  }

  changeField = (event) => {
    const { data } = this.state;

    data[event.target.id] = event.target.value;

    this.setState({ data });
  };

  updatePlayer(id) {
    const { data } = this.state;
    axios
      .put("http://localhost:8080/playerUpdate/" + id, {
        firstname: data.firstname,
        lastname: data.lastname,
        phone: data.phone,
        email: data.email,
      })
      .then((response) => {
        console.log("update response: ", response);
        // this.props.getPlayers();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { data } = this.state;
    return (
      <div className="row">
        <h1 className="center">Add a new Player </h1>
        <form className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <input
                id="firstname"
                type="text"
                onChange={this.changeField}
                value={data.firstname}
              />
              <label htmlFor="firstname">First Name</label>
            </div>
            <div className="input-field col s6">
              <input
                id="lastname"
                type="text"
                onChange={this.changeField}
                value={data.lastname}
              />
              <label htmlFor="lastname">Last Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input
                id="phone"
                type="text"
                onChange={this.changeField}
                value={data.phone}
              />
              <label htmlFor="phone">Phone</label>
            </div>
            <div className="input-field col s6">
              <input
                id="email"
                type="text"
                onChange={this.changeField}
                value={data.email}
              />
              <label htmlFor="email">Email</label>
            </div>
          </div>

          {data.id === "" ? (
            <button
              className="btn waves-effect waves-light"
              name="action"
              onClick={(event) => this.submitPlayer(event)}
            >
              Add Player
            </button>
          ) : (
            <button
              className="btn waves-effect waves-light"
              type="button"
              name="action"
              onClick={() => this.updatePlayer(data.id)}
            >
              Update
            </button>
          )}
        </form>
      </div>
    );
  }
}

export default PlayerForm;
