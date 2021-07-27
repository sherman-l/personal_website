import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DarkNavbar from './components/Navbar/Navbar.js';
import Home from './pages/Home/home.js';
import Projects from './pages/Projects/projects.js'
import About from './pages/About';
import './App.css';


function App() {
  return (
    <Router>
      <DarkNavbar/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/projects' exact component={Projects} />
      </Switch>
    </Router>
  );
}

export default App;
