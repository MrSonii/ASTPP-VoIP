import React from 'react'

//css import
import "./list-item.css";

function ListItem({icon, label, extraClass}) {
  return (
    <li className='list-item'>
      <img src={icon} alt={`${label} Icon`} width={20} className={extraClass}/>
      {label}
    </li>
  )
}

export default ListItem