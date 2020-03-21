import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Form, Grid, Header, Segment } from "semantic-ui-react";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div>
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="blue" textAlign="center">
            Join
          </Header>
          <Form size="large">
            <Segment stacked>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="Name"
                onChange={e => setName(e.target.value)}
              />
              <Form.Input
                fluid
                icon="comments"
                iconPosition="left"
                placeholder="Room"
                onChange={e => setRoom(e.target.value)}
              />
              <Link
                onClick={e => (!name || !room ? e.preventDefault() : null)}
                to={`/chat?name=${name}&room=${room}`}
              >
                <Button type="submit" color="blue" fluid size="large">
                  Join Room
                </Button>
              </Link>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default Join;
