import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from './pages/Home.jsx';
import Error404 from './pages/Error404.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="*" exact component={Error404}></Route>
      </Switch>
    </Router>
    
  );
}

export default App;
