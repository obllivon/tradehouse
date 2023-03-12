import React from 'react'
import stl from '../../../css/homePage.module.sass'
import bookmark from '../../../img/homePage/Bookmark.svg'
import { ReactComponent as Som } from '../../../img/userPage/Som.svg'
function HomeCard({
title,price,image
}) {
  return (
    <div className={stl.home__card}>
        <div className={stl.card_img} style={{
            background:`url(${image}) no-repeat center/cover`
        }}>
            <img src={bookmark} alt="" />
        </div>
       <div className={stl.som}> <span>{price} </span><Som/></div>
       <div className={stl.boxParent}>
       <CardBox>1-эт.дом</CardBox>
       <CardBox>100м²</CardBox>
       </div>
       <p>{title.slice(0,100)}</p>
    </div>
  )
}
function CardBox({children}){
    return(
        <div className={stl.box}>
            {children}
        </div>
    )
}

export default HomeCard