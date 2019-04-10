import React, { Component } from 'react';
import PostList from './PostList'
import logo from '../logo.svg';
import '../styles/App.css';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Navbar from 'react-bootstrap/Navbar';

class App extends Component {
  render() {
    return (
  <>
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        {'NewsFlash'}
      </Navbar.Brand>
    </Navbar>
    <br />
    <Grid fluid>
      <Row>
        <Col xs={12} md={6}>
          <PostList />
        </Col>
      </Row>
    </Grid>
  </>
      );
  }
}

export default App;
