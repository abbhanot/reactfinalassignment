

export const dummyService = async (id:number) => {
  debugger
  const newData = async () => {
  
  const call = await fetch(
    `https://6015487555dfbd00174ca1dc.mockapi.io/api/v1/MyBooking/${id}`,
    {
      method: 'GET'
    }
  );
  const jsonData = await call.json();
  return jsonData}
  const data1 = await newData()
  console.log(data1.myArray)
  return data1.myArray
  }




