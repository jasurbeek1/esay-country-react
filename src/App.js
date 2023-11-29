import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ArticlesList from './ArticlesList';
import Article from './Article';

function App() {
  return (
    <Router>
      <Route exact path="/" component={ArticlesList} />
      <Route path="/article/:id" component={Article} />
    </Router>
  );
}

export default App;