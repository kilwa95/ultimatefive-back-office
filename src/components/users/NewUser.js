import React from "react";

import { Alert, CardBody } from "reactstrap";

import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Card,
  CardHeader,
  CardTitle,
} from "reactstrap";

import {
    Row,
    Col,
  } from "reactstrap";



  class NewUser extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nom: '',
            prenom: '',
            email: '',
            password: '',
            telephone: '',
            dateNaissance: '',
            age: '',
            adresse: '',
            codePostal: '',
            ville: '',
            alert: '',
            visible: true,
            errors: {}
   
         }
    }

    handleNomChange = (event) => {
        this.setState({nom: event.target.value});
    }

    handlePrenomChange = (event) => {
        this.setState({prenom: event.target.value});
    }

    handleEmailChange = (event) => {
        this.setState({email: event.target.value});
    }

    handlePasswordChange = (event) => {
        this.setState({password: event.target.value});
    }

    handleTelephoneChange= (event) => {
      this.setState({telephone: event.target.value});
    }

    handleDateNaissanceChange= (event) => {
      this.setState({dateNaissance: event.target.value});
    }

    handleAdresseChange= (event) => {
      this.setState({adresse: event.target.value});
    }


    handleVilleChange= (event) => {
      this.setState({ville: event.target.value});
    }

    handleCodePostalChange= (event) => {
      this.setState({codePostal: event.target.value});
    }

    

    handleAgeChange = (event) => {
      this.setState({age: event.target.value});
    }

    handleInputSubmit = async (event) => {

      event.preventDefault();
        const data = {
        nom: this.state.nom,
        prenom: this.state.prenom,
        email: this.state.email,
        password: this.state.password,
        age: this.state.age,
        telephone: this.state.telephone,
        dateNaissance: this.state.dateNaissance,
        adresse:this.state.adresse,
        codePostal: this.state.codePostal,
        ville: this.state.ville


      }
      const rawResponse  = await fetch('http://127.0.0.1:8000/users',
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      const res = await rawResponse.json();
        if(res.errorsUser){
         this.setState({errors: res.errorsUser})
        }
        else{
          this.setState({alert: res})
        }
    }

    onDismiss = () => {
      this.setState({ visible: false});
    };


  render() {
    if(this.state.errors.password){
      console.log(this.state.errors.password)
    }
    return (
      <div className="content">
       <Card>
       <CardHeader>
                  <CardTitle tag="h4">add new User</CardTitle>
        </CardHeader>
        <CardBody>
      <Form>
        <Row>
        <Col>
      <FormGroup>
        <Label for="Nom">Nom</Label>
        <Input
          type="text"
          name="nom"
          id="nom"
          placeholder="Enter votre nom"
          onChange={this.handleNomChange}
        />
      </FormGroup>
      </Col>


      <Col>
      <FormGroup>
        <Label for="prenom">prenom</Label>
        <Input
          type="text"
          name="prenom"
          id="prenom"
          placeholder="prenom"
          onChange={this.handlePrenomChange}
        />
      </FormGroup>
     </Col>
        </Row>

        <Row>
        <Col>
      <FormGroup>
        <Label for="email">email</Label>
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="email"
          onChange={this.handleEmailChange}
        />
      </FormGroup>
      </Col>

      <Col>
      <FormGroup>
        <Label for="password">password</Label>
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="password"
          onChange={this.handlePasswordChange}
        />
      </FormGroup>
      </Col>
      </Row>


      <Row>
        <Col>
      <FormGroup>
        <Label for="telephone">telephone</Label>
        <Input
          type="text"
          name="telephone"
          id="telephone"
          placeholder="telephone"
          onChange={this.handleTelephoneChange}
        />
      </FormGroup>
      </Col>

      <Col>
      <FormGroup>
        <Label for="age">age</Label>
        <Input
          type="text"
          name="age"
          id="age"
          placeholder="age"
          onChange={this.handleAgeChange}
        />
      </FormGroup>
      </Col>

      <Col>
      <FormGroup>
        <Label for="dateNaissance">date Naissance</Label>
        <Input
          type="date"
          name="dateNaissance"
          id="dateNaissance"
          placeholder="dateNaissance"
          onChange={this.handleDateNaissanceChange}
        />
      </FormGroup>
      </Col>
      </Row>

      <FormGroup>
        <Label for="adresse">adresse</Label>
        <Input
          type="text"
          name="adresse"
          id="adresse"
          placeholder="adresse"
          onChange={this.handleAdresseChange}
        />
      </FormGroup>


      <Row>
        <Col>
      <FormGroup>
        <Label for="codePostal">codePostal</Label>
        <Input
          type="text"
          name="codePostal"
          id="codePostal"
          placeholder="codePostal"
          onChange={this.handleCodePostalChange}
        />
      </FormGroup>
      </Col>

      <Col>
      <FormGroup>
        <Label for="ville">ville</Label>
        <Input
          type="text"
          name="ville"
          id="ville"
          placeholder="ville"
          onChange={this.handleVilleChange}
        />
      </FormGroup>
      </Col>
      </Row>

      <FormGroup check>
        <Label check>
          <Input type="checkbox" />{' '}
          Check me out
          <span className="form-check-sign">
            <span className="check"></span>
        </span>
        </Label>
      </FormGroup>
      <Button onClick={this.handleInputSubmit} className="mt-3" color="primary" type="submit">
        Submit
      </Button>

        {this.state.alert ?  <Alert color="success mt-5" isOpen={this.state.visible} toggle={this.onDismiss}>{this.state.alert} </Alert> :''}

        {this.state.errors.password ?  <Alert color="danger mt-4" isOpen={this.state.visible} toggle={this.onDismiss}>{this.state.errors.password} </Alert> :''}
        {this.state.errors.email ?  <Alert color="danger mt-4" isOpen={this.state.visible} toggle={this.onDismiss}>{this.state.errors.email} </Alert> :''}
        </Form>
        </CardBody>
        </Card>
    </div>

        );
    }

  } 
  
export default NewUser;