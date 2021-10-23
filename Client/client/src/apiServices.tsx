import { BasicUser} from './Interfaces/interfaces'
// require('dotenv').config();
const baseURL = 'http://localhost:3001';//process.env.REACT_APP_BASE_URL;
console.log(baseURL);
// import baseURL from './'

// const baseURL = 'http://localhost:3001';
const apiService = {

async fetchItems () {
  const result = fetch(baseURL+'/items', {
    method: 'GET',
  })
  .then(response => response.json())
  .catch(err => console.log(err));
  return result;
},

async login(user:BasicUser) {
  return fetch(`${baseURL}/login`, {
    method: 'POST',
    credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  })
    .then((res) => (res.json()))
    .catch((err) => console.log(err))
},
async logout() {
  return fetch(`${baseURL}/logout`, {
    method: 'POST',
    credentials: 'include',
    mode: 'cors',
  })
    .then((res) => (res.json()))
    .catch((err) => console.log(err));
},
async profile (accessToken:string | number | null, tokenType:any) {
  return fetch(`${baseURL}/me`, {
    method: 'GET',
    credentials: 'include',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${tokenType} ${accessToken}`,
    },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
},
async register(newUser: BasicUser) {
  const res = await fetch(`${baseURL}/users`, {
    method: 'POST',
    credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newUser),
  })

  const data = await res.json();
  return data;
},
async getUsers(accessToken?:string | number) {
  return fetch(`${baseURL}/users`, {
    method: 'GET',
    credentials: 'include',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
},
async follow(profileId:string | number, currentId:number) {
  return fetch(`${baseURL}/follow`, {
    method: 'POST',
    credentials: 'include',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      currentUserId: currentId,
      profileUser: profileId
    })
  })
    .then((res) => res)
    .catch((err) => console.log(err));
},
async ADQ(UserId: number, ItemId:number) {
  return fetch(`${baseURL}/adq`, {
    method: 'POST',
    credentials: 'include',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      UserId: UserId,
      ItemId: ItemId
    })
  })
    .then((res) => res)
    .catch((err) => console.log(err));
},
async fetchOneItem (id:string) {
  const result = fetch(baseURL+'/OneItem', {
    method: 'POST',
    credentials: 'include',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ItemId: id,
    })
  })
  .then(response => response.json())
  .catch(err => console.log(err));
  return result;
},
async deleteItemFromCloset(UserId:number, ItemId:number){
  const res = fetch(baseURL + '/adq', {
    method: 'DELETE',
    credentials: 'include',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      UserId,
      ItemId
    })
  })
  .then(response => response.json())
  .catch(err => console.log(err));
  return res;
},


}

export default apiService;