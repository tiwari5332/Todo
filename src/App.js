import logo from './logo.svg';
import './App.css';
import Todo from './component/Todo'
import Solution1 from './component/Solution1'
import Solution2 from './component/Solution2'
import Solution3 from './component/Solution3'
import Solution4 from './component/Solution4'
import Solution5 from './component/Solution5'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
function App() {
  return (
    <div className="App">
  <Router>
    <div className="app-2">
    <div className="logo">
      <h1>Shubham</h1>
    </div>
    <div className="nav" >
        <Link  to="/Todo" className="Link">Todo</Link>
        <Link  to="/Solution1" className="Link">Solution1</Link>
        <Link  to="/Solution2" className="Link">Solution2</Link>
        <Link  to="/Solution3" className="Link">Solution3</Link>
        <Link  to="/Solution4" className="Link">Solution4</Link>
        <Link  to="/Solution5" className="Link">Solution5</Link>
    </div>
    </div>
      <Switch>
      <Route path="/Todo">
           <Todo/>
      </Route>
      <Route path="/Solution1">
           <Solution1/>
      </Route>
      <Route path="/Solution2">
           <Solution2/>
      </Route>
      <Route path="/Solution3">
           <Solution3/>
      </Route>
      <Route path="/Solution4" >
           <Solution4/>
      </Route>
      <Route path="/Solution5" >
           <Solution5/>
      </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
