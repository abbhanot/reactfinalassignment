
export const GET_DATA = "GET_DATA";
export const SEARCH_DATA = "SEARCH_DATA";
export const SET_SELECTED_ITEM="SET_SELECTED_ITEM";
export const SET_BOOKED_ITEM = "SET_BOOKED_ITEM";
export const SORT_DATA = "SORT_DATA";
export const SET_ANSWER= "SET_ANSWER";
export const POST_ADDRESS= "POST_ADDRESS";


export const getDataAction = async (dispatch : any, page:number) => {
    debugger
    const queryString =`page=${page}&limit=3`;
    const newData = async () => {
    
    const call = await fetch(
      `https://600effd73bb1d100179e0859.mockapi.io/api/v1/cars?${queryString}`,
      {
        method: 'GET'
      }
    );
    const jsonData = await call.json();
    return jsonData}
    const newData1 = await newData()
    console.log("new data::",{newData1})
  dispatch({
    type: GET_DATA,
    payload: newData1,
    page: page
  });
};

export const sortDataAction = async (dispatch : any, order:string) => {
  debugger
  const queryString =`sortBy=id&order=${order}`;
  const newData = async () => {
  
  const call = await fetch(
    `https://600effd73bb1d100179e0859.mockapi.io/api/v1/cars?${queryString}`,
    {
      method: 'GET'
    }
  );
  const jsonData = await call.json();
  return jsonData}
  const newData1 = await newData()
  console.log("new data::",{newData1})
dispatch({
  type: SORT_DATA,
  payload: newData1
});
};

export const searchDataAction = async (dispatch : any, searchTerm:string) => {
  debugger
  const queryString =`search=${searchTerm}`;
  const newData = async () => {
  
  const call = await fetch(
    `https://600effd73bb1d100179e0859.mockapi.io/api/v1/cars?${queryString}`,
    {
      method: 'GET'
    }
  );
  const jsonData = await call.json();
  return jsonData}
  const newData1 = await newData()
  console.log("new data::",{newData1})
dispatch({
  type: SEARCH_DATA,
  payload: newData1
});
};

export const setSelectedItem = (dispatch : any, card :any) => {
  dispatch({
      type: SET_SELECTED_ITEM,
      payload: card
    });
}
export const setBookedItem =  (dispatch : any, card :any) => {
  dispatch({
      type: SET_BOOKED_ITEM,
      payload: card
    });
}
export const setAnswer =  (dispatch : any, answer :any) => {
  dispatch({
      type: SET_ANSWER,
      payload: answer
    });
}

export const postAddress = async (dispatch : any, address :any) => {
  const queryString =`id=1&address=3`;
    const newData = async () => {
    
    const call = await fetch(
      `https://6015487555dfbd00174ca1dc.mockapi.io/api/v1/postcode?${queryString}`,
      {
        method: 'POST'
      }
    );
    const jsonData = await call.json();
    return jsonData}
    const newData1 = await newData()
    console.log("new data::",{newData1})
  dispatch({
      type: POST_ADDRESS,
      payload: address
    });
}

