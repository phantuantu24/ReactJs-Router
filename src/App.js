import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

function App() {

  function MyCustomNavLink({ label, to, activeOnlyWhenExact }) {
    return (
      <Route path={to} exact={activeOnlyWhenExact} children={({match}) => {
        const active = match ? 'active' : ''
        return (
          <li className={active}>
            <Link to={to} className="my-Link">{label}</Link>
          </li>
        )
      }} />
    )
  }

  return (
    <Router>
      <div className="App">
        {/* Menu */}
        <nav className="navbar navbar-default">
          <ul className="nav navbar-nav">
            <MyCustomNavLink label="Home" to="/" activeOnlyWhenExact={true}/>
            <MyCustomNavLink label="Contact" to="/contact" activeOnlyWhenExact={false}/>
            <MyCustomNavLink label="About" to="/about" activeOnlyWhenExact={false}/>
          </ul>
        </nav>
        {/* Content */}
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
