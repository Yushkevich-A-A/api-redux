import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import ServicesPage from './pages/ServicesPage/ServicesPage';
import EditItemPage from './pages/EditItemPage/EditItemPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/serviсes/:id' component={console.log('необходимый рут')}/>
          <Route exact path='/services' component={ServicesPage}/>
          {/* <Route exact path='/'><Redirect to='/services'/></Route> */}
          <Route component={console.log('нене')}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
