import React from "react";
import axios from "axios";

class PlayerForm extends React.Component {
  constructor(props) {
    super(props);
    const player = props.player;
    console.log(props.player, "constructor");

    this.refs = React.createRef();

    this.state = {
      data: {
        id: "",
        firstname: player.firstname,
        lastname: player.lastname,
        phone: player.phone,
        email: player.email,
      },
    };
  }
  componentWillReceiveProps() {
    // console.log("recived", this.props.getPlayerById())
    const values = this.props.player;
    console.log("values", values);

    this.setState(
      {
        data: {
          id: values._id,
          firstname: values.firstname,
          lastname: values.lastname,
          phone: values.phone,
          email: values.email,
        },
      },
      console.log("f", this.state.firstname)
    );
  }

  // componentDidMount(){
  //   console.log(this.state,"did mount")
  // }

  submitPlayer(event) {
    debugger;
    event.preventDefault();
    console.log(this.state.data, "submitted");
    const { data } = this.state;
    // const { data } = await axios.get(url + "/" + id);
    let url =
      data.id != undefined
        ? "http://localhost:8080/playerUpdate/" + data.id
        : "http://localhost:8080/player";
    data.id != undefined
      ? axios
          .put(url, {
            firstname: data.firstname,
            lastname: data.lastname,
            phone: data.phone,
            email: data.email,
          })
          .then((response) => {
            console.log(response);
            this.props.getPlayers();
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
            this.props.getPlayers();
          })
          .catch((error) => {
            console.log(error);
          });
  }

  changeField = (event) => {
    console.log(event.target.id, event.target.value, "eventttt");
    const { data } = this.state;
    console.log(data, "before");
    data[event.target.id] = event.target.value;
    console.log(data, "after");
    this.setState({ ...data });
  };

  updatePlayer(id) {
    console.log("daddd", id);
    const data = this.state;
    axios
      .post("http://localhost:8080/player", {
        firstname: data.firstname,
        lastname: data.lastname,
        phone: data.phone,
        email: data.email,
      })
      .then((response) => {
        console.log(response);
        this.props.getPlayers();
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
        <form className="col s12" onSubmit={this.submitPlayer.bind(this)}>
          <div className="row">
            <div className="input-field col s6">
              <input
                id="firstname"
                type="text"
                ref="firstname"
                onChange={this.changeField}
                value={data.firstname}
              />
              <label htmlFor="firstname">First Name</label>
            </div>
            <div className="input-field col s6">
              <input
                id="lastname"
                ref="lastname"
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
                ref="phone"
                type="text"
                onChange={this.changeField}
                value={data.phone}
              />
              <label htmlFor="phone">Phone</label>
            </div>
            <div className="input-field col s6">
              <input
                id="email"
                ref="email"
                type="text"
                onChange={this.changeField}
                value={data.email}
              />
              <label htmlFor="email">Email</label>
            </div>
          </div>

          {data.firstname == undefined ? (
            <button
              className="btn waves-effect waves-light"
              type="submit"
              name="action"
            >
              Add Player
            </button>
          ) : (
            <button
              className="btn waves-effect waves-light"
              type="submit"
              name="action"
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
