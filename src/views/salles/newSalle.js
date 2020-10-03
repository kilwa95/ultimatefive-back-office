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

  import ImageUploader from 'react-images-upload';





  class NewSalle extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {
          nomSalle: '',
          description: '',
          km: '',
          tarif: '',
          adresse: '',
          codePostal: '',
          ville: '',
          alert: '',
          visible: true,
          pictures: [],
          categories: [],
          categorie: ''
         }
  }

  componentDidMount(){
    fetch('http://127.0.0.1:8000/salles/categorie')
    .then(response => response.json())
    .then( categories => {
      this.setState({ categories: categories})
    })
  }

  handleNomSalleChange = (event) => {
    this.setState({nomSalle: event.target.value});
  }

  handleDescriptionChange= (event) => {
    this.setState({description: event.target.value});
  }

  handleKmChange = (event) => {
    this.setState({km: event.target.value});
  }

  handleTarifChange= (event) => {
    this.setState({tarif: event.target.value});
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

  handleCategorieChange = (event) => {
    this.setState({categorie: event.target.value});
  }


  handleImagesChange = (picture) => {
    this.setState({
      pictures: this.state.pictures.concat(picture),
  });
  }

  onDismiss = () => {
    this.setState({ visible: false});
  };

  handleInputSubmit = async (event) => {
    event.preventDefault();

    const  data = {
      nomSalle: this.state.nomSalle,
      description: this.state.description,
      km: this.state.km,
      tarif: this.state.tarif,
      adresse: this.state.adresse,
      codePostal: this.state.codePostal,
      ville: this.state.ville,
      categorie: this.state.categorie,
      pictures: [...this.state.pictures]
    }
    console.log(data)

  
    const rawResponse  = await fetch('http://127.0.0.1:8000/salles',
    {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data,['nomSalle','description','km','tarif','dateMatche','adresse','codePostal','ville','pictures','name','type','categorie'])
    })
    const res = await rawResponse.json();
    if(res.alert){
      this.setState({alert: res.alert})
    }

  }




  render() {
    const categories = this.state.categories
    return(
      <div className="content">
      <Card>
      <CardHeader>
          <CardTitle tag="h4">add new salle</CardTitle>
       </CardHeader>
       <CardBody>
     <Form>
       
      <Row>
       <Col>
     <FormGroup>
       <Label for="NomSalle">nom Salle</Label>
       <Input
         type="text"
         name="nomSalle"
         id="NomSalle"
         placeholder="Enter le nom du salle"
         onChange={this.handleNomSalleChange}
       />
     </FormGroup>
     </Col>

     <Col>
     <FormGroup>
        <Label for="exampleSelectMulti1">Type du sport</Label>

        <Input type="select" name="selectMulti" id="exampleSelectMulti1" multiple onChange={this.handleCategorieChange}>
        {categories.map(categorie => (
          <option>{categorie.nom}</option>
          ))}

        </Input>

      </FormGroup>
      </Col>

     </Row>

     <Row>
     <Col>
     <FormGroup>
       <Label for="description">description</Label>
       <Input
         type="textarea"
         name="description"
         id="description"
         placeholder="description"
         onChange={this.handleDescriptionChange}
       />
     </FormGroup>
    </Col>
    </Row>

     <Row>
       <Col>
     <FormGroup>
       <Label for="km">Km</Label>
       <Input
         type="number"
         name="km"
         id="km"
         placeholder="km"
         onChange={this.handleKmChange}
       />
     </FormGroup>
     </Col>


     <Col>
     <FormGroup>
       <Label for="tarif">tarif</Label>
       <Input
         type="number"
         name="tarif"
         id="tarif"
         placeholder="tarif"
         onChange={this.handleTarifChange}
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


     <Row>
    <Col xs={12} sm={4} md={3}>
        <CardTitle>image</CardTitle>
        <ImageUploader
                withIcon={false}
                buttonText='Choose images'
                onChange={this.handleImagesChange}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            />
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

       </Form>
       </CardBody>
       </Card>
   </div>
    );

  }

}


  export default NewSalle;