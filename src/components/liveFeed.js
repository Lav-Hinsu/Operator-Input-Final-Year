import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { logoutUser } from "../actions";
import 'bootstrap/dist/css/bootstrap.min.css';

import automatedCaptures from "./automatedCaptures";
import { Navbar, Nav, NavItem, NavDropdown, Glyphicon, Button, Card, Container, Row, Col, Jumbotron } from "react-bootstrap";
import { CardText } from "react-bootstrap/Card";
import { sizeHeight } from "@material-ui/system";


class LiveFeed extends Component {
  handleLogout = () => {
    const { dispatch } = this.props;
    dispatch(logoutUser());

  };

  render() {

    const { isLoggingOut, logoutError } = this.props;
    return (
      <div>
        <Navbar bg="light" variant="light">
          <Navbar.Brand href="/">Operator Platform </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/AutomatedCaptures">Automated Captures</Nav.Link>
            <Nav.Link href="/ManualCorrection">Manual Correction</Nav.Link>
            <Nav.Link href="/LiveFeed">Live Feed</Nav.Link>
          </Nav>
          <Button variant="light" onClick={this.handleLogout} > Log Out</Button>
        </Navbar>

        <Jumbotron fluid style={{
            backgroundColor: "white",
            margin:"14%",
            textAlign:"center"

          }}>
            <h1>Live Feed Coming Soon !</h1>
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

export default connect(mapStateToProps)(LiveFeed);

