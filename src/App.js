import { Route, Switch } from 'react-router';
import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Jokes from './pages/Jokes/Jokes';

function App() {
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
