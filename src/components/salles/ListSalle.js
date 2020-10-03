import React from "react";



import {
    Card,
    CardBody,
    Table,
  } from "reactstrap";

  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons'



class ListSalle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            salles: [],
            loaded: false  
         }
}

componentDidMount(){
    fetch('http://127.0.0.1:8000/salles/'+`${this.props.idCategorie}`)
    .then(response => response.json())
    .then( salles => {
        console.log(salles)
      this.setState({ salles:  salles,loaded: true})
    })
  }


render() {
    const id  = this.props.idCategorie

    if(this.state.loaded){
        const salles = this.state.salles;
    return(
    <div className="content">
    <Card>
    <CardBody>
        <Table responsive>
        <thead>
        <tr>
           <th className="text-center">image salle</th>
            <th>nom Salle</th>
            <th>km</th>
            <th>tarif</th>
            <th>adresse</th>
            <th>code postal</th>
            <th>ville</th>
            
        </tr>
    </thead>
    
    {salles.map(salle =>(
    <tbody>
        <tr>
            <td className="text-center">
                <img
                alt="..."
                src={require("assets/img/foot/terraine-foot.jpeg")}
                height="100px"
                />
            </td>
           <td>{salle.nomSalle}</td>
            <td>{salle.km}</td>
            <td>{salle.tarif}</td>
            <td>{salle.adresse}</td>
            <td>{salle.codePostal}</td>
            <td>{salle.ville}</td>
        </tr>
    </tbody>
        ))}
        </Table>
    </CardBody>
</Card>
       </div>
    )
    }
    else{
        return (
            <div  className="content" style={{width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <FontAwesomeIcon icon={faSyncAlt} size="6x" spin  />  
            </div>
          )
    }

}


}


export default ListSalle;