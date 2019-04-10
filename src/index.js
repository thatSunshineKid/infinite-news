import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
  uri: "https://newsflashback.herokuapp.com/graphql/"
});
// const client = new ApolloClient({
//   uri: "http://localhost:3080/graphql/"
// });

function HomeComponent() {
  return (
  <>
    <script src="https://unpkg.com/react/umd/react.production.js" crossorigin />
    <script src="https://unpkg.com/react-dom/umd/react-dom.production.js" crossorigin />
    <script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js" crossorigin />
    <script>var Alert = ReactBootstrap.Alert;</script>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </>
  );
}
// Test query to make sure graphql is hooked up properly
// client
//   .query({
//     query: gql`
//       {
//         allPosts {
//           id
//           title
//           author {
//             user {
//               firstName
//               lastName
//             }
//           }
//           url
//         }
//       }
//     `
//   })
//   .then(result => console.log(result));

ReactDOM.render(
  <HomeComponent />,

  document.getElementById('root')

  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
