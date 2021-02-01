import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { dummyService } from "../DummyApi";

const MyBooking = () => {
    debugger
    const [dummyInformation, setDummyInformation] = useState({"annualFuel":"","TripsCovered":"","AnnualPublicCharge":""});
    useEffect(() => {
        dummyService(4)
        .then((data:any) =>
            setDummyInformation({"annualFuel":data[0],"TripsCovered":data[1],"AnnualPublicCharge":data[2]})
        );
       }, [])
    const bookedItem = useSelector((state:any) => state.bookedItem);
    //const dummyItem = useSelector((state:any) => state.dummyData);
    
    const efficiency = bookedItem?+bookedItem.efficiency.slice(0, -3):1
    const charge1 = Math.floor(137/efficiency)
    const charge2 = Math.floor(205/efficiency)
    const charge3 = Math.floor(81/efficiency)
    return (
        <>
        
        
        <div className="bookingHead">My Booking</div>
        {!bookedItem && <div>Please Make Booking!!</div>}
        {bookedItem && 
        <div className="bookedCard">
            <div className="firstRow">
                <div>{bookedItem.name}</div>
                <div>{bookedItem.fromDate}-{bookedItem.toDate}</div>
            </div>
            <div className="imgAndInfo">
            <img src={bookedItem.image} className="imageSelected" alt=""></img>
            <div className="dummyData">
                
                <div>{dummyInformation.annualFuel}</div>
                <div>Annual fuel saving</div>
                
                <div>{dummyInformation.TripsCovered}</div>
                <div>%age of trips are covered by home and work charge point</div>
                
                <div>{dummyInformation.AnnualPublicCharge}</div>
                <div>public charging is needed</div>
            </div>
            </div>
            <div className="bookedFooter">
                <div className="font">{charge1} kWh</div>
                <div className="font">{charge2} kWh</div>
                <div className="font">{charge3} kWh</div>
            </div>
            <div className="bookedFooter">
                <div className="font">137 Miles</div>
                <div className="font">205 Miles</div>
                <div className="font">81 Miles</div>
            </div>
        </div>}
        </>
    )
}

export default MyBooking