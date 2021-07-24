import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PersonalNavbar from './components/Navbar';
import About from './pages/about.js';
import './App.css';


function App() {
  return (
    <Router>
      <PersonalNavbar />
      <Switch>
        <Route path='/' exact component={About} />
      </Switch>
    </Router>
  );
}

export default App;
