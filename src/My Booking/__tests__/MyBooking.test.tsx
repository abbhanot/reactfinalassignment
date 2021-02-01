import {fireEvent, getByAltText, render, screen } from '@testing-library/react'
import store from '../../CarStore/Store';
import { Provider } from 'react-redux';
import MyBooking from '../MyBooking';

describe('CarCards Test cases',()=>{
    test('check if component renders without crash',()=>{
        const{getByText}= render(<Provider store={store}><MyBooking></MyBooking></Provider>)
        const elemnt = getByText('My Booking')
        expect(elemnt).toBeInTheDocument()
    })
})