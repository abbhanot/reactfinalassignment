import { useHistory } from "react-router-dom"
import Geocode from "react-geocode";
import React, { useState } from "react";
import GoogleMapReact from 'google-map-react';
import { useDispatch, useSelector } from "react-redux";
import { postAddress } from "../CarStore/Actions";

Geocode.setApiKey("AIzaSyAUUSp_GJ_VevEQc9s2Krod_zQINX5Ic2g");
Geocode.setLanguage("en");
Geocode.setRegion("es");
Geocode.enableDebug();



const AnyReactComponent = ({ text }:any) => <div><img width="25" src='https://maps.google.com/mapfiles/kml/shapes/parking_lot_maps.png' alt=""/></div>;

const Question2 = () =>{
    let history=useHistory()

    const dispatchRef = useDispatch()
    const address = useSelector((state:any) => state.address);
    const [inputAdress,setInputAddress] = useState("lat:"+ address.lat+"lng:"+ address.lng)
    const handleInputChange = (e:any) =>{
          //reverse
          setInputAddress(e.target.value)
    }

    const [center,setCenter] = useState({lat: address.lat, lng: address.lng})
    const backHandle = () => {
        history.push("/question1")
    }   

    const nextHandle = () => {
        postAddress(dispatchRef,center)
        history.push("/finalScreen")
    }

    const onMapClick = (e:any) => {
        console.log("lat",e.lat,"long",e.lng)
        setCenter({lat: +e.lat, lng: +e.lng})
        setInputAddress("lat:"+ e.lat+"lng:"+ +e.lng)
        Geocode.fromLatLng(e.lat, e.lng).then(
            (response: { results: { formatted_address: any; }[]; }) => {
              const address = response.results[0].formatted_address;
              console.log(address);
            },
            (        error: any) => {
              console.error(error);
            }
          );
      }
      const handleKeyDown =(e:any) => {
        if (e.key === 'Enter') {
            
          console.log('do validate',e.target.value);
          Geocode.fromAddress(e.target.value).then(
            response => {
              const { lat, lng } = response.results[0].geometry.location;
              console.log(lat, lng);
            },
            error => {
              console.error(error);
            }
          );
        }
      }
    return(<>
        <div className="suitabilityTool">
        <div className="progressbar2"></div>
        <div className="questionDiv">
        
        <div className="quesAndMap">
        <div className="ques">
        <div>Where do you live?</div>
        <div>Enter Your Home Post Code</div>
        <input className="zipBox" type="text" value= {inputAdress} onChange={handleInputChange} onKeyDown={handleKeyDown}></input>
        <div>Press on Map to choose Home Location</div>
        </div>
        <div className="map">
        <GoogleMapReact
        center={center}
        defaultZoom={4}
        onClick={onMapClick}
        >
        <AnyReactComponent lat={center.lat}
            lng={center.lng}
            text="My Marker" />
        
        </GoogleMapReact>
        </div>
        </div>
        </div>
        <div className="buttons">
        <button onClick={backHandle} className="questionButtonNext">Back</button>
        <button onClick={nextHandle} className="questionButtonNext">Next</button>
        </div>
        
        </div>
        </>)
}

export default Question2