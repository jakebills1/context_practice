import React from "react";
import { Form } from "semantic-ui-react";
import { UsersConsumer } from "./providers/UsersProvider";
class AddUserForm extends React.Component {
  state = {
    name: "",
    email: "",
    phone: ""
  };
  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    const { name, email, phone } = this.state;
    return (
      <UsersConsumer>
        {value => (
          <Form onSubmit={() => value.addUser({...this.state})}>
            <Form.Group>
              <Form.Input
                name="name"
                value={name}
                placeholder="Name:"
                onChange={this.handleChange}
              />
              <Form.Input
                name="email"
                value={email}
                placeholder="Email:"
                onChange={this.handleChange}
              />
              <Form.Input
                name="phone"
                value={phone}
                placeholder="Phone:"
                onChange={this.handleChange}
              />
              <Form.Button type="submit">Add</Form.Button>
            </Form.Group>
          </Form>
        )}
      </UsersConsumer>
    );
  }
}
export default AddUserForm;
