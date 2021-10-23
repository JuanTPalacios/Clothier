import './styles/app.css';
import { useState, useEffect } from 'react';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomeDash from './components/HomeDash/HomeDash';
import Register from './components/Register/Register';
import ItemDetail from './components/ItemDetailsTest/ItemDetail';
import MyCloset from './components/MyCloset/MyCloset';
import UserCloset from './components/UserCloset/UserCloset';
import LoginPage from './components/LoginPage/LoginPage';
import actions from './redux/actions';
import { connect } from 'react-redux';
import apiService from './apiServices';
import logo from './utils/ClothierLiteCrop.png'
import fetchService from './fetchService'

interface user  {
  firstName: string
  lastName: string
  username: string
  email: string
  password: string
  primaryKey: number
}

interface props {
  getItems: Function
  getUser: Function
   user: user
   setSearchVal: Function
    searchVal: string
}

function App({getItems, getUser, user, setSearchVal, searchVal}: props): JSX.Element {
  const [authenticated, setAuthenticated] = useState<boolean>(false);

  //UseEffect:
  useEffect(() => {
    async function fetchData () {
      const {itemArr, userInfo} = await fetchService(accessToken);
      getItems(actions.getItems(itemArr));
      getUser(actions.getUser(userInfo));
    }
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      setAuthenticated(true);
      fetchData();
    }
  }, [authenticated, getItems, getUser]);
    
  //Handle searchbar:
  const handleEvent = (e:any) => {
    const target = (e.target as HTMLInputElement).value;
    setSearchVal(actions.setSearchVal(target));
  }

  const logOut = () => {
    localStorage.removeItem('accessToken');
    apiService.logout();
    setAuthenticated(false);
  }

  //LogIn and registration flow:
  if (!authenticated) return (
    
      <Switch>
      <Route path="/" exact>
          <LoginPage setAuthenticated={setAuthenticated}></LoginPage>
      </Route>
      <Route path="/register" exact>
          <Register setAuthenticated={setAuthenticated}></Register>
      </Route>
      </Switch>
   
  );
  
  //Logged In flow
  return (
    <div className="body">
      
      <nav className="top-menu navbar is-fixed-top pt-2">
        <div className="navbar-brand m-0">
          <Link to='/'>
            <img className='navbar-item logo m-0' src={`${logo}`} alt="Clothier" />
          </Link>
        </div>
        <div className="navbar-item">
          <h1 className='title is-4 m-0'>Hi {user.firstName}! </h1>
        </div>
        <input className='navbar-item input is-rounded search-bar' type="text" placeholder="🔍 Search" value={searchVal} onChange={handleEvent}/>
        <Link to='/MyCloset'>
        <button className="nav-button navbar-item button is-info is-rounded"  onClick={() => setSearchVal(actions.setSearchVal(''))}> MyCloset </button>
        </Link>
        <Link to='/'>
        <button className="nav-button navbar-item button is-warning is-rounded" onClick={() => logOut()} > Log Out </button>
        </Link>
      </nav>

      {user &&
      <div className='content'>
        <Switch>
          <Route path="/itemDetail/:itemId">
            <ItemDetail></ItemDetail>
          </Route>
          <Route path="/MyCloset">
            <MyCloset></MyCloset>
          </Route>
          <Route path="/UserCloset/:userId">
            <UserCloset></UserCloset>
          </Route>
          <Route path="/">
            <HomeDash></HomeDash>
          </Route>
        </Switch>
      </div>
      }
    </div>
  )
}

const mapStateToProps = ({store}: any) => {
  return {
    user: store.user,
    searchVal: store.searchVal,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getItems: (action:any) => dispatch(action),
    getUser: (action:any) => dispatch(action),
    setSearchVal: (action:any) => dispatch(action),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

