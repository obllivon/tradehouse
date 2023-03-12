import React from 'react'
import Footer from '../componenets/footer/Footer'
import FilterHome from '../componenets/homePageComponent/FilterHome'
import Homes from '../componenets/homePageComponent/homes/Homes'
import Newbuild from '../componenets/homePageComponent/homes/Newbuild'
import Rooms from '../componenets/homePageComponent/homes/Rooms'
import BackGround from '../componenets/UI/BackGround'
import stl from '../css/homePage.module.sass'
import AddPage from './AddPage'

function HomePage() {
  return (
    <section className={stl.HomePage}>
      {/* <AddPage/> */}
      <BackGround />
      <FilterHome/>
      <Homes/>
      <Rooms/>
      <Newbuild/>
      <Footer/>
    </section>
  )
}

export default HomePage
