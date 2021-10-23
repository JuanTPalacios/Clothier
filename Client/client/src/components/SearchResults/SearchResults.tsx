import React from 'react'
import { connect } from 'react-redux';
import actions from '../../redux/actions';
import { useState, useEffect } from 'react';
import apiService from '../../apiServices';
import { Link } from "react-router-dom";
import '../../styles/app.css';
import fetchService from '../../fetchService'
import { Items, User } from '../../Interfaces/interfaces'



interface Props {
  items: Items[];
  searchVal: string;
  user: User;
  setSearchVal: Function;
  setSelectedItem: Function;
  setSelectedUser: Function;
  getItems: Function;
  getUser: Function;
}



function SearchResults({items, searchVal, user, setSearchVal, setSelectedItem, setSelectedUser, getItems, getUser} : Props) : JSX.Element {
  
  const [usersArr, setUsersArr] = useState([]);
  const [followed, setFollowed] = useState(user.Follows.map((user: User) => user.userPrimaryKey))
  const re = new RegExp(searchVal, 'i');
  
  useEffect(() => {
    getUsers();
    async function fetchData () {
      const {itemArr, userInfo} = await fetchService(accessToken);
      getItems(actions.getItems(itemArr));
      getUser(actions.getUser(userInfo));
    }
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      fetchData();
    }
  }, [getItems, getUser]);
    
  
  async function getUsers() {
    setUsersArr(await apiService.getUsers());
  }
  const followUser = async (currentUserId:number) => {
    const res = await apiService.follow(user.primaryKey, currentUserId);
    if (res) {
      if(res.status !== 201) console.log('no user found')
    } 
    setFollowed([...followed, currentUserId]);
  };

  function setItem(item:Items) {
    console.log(item)
    setSearchVal(actions.setSearchVal(''));
    setSelectedItem(actions.getSingleItem(item))
  }

  function selectUser(user: User) {
    console.log(user)
    setSearchVal(actions.setSearchVal(''))
    setSelectedUser(actions.setSelectedUser(user));
  }
  
  if (usersArr && items) {
    const filteredItems = items.filter((item) => re.test(item.category))
    const filteredUsers = usersArr.filter((user:any) => re.test(user.username))
    return (
      <div className='columns'>
        <div className="column">
          <h2>People:</h2>
          <div className='search-follow'>
            {filteredUsers.map((user:User) =>
              <div className='box m-1' key={user.primaryKey}>
                <Link to={`/UserCloset/${user.primaryKey}`} key={user.primaryKey}>
                  <h4 className='title is-4' onClick={()=>{selectUser(user)}}>{user.username}</h4>
                </Link>
                {followed.includes(user.primaryKey) 
                  ? <h6>Following</h6>
                  : <button className='button is-success is-rounded' onClick={() => followUser(user.primaryKey)}>Follow</button>
                }
              </div>
            )}
          </div>
        </div>
        <div className="column">
          <h2>Items:</h2>
          <div className='search-follow'>
            {filteredItems.map(item =>
              <div className='box search-item-box m-1' key={item.primaryKey}>
                <Link to={`/itemDetail/${item.primaryKey}`} onClick={() => setItem(item)}>
                  <img src={item.image} alt="n/a"/>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }else{
    return (<div></div>)
  }
}

const mapStateToProps = ({store} : any) => {
  return {
    searchBool: store.searchBool,
    items: store.items,
    searchVal: store.searchVal,
    user: store.user,
  };
};

const mapDispatchToProps = (dispatch : any) => {
  return {
    setSearchVal: (action : any) => dispatch(action),
    setSelectedItem: (action : any) => dispatch(action),
    setSelectedUser: (action : any) => dispatch(action),
    getItems: (action : any) => dispatch(action),
    getUser: (action : any) => dispatch(action),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);


