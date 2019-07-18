import React, { Fragment } from "react";
import "./App.css";
import { Table, Button, Icon } from "semantic-ui-react";
import { UsersConsumer } from "./providers/UsersProvider";
import AddUserForm from "./AddUserForm";
const renderRows = users =>
  users.map(user => (
    <>
      <Table.Row key={user.id}>
        <Table.Cell>{user.name}</Table.Cell>
        <Table.Cell>{user.phone}</Table.Cell>
        <Table.Cell>{user.email}</Table.Cell>
        <Button.Group>
          <Button color="blue"><Icon name="edit" /></Button>
          <Button color="red"><Icon name="delete" /></Button>
        </Button.Group>
      </Table.Row>
    </>
  ));
const App = props => (
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
          <Table.Body>{renderRows(value.users)}</Table.Body>
        </Table>
        <AddUserForm />
      </Fragment>
    )}
  </UsersConsumer>
);

export default App;
