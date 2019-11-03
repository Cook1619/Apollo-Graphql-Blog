import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Post from "./Posts/Post";
import Posts from "./Posts/Posts";
import NewPost from "./Posts/Newpost";
import "./App.css";

const defaultState = {
  isEditMode: false
}

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPH_QL_KEY,
  clientState: {
    defaults: defaultState,
    resolvers: {},
  }
});

////Running a query outside of react
// client
//   .query({
//     query: testQuery
//   })
//   .then(res => console.log(res))

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <header className="App-header">
            <Link to={"/"}>
              <h1>Graph QL App</h1>
            </Link>
          </header>
          <main>
            <Switch>
              <Route exact path="/" component={Posts} />
              <Route exact path="/post/new" component={NewPost} />
              <Route path="/post/:id" component={Post} />
            </Switch>
          </main>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
