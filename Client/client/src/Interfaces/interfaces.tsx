
  export interface Category {
    category: string;
    isActive: string;
  }

  export interface BasicUser {
    email: string
     password: string
  }

  export interface Items {
    title: string, 
    category:string,
    image: string,
    primaryKey?:number,
    brand: string,
    productId: string, 
    productUrl: string
    item: Items;
  }
  export interface State  {
    firstname: string
    lastname: string
    username: string
    email: string
    password: string
    firstName?: string
    lastName?: string
  }
  
  export interface ADQs {
    itemPrimaryKey: number,
    item: Items
  }
  
 
  export interface SelectedItem {
    category:string,
     brand:string,
      title:string, 
      primaryKey: number,
       image: string
       productUrl: string
  }
  

  export  interface User {
    firstName: string,
    lastName: string,
    userName: string,
    username?: string
    lastname?: string
    email: string,
    password: string,
    userPrimaryKey: number
    primaryKey: number
      ADQs: ADQs[],
      Follows: []
  }

 
  export interface SelectedUser {
    Follows: []
    primaryKey: number
    firstName: string
    lastName: string
    userName: string
    email: string
    ADQs: ADQs[]
}