import React from 'react'
import SearchResults from './SearchResults'
import { connect } from 'react-redux';
import { useState } from 'react';
import apiService from '../apiServices';
import '../styles/app.css';

function ItemDetail({searchVal, selectedItem, user}) {
  const [acquired, setAcquired] = useState(user.ADQs.map((item) => item.itemPrimaryKey))

  async function acquireItem () {
    await apiService.ADQ(user.primaryKey, selectedItem.primaryKey);
    setAcquired([...acquired, selectedItem.primaryKey]);
  }

  return (
    <div>
      {searchVal && 
      <div className="search">
      <SearchResults></SearchResults>
      </div>
      }
      Item Detail
      {selectedItem.title}
      <img src={selectedItem.image} alt="n/a" />
      {acquired.includes(selectedItem.primaryKey)
      ? <h6>Already in MyCloset</h6>
      : <button onClick={() => acquireItem()}>Add to MyCloset</button>
      }
    </div>
  )
}

const mapStateToProps = ({store}) => {
  return {
    user: store.user,
    searchVal: store.searchVal,
    selectedItem: store.selectedItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetail);


