import { BrowserRouter, Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import Navbar from './component/Navbar';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path='/' component={LoginPage} />
        <Route exact path='/admin' component={Dashboard} />
        {/* <Route exact path='/logout' component={Dashboard} /> */}
        <Dashboard />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
