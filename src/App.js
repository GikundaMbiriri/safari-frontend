import logo from './logo.svg';
import './App.css';
import Drawer from './components/drawer/Drawer';
import Header from './components/header/Header';
import Table from './components/table/Table';
import Footer from './components/footer/Footer';
import { HashRouter as Router ,Route,Switch} from "react-router-dom";
import home from './pages/home/home'
import login from './pages/login/login';
import adminlogin from './pages/login/admin';
import create from './pages/managers/create';
function App() {
  return (
   <>
   <Router>
    <Switch>
    <Route exact path="/" component={login}/>

       <Route exact path="/home" component={home}/>
       <Route exact path="/admin" component={adminlogin}/>
       <Route exact path="/create" component={create}/>

    </Switch>
   </Router>
{/* <Footer/> */}
   </>
  );
}

export default App;
