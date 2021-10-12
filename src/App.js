import './App.css';
import Main from './Components/Main';
import './styles.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Contactus from './Components/Contactus';
import Errorpage from './Components/Errorpage';
function App() {
  return (
    
    <div className="App" style={{
      background: 'url("../images/background.jpg")',
      backgroundSize: "cover",
      backgroundRepeat:"no-repeat",
      
  }}>
      <Router>
      <div>
        <Switch>
          <Route path="/Home" exact>
            <Main />
          </Route>
          <Route path="/contactus" exact>
            <Contactus />
          </Route>
          <Route path="/" exact>
            <Main />
          </Route>
          <Route>
            <Errorpage />
          </Route>
        </Switch>
      </div>
    </Router>
     
     </div>
  );
}

export default App;
