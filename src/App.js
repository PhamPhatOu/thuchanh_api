import { Container } from 'react-bootstrap';
import './App.css';
import './Component/navigation';
import Clock from './Component/table';
import './Component/body'
import { BrowserRouter, Route,  } from 'react-router-dom';
import Navigation from './Component/navigation';
import { Switch } from 'react-router-dom';
import About from './Component/About';
import Home from './Component/Home';
import userDetail from './Component/userDetail';
import Modal from './Component/Modal';
function App() {
  return (
 
      <Container>
            <BrowserRouter>
              <Navigation/>
              <Switch>
                <Route exact path="/Home" component={Home} />
                <Route exact path="/About" component={About} />
                <Route exact path="/User" component={Clock} />
                <Route exact path="/modal" component={Modal}/>
                {/* <Route exact path="/User/:UserID/userDetail" component={userDetail}/> */}
              </Switch>
            </BrowserRouter>
      </Container>
  
  );
}

export default App;
