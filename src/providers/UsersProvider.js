import React from "react";

const UsersContext = React.createContext();
export const UsersConsumer = UsersContext.Consumer;

class UsersProvider extends React.Component {
  state = {
    users: []
  }
  setUsers = (users) => {
    this.setState({users: users, })
  }
  addUser = (user) => {
    debugger
    this.setState({ users: [...this.state.users, user], })
  }
  editUser = () => {
    debugger
  }
  removeUser = (user) => {
    debugger
  }
  render() {
    return (
      <UsersContext.Provider value={{
        ...this.state,
        users: this.state.users,
        setUsers: this.setUsers, 
        addUser: this.addUser,
        editUser: this.editUser,
        removeUser: this.removeUser,
      }}>
        { this.props.children }
      </UsersContext.Provider>
    )
  }
}
export default UsersProvider;