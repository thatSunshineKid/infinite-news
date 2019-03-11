import React, { Component } from 'react'
import Post from './Post'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'


const POST_QUERY = gql`
{
  allPosts {
    title
    id
    url
    author {
      user {
        firstName
        lastName
      }
    }
  }
}
`


class PostList extends Component {
  render() {


    return (
  <Query query={POST_QUERY}>
    {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>

          const PostsToRender = data.allPosts

          return (
            <div>
              {PostsToRender.map( x => <Post key={ x.id } post={x} />)}
            </div>
          )
        }}
  </Query>
)
  }
}

export default PostList