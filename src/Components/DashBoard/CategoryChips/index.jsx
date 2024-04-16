import React, { useContext } from 'react'
import style from "./styles.module.css"
import { CategoryContext } from '../../../Context/CategoryProvider'


function CategoryChips({name}) {
  const{selected,setSelected}=useContext(CategoryContext);
  function removeFromCategories(){
    setSelected(selected.filter((item)=>item!=name))

  }
  return (
    <div className={style.chip}>
        <p>{name}</p>
        <button onClick={removeFromCategories}>x</button>
    </div>
  )
}

export default CategoryChips