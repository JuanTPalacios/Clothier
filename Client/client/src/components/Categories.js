import React from 'react'
import '../styles/app.css';

const Categories = ({categories, handleClick}) => {
 return categories.map((category, index) =>
    <li className={category.isActive} key={index} onClick={() => handleClick(category, index)} ><a>{category.category}</a></li>
  )
       
    
}

export default Categories
