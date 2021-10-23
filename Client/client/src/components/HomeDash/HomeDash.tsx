import React from 'react'
import SearchResults from'../SearchResults/SearchResults'
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import actions from '../../redux/actions';
import { useState } from 'react';
import '../../styles/app.css';
import { Items, Category} from '../../Interfaces/interfaces'
import Categories from '../Categories';

const catArr = ['Pants', 'Outerwear Pants and Sets', 'Coats & Outerwear', 'Hoodies & Sweatshirts', 'Sweaters', 'Shirts & Tops', 'Underwear & Intimates', 'Dresses', 'Jeans', 'Socks', 'Skirts', "Kids' Sets"]
const initialState = catArr.map(category => {return {category: category, isActive: ''}})

interface Props {
  items: Items[];
  searchVal: string;
  setSelectedItem: Function;
}
function HomeDash({items, searchVal, setSelectedItem} : Props): JSX.Element {
  
  const [all, setAll] = useState<Category>({category: 'all', isActive: 'is-active'});
  const [filter, setFilter] = useState<string>('all');
  const [categories, setCategories] = useState<Category[]>(initialState);
  const [prevIndex, setPrevIndex] = useState<number>(0)

 
  function handleClick(cat:Category, index:number) {
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
    const newActive= [...categories];
    if (prevIndex !== null) newActive[prevIndex].isActive = '';
    setCategories(newActive);
  }


  if(!items) return (
    <div className="loading">Loading...</div>
    )

  const filteredItems = filter === 'all' ? items : items.filter((item) => item.category === filter)
  const length = filteredItems.length;
  const quarter = length===1 ? 4 : Math.floor(length/4);
  return (
    <div>
      {searchVal && 
      <div className="search">
      <SearchResults></SearchResults>
      </div>
      }
      <div className="categories tabs">
        <ul>
          <li className={all.isActive} onClick={() => handleAllClick()}> <a>All</a> </li>
          <Categories categories={categories} handleClick={handleClick}/>
        </ul>
      </div>
      <div className="dashboardItems tile is-ancestor">
        <div className="tile is-3 is-vertical pt-2">
          {filteredItems.slice(0, quarter).map(item =>
            <div className='tile is-child box item-box' key={item.primaryKey}>
              <Link to={`/itemDetail/${item.primaryKey}`}>
                <img src={item.image} onClick={() => setSelectedItem(actions.getSingleItem(item))} alt="n/a"/>
              </Link>
        </div>
        )}
        </div>
        <div className="tile is-3 is-vertical">
          {filteredItems.slice(quarter, quarter*2).map(item =>
            <div className='tile is-child box item-box' key={item.primaryKey}>
              <Link to={`/itemDetail/${item.primaryKey}`}>
                <img src={item.image} onClick={() => setSelectedItem(actions.getSingleItem(item))} alt="n/a"/>
              </Link>
            </div>
          )}
        </div>
        <div className="tile is-3 is-vertical pt-3">
          {filteredItems.slice((quarter*2), quarter*3).map(item =>
              <div className='tile is-child box item-box' key={item.primaryKey}>
                <Link to={`/itemDetail/${item.primaryKey}`}>
                  <img src={item.image} onClick={() => setSelectedItem(actions.getSingleItem(item))} alt="n/a"/>
                </Link>
              </div>
            )}
        </div>
        <div className="tile is-3 is-vertical">
          {filteredItems.slice((quarter*3)).map(item =>
              <div className='tile is-child box item-box' key={item.primaryKey}>
                <Link to={`/itemDetail/${item.primaryKey}`}>
                  <img src={item.image} onClick={() => setSelectedItem(actions.getSingleItem(item))} alt="n/a"/>
                </Link>
              </div>
            )}
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = ({store} : any) => {
  return {
    items: store.items,
    searchVal: store.searchVal,
  };
};

const mapDispatchToProps = (dispatch : any) => {
  return {
    setSelectedItem: (action: any) => dispatch(action)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeDash);

