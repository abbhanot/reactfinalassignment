import {fireEvent, getByAltText, render, screen } from '@testing-library/react'
import store from '../../CarStore/Store';
import { Provider } from 'react-redux';
import Header from '../Header';

describe('CarCards Test cases',()=>{
    test('check if component renders without crash',()=>{
        const{getByText}= render(<Provider store={store}><Header></Header></Provider>)
        const elemnt = getByText('e-Ride')
        expect(elemnt).toBeInTheDocument()
    })
})