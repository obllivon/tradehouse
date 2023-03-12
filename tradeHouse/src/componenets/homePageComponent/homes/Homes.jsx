import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import stl from '../../../css/homePage.module.sass'
import { getHomeAction } from '../../../store/asyncAction/mainAction'
import HomeCard from '../homeCard/HomeCard'
function Homes() {
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getHomeAction())
    },[])
    const {homes}= useSelector(state=>state.main)
    console.log(homes)
  return (
    <div className={stl.Homes}>
        <div className='container'>
            <div className={stl.title}>
                <span>
                    Дома 
                </span>
                <Link to='/' className={stl.link}>Смотреть все</Link>
            </div>
            <div className={stl.homes__box}>
             {homes.slice(0,8).map(item=><HomeCard key={item.id} image={item.image} price={item.price} title={item.description}/>)}
            </div>
        </div>
    </div>
  )
}

export default Homes