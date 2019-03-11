import React, { Component } from 'react'

class Post extends Component {
  render() {
    return (
      <div>
        <div>
           { this.props.post.id } { this.props.post.title}
           { this.props.post.url }
        </div>
      </div>
    )
  }
}

export default Post