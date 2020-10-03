import React from "react";
import classnames from "classnames";


import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Col
  } from "reactstrap";

class Login extends React.Component {
    state = {};
    componentDidMount() {
      document.body.classList.toggle("login-page");
    }
    componentWillUnmount() {
      document.body.classList.toggle("login-page");
    }
    
    render() {
    return(
        <>
            <div className="content">
            <Container>
            <Col className="ml-auto mr-auto" lg="4" md="6">
              <Form className="form">
                <Card className="card-login card-white">
                  <CardHeader>
                    <img
                      alt="..."
                      src={require("assets/img/card-primary.png")}
                    />
                    <CardTitle tag="h1">Log in</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <InputGroup
                      className={classnames({
                        "input-group-focus": this.state.emailFocus
                      })}
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="tim-icons icon-email-85" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Email"
                        type="text"
                        onFocus={e => this.setState({ emailFocus: true })}
                        onBlur={e => this.setState({ emailFocus: false })}
                      />
                    </InputGroup>
                    <InputGroup
                      className={classnames({
                        "input-group-focus": this.state.passFocus
                      })}
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="tim-icons icon-lock-circle" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Password"
                        type="text"
                        onFocus={e => this.setState({ passFocus: true })}
                        onBlur={e => this.setState({ passFocus: false })}
                      />
                    </InputGroup>
                  </CardBody>
                  <CardFooter>
                    <Button
                      block
                      className="mb-3"
                      color="primary"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                      size="lg"
                    >
                    Login
                    </Button>
                    <div className="pull-left">
                
                    </div>
                    <div className="pull-right">
                     
                    </div>
                  </CardFooter>
                </Card>
              </Form>
            </Col>
          </Container>
            </div>
        </>
    );
    }
}

export default Login