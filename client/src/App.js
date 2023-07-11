import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { setContext } from '@apollo/client/link/context';
import Main from './pages/Main';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Header from './components/Header';
import Footer from './components/Footer';
import JobPosting from './pages/JobPosting';

import './App.css';


const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
      <div className="App">
        <Header />
        <div>
        <Routes>
          <Route 
            path="/"
            element={<Main />}
          />
          <Route 
            path="/signup"
            element={<Signup />}
          />
          <Route 
            path="/login"
            element={<Login />}           
          />
            <Route 
            path="/job/:_id"
            element={<JobPosting />}           
          />
        </Routes>
        </div>
        <Footer />
      </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
