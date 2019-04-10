import React, { Component } from 'react'
import Post from './Post'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import thunderbolt from '../../src/thunderbolt.png'


const POST_QUERY = gql`
{
  allPosts {
    title
    id
    url
    description
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
          if (loading) return <img src={ thunderbolt } />
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