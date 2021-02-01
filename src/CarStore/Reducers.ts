
import { GET_DATA, POST_ADDRESS, SET_ANSWER, SET_BOOKED_ITEM } from "./Actions";
import { SORT_DATA } from "./Actions";
import {SEARCH_DATA} from "./Actions";
import {SET_SELECTED_ITEM} from "./Actions";

const initialState = {
    data:[{}],
    scrollable:true,
    answer1:"",
    address:{lat:28.7383,lng:77.0822},
    selectedItem:{"efficiency":"",
    "rangeInMiles":"",
    "features":"",
    "minMonths":"",
    "availableFrom":"",
    "pricePerMonth":""}
};
const Reducer = (state:any, action:any) => {
    switch (action.type) {
        case GET_DATA:
            let arr = [...action.payload]
            let scroll = state.scrollable
            let answer = state.answer1
            let address1 = state.address
            if(action.page===2 && state.scrollable)arr=[...state.data,...arr]
            if(action.page===1)scroll = true
            if(arr.length===5) scroll = false
            return{data:arr,scrollable:scroll,answer1:answer,address:address1,selectedItem:state.selectedItem}
        case SORT_DATA:
            let answer2 = state.answer1
            let address2 = state.address
            return {data:action.payload,scrollable:false,answer1:answer2,address:address2,selectedItem:state.selectedItem};
        case SEARCH_DATA:
            let answer3 = state.answer1
            let address3 = state.address
            return {data:action.payload,scrollable:false,answer1:answer3,address:address3,selectedItem:state.selectedItem}
        case SET_SELECTED_ITEM:
            
        return {...state,selectedItem:action.payload}
        case SET_BOOKED_ITEM:
            
        return {...state,bookedItem:action.payload}
        case SET_ANSWER:
            console.log("answer",action.payload)
        return {...state,answer1:action.payload}
        case POST_ADDRESS:
            console.log("address",action.payload)
        return {...state,address:action.payload}
        default:
                return initialState;
        }
}

export default Reducer