import React from 'react';
import { InputGroup, InputGroupAddon, Input, Button, Form, FormGroup, Label } from 'reactstrap';


class Newsletter extends React.Component {
  render() {
    return (
      <div className="formWrapper">
        <p className="lead">Ne maradj le a legújabb akciókról, értesülj róluk első kézből!</p>
        <Form inline className={"former"}>
          <InputGroup className={"marL"}>
            <InputGroupAddon htmlFor="newsletter" className="bg-white">@</InputGroupAddon>
            <Input type="email" name="email" className="bg-grey search" id="newsletter" size="md"  placeholder="e-mail cím" />
          </InputGroup>
          <Button size="md" className={"marL bg-grey"}>Submit</Button>
          <FormGroup check className="display-block pad">
            <Label check>
              <Input type="radio" name="radio1" required />{' '}
              Elolvastam és megértettem az adatkezelési tájékoztatót
            </Label>

          </FormGroup>
          <hr className="hr" />
        </Form>

      </div>
    );
  }
}

export default Newsletter;
