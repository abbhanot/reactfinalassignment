import React from 'react'
import { Route, Link, BrowserRouter as Router, Switch, useHistory, BrowserRouter } from 'react-router-dom'
import BrowsedCar from '../BrowsedCar/BrowsedCar'
import CarCards from '../Car/CarCards'
import MyBooking from '../My Booking/MyBooking'
import FinalScreen from '../Suitability Tool/FinalScreen'
import Question1 from '../Suitability Tool/Question1'
import Question2 from '../Suitability Tool/Question2'
import SuitabilityTool from '../Suitability Tool/SuitabilityTool'
import Header from './Header'

const routing = (
      <Switch>
        <Route exact path="/" component={CarCards} />
        <Route exact path="/suitability" component={SuitabilityTool} />
        <Route exact path="/browsedCar" component={BrowsedCar} />
        <Route exact path="/myBooking" component={MyBooking} />
        <Route exact path="/question1" component={Question1} />
        <Route exact path="/question2" component={Question2} />
        <Route exact path="/finalScreen" component={FinalScreen} />
      </Switch>
  )
  
const Layout = (props:any) =>{
    let history = useHistory()
    const suitabilityClick = () => {
        history.push('/suitability')
    }
    const electricCarClick = () => {
        history.push('/')
    }
    const myBookingClick = () => {
        history.push('/myBooking')
    }
    return(
        <>
        <Header suitabilityClick={suitabilityClick} electricCarClick={electricCarClick} myBookingClick={myBookingClick} signOut={props.signOut}></Header>
        {routing}
        </>
        
    )
}

export default Layout