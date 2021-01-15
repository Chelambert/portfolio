import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import Header from './components/Header/Header';
import Home from './pages/HomePage/HomePage';
import Jokes from './pages/JokesPage/JokesPage';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/jokes' component={Jokes} />
      </Switch>
    </div>
  );
}

export default App;
