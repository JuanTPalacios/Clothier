import React from 'react'
import apiService from '../apiServices'
const DeleteButton = ({ user, item}:any) => {
    return (
        <button className='button is-danger' onClick={() => apiService.deleteItemFromCloset(user.primaryKey, item.itemPrimaryKey,)}>X</button>
    )
}

export default DeleteButton
