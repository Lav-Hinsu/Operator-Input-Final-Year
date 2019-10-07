import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { logoutUser } from "../actions";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavItem, NavDropdown, Glyphicon, Button, Card, Container, Row, Col, Jumbotron } from "react-bootstrap";
import { CardText } from "react-bootstrap/Card";
import { sizeHeight } from "@material-ui/system";

class Home extends Component {
  handleLogout = () => {
    const { dispatch } = this.props;
    dispatch(logoutUser());

  };

  render() {

    const { isLoggingOut, logoutError } = this.props;
    return (
      <div >
        <Navbar bg="light" variant="light">
          <Navbar.Brand href="/">Operator Platform </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/automatedcaptures">Automated Captures</Nav.Link>
            <Nav.Link href="/manualcorrections">Manual Correction</Nav.Link>
            <Nav.Link href="/livefeed">Live Feed</Nav.Link>
          </Nav>
          <Button variant="light" onClick={this.handleLogout} > Log Out</Button>
        </Navbar>
        
          <Jumbotron fluid style={{
            backgroundColor: "white",
            margin:"4%",
            textAlign:"left"

          }}>
            <h1>  Welcome Operator !</h1>
            <p>   This project is in development ! there will be bugs!</p>
            <h1>  What can you do currently?</h1>
            <p>
              You can see automated image and text captures, plus you can manually correct any errors in the OCR software!
          </p>
            <h1>  What about the Live Feed?</h1>
            <p>
              We have no camera yet! Live Feed is a coming soon feature!
          </p>

          </Jumbotron>

        

      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    isLoggingOut: state.auth.isLoggingOut,
    logoutError: state.auth.logoutError
  };
}

export default connect(mapStateToProps)(Home);
