import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import NotFound from './components/NotFound/NotFound';
import MenuList from './components/MenuList/MenuList';

function App() {

  
  return (
    <Router>
      <div className="App">
        {/* Menu */}
        <MenuList />
        {/* Content */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route component={NotFound}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
