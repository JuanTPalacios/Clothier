import { User, Items } from '../Interfaces/interfaces'

const actions = {
  getItems : (items:Items) => ({
    type: 'getItems',
    payload: items
  }),
  getUser : (user:User[]) => ({
    type: 'getUser',
    payload: user
  }),
  getSingleItem : (item:string | {}) => ({
    type: 'getSingleItem',
    payload: item,
  }),
  setSearchVal : (item:string | []) => ({
    type: 'setSearchVal',
    payload: item
  }),
  setSelectedUser : (user:User) => ({
    type: 'setSelectedUser',
    payload: user
  })
};

export default actions;