import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Post from './Posts/Post';
import Posts from './Posts/Posts';
import NewPost from './Posts/Newpost';
import "./App.css";

const client = new ApolloClient({
  uri: "https://api-useast.graphcms.com/v1/ck2icsytx24f101dccqr25u5v/master"
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
            <Link to={'/'}>
              <h1>Graph QL App</h1>
            </Link>
          </header>
          <Link to={'/post/new'}>New Post</Link>
          <Switch>
            <Route exact path="/" component={Posts}/>
            <Route exact path="/post/new" component={NewPost}/>
            <Route path="/post/:id" component={Post}/>
          </Switch>    
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
