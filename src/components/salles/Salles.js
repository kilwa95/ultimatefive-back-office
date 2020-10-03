import React from "react";
import ListSalle from "components/salles/ListSalle"

import { BrowserRouter as Router,Route ,Switch ,NavLink} from "react-router-dom";
import { Nav, NavItem} from 'reactstrap';
import { Row, Col} from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons'




class Salles extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            categorieId: '',
            loaded: false  


         }
}


  componentDidMount(){
    fetch('http://127.0.0.1:8000/categories')
    .then(response => response.json())
    .then( categories => {
      this.setState({ categories: categories,loaded:true})
    })
  }

    render() {
      if(this.state.loaded){
        const categories = this.state.categories
        return (
            <>
            <div className="content">
            <Router>
            <Row>
            <Col md={4} xs={12}>
            <Nav pills className="nav nav-pills  flex-column">
                
            {categories.map(categorie => (
        
            <NavItem>
        <NavLink className= "nav-link nav-item active bg-primary  mt-3"  to={`/salles/${categorie.nom}`}>{categorie.nom}</NavLink> 
            </NavItem>
          
        ))}

    
            </Nav>
            </Col>
            <Col md={8} xs={12}>
            {categories.map(categorie => (

              <Switch>
                <Route  path={`/salles/${categorie.nom}`}  component={() => <ListSalle idCategorie={categorie.id} />} />
              </Switch>
              ))}



              </Col>
              </Row>
            </Router>
            </div>
            
          </>
           
        );
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

export default Salles

    