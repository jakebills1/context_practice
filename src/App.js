import React, { Fragment, } from "react";
import "./App.css";
import { Table, Button, Icon } from "semantic-ui-react";
import { UsersConsumer } from "./providers/UsersProvider";
import AddUserForm from "./AddUserForm";
import EditForm from "./EditForm";
const renderRows = (users, editUser, removeUser) => {
  return users.map(user => (
    <>
      <Table.Row key={user.id}>
        <Table.Cell>{user.name}</Table.Cell>
        <Table.Cell>{user.phone}</Table.Cell>
        <Table.Cell>{user.email}</Table.Cell>
        <Table.Cell>
          <Button.Group>
            <Button color="blue"><Icon name="edit" onClick={ () => editUser(user) } /></Button>
            <Button color="red"><Icon name="delete" onClick={ () => removeUser(user.id) } /></Button>
          </Button.Group>
        </Table.Cell>
      </Table.Row>
    </>
  ));

}
const App = props => 
{
  return (
    <UsersConsumer>
      {value => (
        <Fragment>
          <Table>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Phone</Table.HeaderCell>
                <Table.HeaderCell>Email</Table.HeaderCell>
                <Table.HeaderCell>Edit / Delete</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>{renderRows(value.users, value.editUser, value.removeUser)}</Table.Body>
          </Table>
          <AddUserForm />
          <EditForm /> 
        </Fragment>
      )}
    </UsersConsumer>
  );

}

export default App;
