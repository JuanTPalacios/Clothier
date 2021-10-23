import React from 'react'
import SearchResults from '../SearchResults/SearchResults'
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import actions from '../../redux/actions';
import '../../styles/app.css';
import fetchService from '../../fetchService';
import { User, Category } from '../../Interfaces/interfaces'
import Categories from '../Categories';
import DeleteButton from '../DeleteButton';


interface props  {
  user: User
  getUser: Function,
  getItems: Function
  searchVal: string
  DeleteItemFromCloset: Function
}


function MyCloset({user, getUser, getItems, DeleteItemFromCloset, searchVal}: props) : JSX.Element {
  const ADQitems = user.ADQs;
  const userCategories = [...new Set(user.ADQs.map((item) => item.item.category))];
  const initialState = userCategories.map(category => {return {category: category, isActive: ''}})
  
  const [all, setAll] = useState({category: 'all', isActive: 'is-active'});
  const [filter, setFilter] = useState('all');
  const [categories, setCategories] = useState(initialState);
  const [prevIndex, setPrevIndex] = useState(null);

  useEffect(() => {
    async function fetchData () {
      const {itemArr, userInfo} = await fetchService(accessToken);
      getItems(actions.getItems(itemArr));
      getUser(actions.getUser(userInfo));
    }
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      fetchData();
    }
  }, []);

  function handleClick(cat:Category, index:any) {
    setAll({...all, isActive:''})
    setFilter(cat.category);
    const newActive= [...categories];
    setPrevIndex(index);
    if (prevIndex !== null) newActive[prevIndex].isActive = '';
    newActive[index].isActive = 'is-active';
    setCategories(newActive);
  }

  function handleAllClick() {
    setFilter(all.category);
    setAll({...all, isActive:'is-active'})
    const newActive = [...categories];
    if (prevIndex !== null) newActive[prevIndex].isActive = '';
    setCategories(newActive);
  }

  if (ADQitems) {
    const filteredItems = filter === 'all' ? ADQitems : ADQitems.filter((item) => item.item.category === filter);
    const length = filteredItems.length;
    const quarter = length===1 ? 4 : Math.ceil(length/4);
    return (
      <div>
        {searchVal && 
          <div className="search">
            <SearchResults></SearchResults>
          </div>
        }
        <div className="body">

          <h1 className="title is-0 mt-5 ml-5 mb-0">MyCloset</h1>
          
          <div className="categories tabs">
            <ul>
            <li className={all.isActive} onClick={() => handleAllClick()}> <a>All</a> </li>
            <Categories categories={categories} handleClick={handleClick}/>
            </ul>
          </div>

          <div className="dashboardItems tile is-ancestor">
            <div className="tile is-3 is-vertical pt-2">
              {filteredItems.slice(0, quarter).map(item =>
                <div className='tile is-child box item-box' key={item.itemPrimaryKey}>
                  <Link to={`/itemDetail/${item.itemPrimaryKey}`}>
                    <img src={item.item.image} alt="n/a"/>
                  <DeleteButton user={user} item={item} DeleteItemFromCloset={DeleteItemFromCloset} />
                  </Link>
            </div>
            )}
            </div>
            <div className="tile is-3 is-vertical">
              {filteredItems.slice(quarter, quarter*2).map(item =>
                <div className='tile is-child box item-box' key={item.itemPrimaryKey}>
                  <Link to={`/itemDetail/${item.itemPrimaryKey}`}>
                    <img src={item.item.image} alt="n/a"/>
                    <DeleteButton user={user} item={item} DeleteItemFromCloset={DeleteItemFromCloset} />
                  </Link>
                </div>
              )}
            </div>
            <div className="tile is-3 is-vertical pt-3">
              {filteredItems.slice((quarter*2), quarter*3).map(item =>
                  <div className='tile is-child box item-box' key={item.itemPrimaryKey}>
                    <Link to={`/itemDetail/${item.itemPrimaryKey}`}>
                      <img src={item.item.image} alt="n/a"/>
                    <DeleteButton user={user} item={item} DeleteItemFromCloset={DeleteItemFromCloset}/>
                    </Link>
                  </div>
                )}
            </div>
            <div className="tile is-3 is-vertical">
              {filteredItems.slice((quarter*3)).map(item =>
                  <div className='tile is-child box item-box' key={item.itemPrimaryKey}>
                    <Link to={`/itemDetail/${item.itemPrimaryKey}`}>
                       <DeleteButton user={user} item={item} DeleteItemFromCloset={DeleteItemFromCloset} />
                      <img src={item.item.image} alt="n/a"/>
                    </Link>
                  </div>
                )}
            </div>
          </div>

        </div>
      </div>
    )}
    else {
      return (
        <>
        </>
      )
    }
}

const mapStateToProps = ({store}:any) => {
  return {
    user: store.user,
    searchVal: store.searchVal,
  };
};

const mapDispatchToProps = (dispatch:any) => {
  return {
    DeleteItemFromCloset: (action:any) => dispatch(action),
    getItems: (action:any) => dispatch(action),
    getUser: (action:any) => dispatch(action),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyCloset);


