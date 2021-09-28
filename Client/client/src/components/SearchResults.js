import React from 'react'
import { connect } from 'react-redux';
import actions from '../redux/actions';
import { useState, useEffect } from 'react';
import apiService from '../apiServices';
import { Link } from "react-router-dom";
import '../styles/app.css';



function SearchResults({items, searchVal, user, setSearchVal, setSelectedItem, setSelectedUser}) {
  
  const [usersArr, setUsersArr] = useState([]);
  const [followed, setFollowed] = useState(user.Follows.map((user) => user.userPrimaryKey))
  const re = new RegExp(searchVal, 'i');
  
  useEffect(() => {
    getUsers();
  }, []);
  
  async function getUsers() {
    setUsersArr(await apiService.getUsers());
  }
  const followUser = async (currentUserId) => {
    const res = await apiService.follow(user.primaryKey, currentUserId);
    if (res.error) console.log('No user info found');
    setFollowed([...followed, currentUserId]);
  };

  function setItem(item) {
    setSearchVal(actions.setSearchVal(''));
    setSelectedItem(actions.getSingleItem(item))
  }

  function selectUser(user) {
    setSelectedUser(actions.setSelectedUser(user));
    setSearchVal(actions.setSearchVal(''))
  }
  
  if (usersArr && items) {
    const filteredItems = items.filter((item) => re.test(item.category))
    const filteredUsers = usersArr.filter((user) => re.test(user.username))
    return (
      <div className='columns'>
        <div className="column">
          <h2>People:</h2>
          <div className='search-follow'>
            {filteredUsers.map(user =>
              <div className='box m-1' key={user.primaryKey}>
                <Link to='/UserCloset' key={user.primaryKey}>
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
                <Link to="/itemDetail" onClick={() => setItem(item)}>
                  <img src={item.image} alt="n/a"/>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({store}) => {
  return {
    searchBool: store.searchBool,
    items: store.items,
    searchVal: store.searchVal,
    user: store.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSearchVal: (action) => dispatch(action),
    setSelectedItem: (action) => dispatch(action),
    setSelectedUser: (action) => dispatch(action),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);


