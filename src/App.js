import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MenuList from './components/MenuList/MenuList';
import routes from './App-routing'

function App() {

  const showContent = (routes) => {
    if (routes.length > 0) {
      return routes.map((route, index) => (
        <Route 
          key={index} 
          path={route.path} 
          exact={route.exact} 
          component={route.main}/>
      ))
    }
  }

  return (
    <Router>
      <div className="App">
        {/* Menu */}
        <MenuList />
        {/* Content */}
        <Switch>
          {showContent(routes)}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
