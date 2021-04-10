import React, { useEffect, useState } from "react";

import {
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
} from "reactstrap";
const Index = () => {
  const [state, setState] = useState({
    firstname: "",
    lastname: "",
    bio: "",
    dev: true,
    level: "noob",
    version: "1.2",
  });
  const handleField = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };
  return (
    <div>
      <Container>
        <Form>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="firstname">First name</Label>
                <Input
                  type="text"
                  name="firstname"
                  id="firstname"
                  placeholder="Your first name."
                  value={state.firsname}
                  onChange={handleField}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="lastname">Last name</Label>
                <Input
                  type="text"
                  name="lastname"
                  id="lastname"
                  placeholder="Your last name."
                  value={state.lastname}
                  onChange={handleField}
                />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label for="bio">Bio</Label>
            <Input
              type="textarea"
              placeholder="Your bio."
              name="bio"
              id="bio"
              value={state.bio}
              onChange={handleField}
            />
          </FormGroup>
          <FormGroup>
            <Label for="version">Version</Label>
            <Input
              type="select"
              name="version"
              id="version"
              value={state.version}
              onChange={handleField}
            >
              <option value="1.2">1.2</option>
              <option value="2.2">2.2</option>
              <option value="3.2">3.2</option>
              <option value="4.2">4.2</option>
              <option value="5.2">5.2</option>
            </Input>
          </FormGroup>
          <FormGroup check>
            <Input
              type="checkbox"
              name="dev"
              id="dev"
              checked={state.dev}
              onChange={handleField}
            />
            <Label for="dev" check>
              Check me out
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="level"
                value="noob"
                onChange={handleField}
                checked={state.level === "noob"}
              />
              Noob
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="level"
                value="master"
                onChange={handleField}
                checked={state.level === "master"}
              />
              Master
            </Label>
          </FormGroup>
          <Button className="btn-block">Sign in</Button>
        </Form>
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </Container>
    </div>
  );
};

export default Index;
