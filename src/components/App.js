import React, { Component } from 'react';
import PostList from './PostList'
import logo from '../logo.svg';
import '../styles/App.css';
import { Grid, Row, Col } from 'react-flexbox-grid';

class App extends Component {
  render() {
    return (
    <Grid fluid>
      <Row>
        <Col xs={12} md={6}>
          <PostList />
        </Col>
      </Row>
    </Grid>
      );
  }
}

export default App;
