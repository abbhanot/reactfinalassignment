import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { setSelectedItem } from '../CarStore/Actions'

const CarCard = (props : any) =>{
    let history = useHistory()
    const dispatchRef = useDispatch()
    const exploreClick = ()=>{
        setSelectedItem(dispatchRef,props.item)
        history.push("/browsedCar")
    }
    return(
        <div className="card">
        
        <p>from {props.item.pricePerMonth}/mo</p>
        <p>for {props.item.minMonths} months</p>
        <img src={props.item.image} className="image"></img>
        <p>{props.item.name}</p>
        <p>{props.item.efficiency}/miles</p>
        <p>Efficiency</p>
        <button type="button" onClick={exploreClick}>Explore</button>
        </div>
    )
}

export default CarCard