import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Calendar from 'react-calendar';
import StripeCheckout from 'react-stripe-checkout';
import 'react-calendar/dist/Calendar.css';
import { useHistory } from 'react-router';
import { setBookedItem } from '../CarStore/Actions';
import Moment from 'moment';

const BrowsedCar = () =>{
    
    let history = useHistory()
    const dispatchRef = useDispatch()
    const selectedItem = useSelector((state:any) => state.selectedItem);
    const efficiency = +selectedItem.efficiency.slice(0, -3)
    const range = +selectedItem.rangeInMiles
    const charge = (range/efficiency).toString();
    const features = selectedItem.features.split(",");
    let minSubscriptionMonths = ["1","6","9"]
    let filteredMonths: string[] = []
    minSubscriptionMonths.map((monthNum)=>{if(+monthNum>=+selectedItem.minMonths)filteredMonths.push(monthNum)})
    const minDate = Moment(selectedItem.availableFrom).format('YYYY-MM-DD');
    const currentDate = Moment(selectedItem.availableFrom).format('YYYY-MM-DD');
    console.log("minDate",minDate);
    const [value, onChange] = useState(currentDate);
    const [date, setDate] = useState(currentDate);
    const [toDate, setToDate] = useState(currentDate);
    const changeDate = (e:any) => {
        
        console.log(e.target.value);
        //console.log(e.toLocaleDateString())
        setDate(Moment(e.target.value).format('MM-DD-YYYY').toString())
        onChange(Moment(e.target.value).format('YYYY-MM-DD'))
        const newDate = new Date(new Date(e.target.value).setMonth(new Date(e.target.value).getMonth()+(+subscriptionMonths)));
        setToDate(Moment(newDate).format('MM-DD-YYYY').toString())
        console.log("newDate",newDate)
    }
    const[subscriptionMonths,setSubscriptionMonths] = useState('')
    const[priceToPay,setPriceToPay] = useState(0)
    const  monthSelectionHandler = (e:any)=> {
        debugger
        const val = e.target.innerText.split(" ")[0];
        setSubscriptionMonths(val)
        let total = (+selectedItem.pricePerMonth)*(+val)*100
        setPriceToPay(total)
        console.log(total)
        console.log(date)
        const newDate = new Date(new Date(date).setMonth(new Date(date).getMonth()+(+val)));
        setToDate(Moment(newDate).format('MM-DD-YYYY').toString())
        console.log("newDate",newDate)
    } 
    const[milesPerMonth,setMilesPerMonth]=useState('')
    const milesSelectionHandler =(e:any)=>{
        setMilesPerMonth(e.target.innerText.split(' ')[0])
    }
    const onToken = (token:any) =>{
        setBookedItem(dispatchRef,{"id":selectedItem.id,"name":selectedItem.name,"image":selectedItem.image
    ,"fromDate":date,"efficiency":selectedItem.efficiency,"toDate":toDate})
        history.push("/myBooking")
    }
    
return(<>
    <p className="browseHeader">Browse Car{' > '} {selectedItem.name}</p>
    <div className="selectedCar">
        <div className="selectedCarPart1">
        <div className="selectedCarPart11">
        <img src={selectedItem.image} className="imageSelected" alt="NoCarImage"></img>
        <p className="available">Available From {selectedItem.availableFrom}</p>
        </div>
        <div className="selectedCarPart12">
            <div className="flex1">
                <div>Range </div>
                <div>{selectedItem.rangeInMiles}/mile </div>
                <div>RealWorld</div>
                </div>
            <div className="flex1">
                <div>Charging </div>
                <div>{charge}kW </div>
                <div>Max Speed</div>
                </div>
        
        </div>
        <div className="selectedCarPart13">
        <div className="footerSelecetd">{features[0]}</div>
        <div className="footerSelecetd">
        {features[1]}
        </div>
        <div className="footerSelecetd">{features[2]}</div>
        <div className="footerSelecetd">{features[3]}</div>
        <div className="footerSelecetd">{features[4]}</div>
        </div>
        </div>
        <div className="selectedCarPart2">
            <div>{selectedItem.name}</div>
            <h3>Min. Subscription Length</h3>
            <div className="smallOuter">
                
                {filteredMonths.map((months)=>{
                    return(<div className="small" onClick={monthSelectionHandler}>{months} Months</div>)
                })}
            </div>
            
                <h3>Miles per Month</h3>
                <div className="smallOuter">
                <div className="small" onClick={milesSelectionHandler}>800</div>
                <div className="small" onClick={milesSelectionHandler}>1200</div>
                <div className="small" onClick={milesSelectionHandler}>1500</div>

            </div>
            <h3>Delivery Date</h3>
            <div>
                {/* <input type="text" value={date} className ="dateText"/>
                <Calendar 
                 onChange={changeDate}
            value={value} minDate={new Date(selectedItem.availableFrom)}/> */}
            <input type="date" id="myDate" min={minDate} onChange={changeDate} value={value}></input>
            </div>
            
            <StripeCheckout
            token={onToken}
            stripeKey="pk_test_51IEvfQJcfGMkVmlRXlu4eTWCPjXdzXdM6noBpbZ5bhEK9Z9j5DGthAP0fYqzZAXmzpdS7ho55rSQ8tQW5IMEOn9G00rI54tsLm"
            amount={priceToPay}
            currency="INR"    
      >
          <button className ="bookNowButton" disabled={subscriptionMonths=='' || milesPerMonth=='' || date==''}>Book Now</button>
      </StripeCheckout>
        </div>
    </div>
    </>)
    
    
}

export default BrowsedCar