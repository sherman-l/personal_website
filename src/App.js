import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DarkNavbar from './components/Navbar/Navbar.js';
import Home from './pages/Home/home.js';
import Projects from './pages/Projects/projects.js';
import Experience from './pages/Experience/experience.js';
import NotFound from './pages/NotFound/NotFound.js'
import ExternalLinkSection from './components/ExternalLinkSection/ExternalLinkSection.js'

const root =  '/personal_website';


function App() {
    return (
        <>
    		<Router>
            	<DarkNavbar/>
    			<Switch>
        			<Route path={root} exact component={Home} />
        			<Route path={`${root}/projects`} exact component={Projects} />
        			<Route path={`${root}/experience`} exact component={Experience} />
					<Route component={NotFound} />
    			</Switch>
    		</Router>
    		<ExternalLinkSection/>
	    </>
    );
}

export default App;
