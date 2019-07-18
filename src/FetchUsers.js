import React from "react";
import axios from "axios";
import { UsersConsumer } from "./providers/UsersProvider";

class FetchUsers extends React.Component {
  state = { loaded: false };

  componentDidMount() {
    const {
      value: { users, setUsers }
    } = this.props;

    if (users.length !== 0) {
      this.setState({ loaded: true });
    } else {
      axios.get("https://jsonplaceholder.typicode.com/users")
        .then(result => {
          setUsers(result.data);
          this.setState({ loaded: true });
        })
        .catch(err => {
          alert(err);
        });
    }
  }

  render() {
    return this.state.loaded ? this.props.children : null;
  }
}

const ConnectedFetchUsers = props => (
  <UsersConsumer>
    {value => <FetchUsers {...props} value={value} />}
  </UsersConsumer>
);

export default ConnectedFetchUsers;
