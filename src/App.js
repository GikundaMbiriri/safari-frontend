import logo from './logo.svg';
import './App.css';
import Drawer from './components/drawer/Drawer';
import Header from './components/header/Header';
import Table from './components/table/Table';
import Footer from './components/footer/Footer';
import { BrowserRouter as Router ,Route,Switch} from "react-router-dom";
import home from './pages/home/home'
import login from './pages/login/login';
import create from './pages/managers/create';
function App() {
  return (
   <>
   <Router>
    <Switch>
       <Route exact path="/home" component={home}/>
       <Route exact path="/create" component={create}/>
       <Route exact path="/" component={login}/>

    </Switch>
   </Router>
<Footer/>
   </>
  );
}

export default App;
