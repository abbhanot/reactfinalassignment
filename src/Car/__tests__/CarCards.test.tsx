import {fireEvent, getByAltText, render, screen } from '@testing-library/react'
import SearchAndSort from '../SearchAndSort';
import store from '../../CarStore/Store';
import { Provider } from 'react-redux';
import CarCards from '../CarCards';

describe('CarCards Test cases',()=>{
    test('check if component renders without crash',()=>{
        const{getByText}= render(<Provider store={store}><CarCards></CarCards></Provider>)
        const elemnt = getByText('loading...')
        expect(elemnt).toBeInTheDocument()
    })
})