import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { getDataAction, searchDataAction, sortDataAction } from '../CarStore/Actions';

const SearchAndSort =(props:any)=>{
    const dispatchRef2 = useDispatch()
    const [searchTerm, setSearchTerm] = useState('');
    const [isSearching, setIsSearching] = useState(false);
    const debouncedSearchTerm = useDebounce(searchTerm, 500);
    const handleSort=(e : React.ChangeEvent<HTMLSelectElement>)=>{
        const order = e.target.value==="1"?"asc":"desc"
        sortDataAction(dispatchRef2,order)
        setSort(e.target.value)
    }
    const[sort1,setSort] = useState("1")
    

    function useDebounce(value : any, delay : any) {
        
        const [debouncedValue, setDebouncedValue] = useState(value);
      
        useEffect(
          () => {
            const handler = setTimeout(() => {
              setDebouncedValue(value);
            }, delay);
            return () => {
              clearTimeout(handler);
            };
          },
          [value] 
        );
        return debouncedValue;
    }
    

    useEffect(
             () => {
               if (debouncedSearchTerm) {
                 setIsSearching(true);
                 searchDataAction(dispatchRef2,debouncedSearchTerm)
                 }
                 else{
                  getDataAction(dispatchRef2,1)
                 }
             },
             [debouncedSearchTerm]
           );

    return(<>
    <div className="searchAndSort">
    <div>
        <label style={{fontWeight:'bold'}}>Sort By:</label>
        <select 
        value={sort1}
        onChange={handleSort} 
      >
       <option value="1">Lowest</option>
        <option value="2">Highest</option>
      </select>
        </div>
        <input
        placeholder="Search by name"
        onChange={e => setSearchTerm(e.target.value)}
      />
      </div>
    </>)
}

export default SearchAndSort