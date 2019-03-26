import React, { Component } from 'react'

class Post extends Component {
  render() {
    return (
      <div>
        <div>
           Title: { this.props.post.title } </div> <div>
           link: { this.props.post.url } Author: { this.props.post.author.user.lastName } </div>
      </div>
    )
  }
}

export default Post