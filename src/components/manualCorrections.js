import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { logoutUser } from "../actions";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavItem, NavDropdown, Glyphicon, Button, Card, CardImg, CardGroup, Image, flex } from "react-bootstrap";

class ManualCorrections extends Component {
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

        <div style={{
          flexDirection: "row",
        }}>
          <div style={{ margin: "1%", }}>
            <Image style={{ width: 110, height: 50 }}
              resizeMode='contain' src="https://firebasestorage.googleapis.com/v0/b/operator-confirm.appspot.com/o/Test?alt=media&token=2e517557-4460-4e34-a393-61dcb4a49c78" fluid />
            <text> timestamp </text>
            <Button onClick={() => { }}>Correct</Button>
            <text> </text>
            <Button onClick={() => { }}>Incorrect</Button>

          </div>
        </div>
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
function displayImage(state) {
  return <div style={{ margin: "1%", }}>
    <Image style={{ width: 110, height: 50 }}
      resizeMode='contain' src="https://firebasestorage.googleapis.com/v0/b/operator-confirm.appspot.com/o/Test?alt=media&token=2e517557-4460-4e34-a393-61dcb4a49c78" fluid />
    <text> timestamp </text>
    <Button onClick={() => { }}>Correct</Button>
    <text> </text>
    <Button onClick={() => { }}>Incorrect</Button>
  </div>
}

export default connect(mapStateToProps)(ManualCorrections);
