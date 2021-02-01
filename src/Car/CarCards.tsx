import React, { useEffect, useState } from 'react'
import CarCard from './CarCard'
import { connect, useDispatch, useSelector } from "react-redux";
import { getDataAction, searchDataAction, sortDataAction } from '../CarStore/Actions';
import InfiniteScroll from 'react-infinite-scroll-component';
import SearchAndSort from './SearchAndSort';

const CarCards = () => {
    const cards = useSelector((state:any) => state.data);
    const scrollable = useSelector((state:any) => state.scrollable);
    const dispatchRef = useDispatch();
    const dispatchRef2 = useDispatch();
    useEffect(()=>{
        if(cards.length == 1)
        getDataAction(dispatchRef,1)
    },[])
    const fetchMoreData =()=>{
        if(scrollable){
            const num = cards.length/3+1;
        getDataAction(dispatchRef2,num)
        }
        
    }
    return(
        <>
        <SearchAndSort></SearchAndSort>
        <InfiniteScroll 
        dataLength = {cards?cards.length:0}
        next = {fetchMoreData}
        hasMore={true}
        loader={scrollable && <h4>loading...</h4>}>
            <div className="allCards">
            { cards && 
                cards.map((item : any)=>{
                    return(
                    <CarCard item={item}></CarCard>
                    )   
                })
            }
            </div>
            </InfiniteScroll>
        </>
    )
}

export default CarCards