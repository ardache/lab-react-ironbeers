import React, { Component, Container } from 'react'
 import BeersServices from '../services/beer.services'
 import Nav from './Nav'
 //import Container from 'react-bootstrap/Container'
 //import Row from 'react-bootstrap/Row'
 //import Col from 'react-bootstrap/Col'

 class BeerDetail extends Component {

     constructor(props) {
         super(props)
         this.state = { beer: {} }
         this.services = new BeersServices()
     }

     componentDidMount = () => this.getBeerDetails()

     getBeerDetails = () => {
         this.services.getBeerDetails(this.props.match.params.idx)
             .then(theBeer => this.setState({ beer: theBeer }))
             .catch(err => console.log(err))
     }

     render() {
         return (
             <>
                 <Nav />
                 <Container className="beer-details">
                     {/* <Row> */}
                         {/* <Col md={{ span: 4, offset: 1 }}> */}
                             <img src={this.state.beer.image_url} alt={this.state.beer.name} />
                         {/* </Col>
                         <Col md={{ span: 5, offset: 1 }}> */}
                             <h2> {this.state.beer.name} </h2>
                             <p>{this.state.beer.tagline}</p>
                             <p>{this.state.beer.first_brewed}</p>
                             <p>{this.state.beer.attenuation_level}</p>
                             <p>{this.state.beer.description}</p>
                             <small><strong>Contributed by:</strong> {this.state.beer.contributed_by}</small>
                         {/* </Col> */}
                     {/* </Row> */}
                 </Container>
             </>
         )
     }
 }

 export default BeerDetail