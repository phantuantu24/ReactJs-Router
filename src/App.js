import './App.css';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Menu */}
        <nav className="navbar navbar-inverse">
          <ul className="nav navbar-nav">
            {/* <li>
              <NavLink activeStyle={{
                backgroundColor: 'white',
                color: 'red'
              }} exact="true" to="/" className="my-NavLink">Home</NavLink>
            </li> */}
            <li>
              <NavLink activeClassName="active" exact to="/" className="my-NavLink">Home</NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/contact" className="my-NavLink">Contact</NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/about" className="my-NavLink">About</NavLink>
            </li>
          </ul>
        </nav>
        {/* Content */}
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/> 
      </div>
    </Router>
  );
}

export default App;
