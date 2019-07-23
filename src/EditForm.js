import React from 'react';
import {Form, } from 'semantic-ui-react';
import { UsersConsumer,  } from "./providers/UsersProvider";
class EditForm extends React.Component {
  render() {
    return(
      <UsersConsumer>
        { value => (
          <Form onSubmit={value.handleSubmit}>
            <Form.Group>
              <Form.Input
                name="name"
                value={value.name}
                onChange={value.handleChange}
              />
              <Form.Input
                name="phone"
                value={value.phone}
                onChange={value.handleChange}
              />
              <Form.Input
                name="email"
                value={value.email}
                onChange={value.handleChange}
              />
              <Form.Button>Update</Form.Button>
            </Form.Group>
          </Form>
        )}
      </UsersConsumer>
    );
  }
}
export default EditForm;