import React from "react";

const UsersContext = React.createContext();
export const UsersConsumer = UsersContext.Consumer;

class UsersProvider extends React.Component {
  state = {
    users: [],
    user_being_edited: { id: "", name: "", phone: "", email: "" }
  };
  setUsers = users => {
    this.setState({ users: users });
  };
  addUser = user => {
    debugger;
    this.setState({ users: [...this.state.users, user] });
  };
  editUser = user => {
    // debugger
    // TODO make this populate a form
    this.setState({
      ...user
    });
  };
  removeUser = id => {
    const filteredUsers = this.state.users.filter(user => user.id !== id);
    this.setState({ users: filteredUsers });
  };
  handleEditChange = ({ target: { name, value } }) => {
    this.setState({[name]: value, })
  };
  handleEditSubmit = e => {
    const { name, id, phone, email, } = this.state;
    const newUser = { id: id, name: name, phone: phone, email: email, };
    const filteredUsers = this.state.users.filter(user => user.id !== id);
    this.setState({ users: [...filteredUsers, newUser]})
    e.preventDefault();
  };
  render() {
    return (
      <UsersContext.Provider
        value={{
          ...this.state,
          users: this.state.users,
          setUsers: this.setUsers,
          addUser: this.addUser,
          editUser: this.editUser,
          removeUser: this.removeUser,
          editingUser: this.state.user_being_edited,
          handleChange: this.handleEditChange,
          handleSubmit: this.handleEditSubmit
        }}
      >
        {this.props.children}
      </UsersContext.Provider>
    );
  }
}
export default UsersProvider;
