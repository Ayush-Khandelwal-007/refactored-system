import './App.css';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import StudentDashboard from './pages/StudentDashboard';
import Login from './pages/Login';
import Landing from './pages/Landing';
import FnA from './pages/FnA';

function App() {
  return (
    <div className="App">
      <Router>
      <div className="App">
        <Switch>
          <Route exact path="/studentDashboard">
              <StudentDashboard/>
          </Route>
          <Route exact path="/HODDashboard">
          </Route>
          <Route exact path="/FnADashBoard">
            <FnA/>
          </Route>
          <Route exact path="/Login">
            <Login/>
          </Route>
          <Route path="/">
            <Landing/>
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
