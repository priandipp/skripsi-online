import React, { Component } from 'react';
import { Grid, Button, Checkbox, Form } from 'semantic-ui-react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      a: '1'
    };
  }

  render() {
    return (
      <div className="login-form">
        <style>{`
body > div,
body > div > div,
body > div > div > div.login-form {
height: 100%;
}
`}</style>
        <Grid
          textAlign="center"
          style={{ height: '100%' }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 300 }}>
            <Form size="small">
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="Username"
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
              />
              <Form.Field
                style={{
                  overflow: 'hidden'
                }}
              >
                <Checkbox
                  style={{
                    float: 'left'
                  }}
                  label="Pegawai"
                />
              </Form.Field>
              <Button fluid size="small" color="facebook">
                Login
              </Button>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default App;
