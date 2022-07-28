import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const NewUserForm = ({ onSubmit }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit({ firstName, lastName });

    setFirstName("");
    setLastName("");
  };

  const handleFirstNameChange = e => setFirstName(e.currentTarget.value);

  const handleLastNameChange = e => setLastName(e.currentTarget.value);

  return (
    <Form
      onSubmit={handleSubmit}
      onSubmitCapture={() => {
        if ("activeElement" in document) document.activeElement.blur();
      }}
    >
      <FormGroup>
        <Label>First name</Label>
        <Input
          placeholder="First name"
          required
          type="text"
          value={firstName}
          onChange={handleFirstNameChange}
        />
      </FormGroup>
      <FormGroup>
        <Label>Last name</Label>
        <Input
          placeholder="Last name"
          required
          type="text"
          value={lastName}
          onChange={handleLastNameChange}
        />
      </FormGroup>
      <FormGroup>
        <Button block outline type="submit" color="primary">
          Create
        </Button>
      </FormGroup>
    </Form>
  );
};

export default NewUserForm;
