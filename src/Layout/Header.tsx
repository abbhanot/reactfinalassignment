import React from 'react'


const Header = (props:any) =>{
    
    return(
        <>
        <div className="header">
            <p style={{fontWeight:'bold'}}>e-Ride</p>
        <div className="headerOptions">
        <div className="headerOption" onClick={props.electricCarClick}>Electric Cars</div>
        <div className="headerOption" onClick={props.suitabilityClick}>Suitability Tool</div>
        <div className="headerOption" onClick={props.myBookingClick}>My Booking</div>
        <div  onClick={props.signOut}>SignOut</div>
        </div>
        </div>
        </>
    )
}

export default Header