import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'

class Post extends Component {
  render() {
    return (
  <Card style={{ width: '30rem' }}>
    <Card.Body>
      <Card.Title>{ this.props.post.title }</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{ this.props.post.author.user.firstName } { this.props.post.author.user.lastName}</Card.Subtitle>
      <Card.Text>
        { this.props.post.description }
      </Card.Text>
      <Card.Link target="_blank" href={ this.props.post.url }>Full Story</Card.Link>
      <Card.Link href="#">Comments</Card.Link>
    </Card.Body>
  </Card>
    )
  }
}

export default Post