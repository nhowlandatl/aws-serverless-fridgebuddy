import React, { Component } from "react";
import { connect } from "react-redux";
// Import React components
import {
  MDBContainer,
  MDBCard,
  MDBCol,
  MDBRow,
  MDBCardImage,
  MDBBtn
} from "mdbreact";
import "./FullPageIntroWithFixedNavbar.css";  
import { Auth } from 'aws-amplify';

// Local imports
import "./Fridge.css"; 
import { fetchFridge } from '../actions/fridgeActions'
import { clearProducts } from '../actions/fridgeActions'
// import { getUserFridge } from '../actions/fridgeActions' 

export class Fridge extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  // Retrieve users' fridge to render
  componentDidMount() {
    this.props.clearProducts()
    Auth.currentUserInfo()
      .then(user => {
        this.props.fetchFridge(user)
      })
  }
  // getFridge(user) {
  //   let apiName = 'globalindextest';
  //   let path = '/fridgeitems';
  //   let params = {
  //     response: true,
  //     queryStringParameters: {
  //       username: user.username
  //     }
  //   }
  //   API.get(apiName, path, params)
  //   .then(response => {
  //     const userFridge = response.data;
  //     console.log(userFridge)
  //     this.props.getUserFridge(userFridge)
  //     // this.getFridgeContents(response.data)
  //     // There's a problem here, needs to be async redux
  //     // const fridgeItems = response.data; 
  //     // console.log(fridgeItems) 
  //     // this.setState({ items: response.data })
  //   })
  //   .catch(error => {
  //     console.log(error.response)
  //   })
  // }
  
  // Delete item from fridge
  // To be implemented
  // onDelete(item) {
  //   const product = {
  //     id: item.id,
  //   };
  // }
  // onDelete = (item) => {
  //   let apiName = 'globalindextest'; 
  //   let path = '/fridgeitems';
  //   let date = new Date();
  //   API.post(apiName, path, {
  //     body: {
  //       id: uuidv4(),
  //       username: this.props.user.username,
  //       expiration: '1-22-2021',
  //       createdAt: date, 
  //       product_id: item.id,
  //       product_image: item.image,
  //       product_name: item.title,
  //     }
  //   })
  //   .then(response => {
  //     console.log(response)
  //   })
  //   .catch(error => {
  //     console.log(error.response)
  //   });
  // };

  render() {
    return (
      <MDBContainer className="header-padding">
        <h2>Welcome to Your Fridge!</h2>
        <h5>Here is what's currently in your fridge.</h5>
        {this.props.fridgeItems.length > 1 && (
            <MDBRow>
            {this.props.fridgeItems.map((item) => {
              return (
                <MDBCol  xs="12" sm="6" md="4" lg="3" className="padding justify-content-center">
                  <MDBCard className="card align-items-center padding h-100">
                    <MDBCardImage
                      className="img-fluid padding"
                      src={item.product_image}
                      alt=""
                    />
                    <MDBBtn
                      className="mt-auto"
                      color="red"
                      onClick={() => {
                        this.onDelete(item);
                        alert("This item was removed from your fridge");
                      }}
                    >
                      Remove item from fridge
                    </MDBBtn>
                  </MDBCard>
                </MDBCol>
              );
            })}
          </MDBRow>
            )    
          }
      </MDBContainer>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.fridge.user,
    fridgeItems: state.fridge.fridgeItems,
    loading: state.fridge.loading,
    hasErrors: state.fridge.hasErrors,
    products: state.fridge.products
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchFridge: (fridgeItems) => dispatch(fetchFridge(fridgeItems)),
    clearProducts: () => dispatch(clearProducts())
    // getUserFridge: (userFridge) => dispatch(getUserFridge(userFridge)) 
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Fridge);