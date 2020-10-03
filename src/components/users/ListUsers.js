import React from "react";
// react component for creating dynamic tables


import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Row,
  Col,

} from "reactstrap";


import ReactTable from "react-table";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons'





class ListUsers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           users: [],
           loaded: false     
         }
}

    componentDidMount(){
      fetch('http://127.0.0.1:8000/users')
      .then(response => response.json())
      .then(users => {
        this.setState({users: users,loaded: true})
      })
    }

render() {

  if(this.state.loaded){
    return (
      <div className="content">
      <Row className="mt-5">
            <Col xs={12} md={12}>
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Users</CardTitle>
                </CardHeader>
                <CardBody>
                  <ReactTable
                    data={this.state.users}
                    filterable
                    resizable={false}
                    columns={[
                      {
                        Header: "Nom",
                        accessor: "nom"
                      },
                      {
                        Header: "Prenom",
                        accessor: "prenom"
                      },
                      {
                        Header: "Email",
                        accessor: "email"
                      },
                      {
                        Header: "age",
                        accessor: "age"
                      },

                      {
                        Header: "date naissance",
                        accessor: "dateNaissance"
                      },


                      {
                        Header: "Telephone",
                        accessor: "telephone"
                      },

                      {
                        Header: "Adresse",
                        accessor: "adresse"
                      },
                      {
                        Header: "Ville",
                        accessor: "ville"
                      },

                      {
                        Header: "Code postal",
                        accessor: "codePostal"
                      }

                    ]}
                    defaultPageSize={10}
                    showPaginationTop
                    showPaginationBottom={false}
                    className="-striped -highlight"
                  />
                </CardBody>
              </Card>
            </Col>
          </Row>

    </div>
  
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

export default ListUsers;