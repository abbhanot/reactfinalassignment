import {fireEvent, getByAltText, render, screen } from '@testing-library/react'
import store from '../../CarStore/Store';
import { Provider } from 'react-redux';
import FinalScreen from '../FinalScreen';

describe('CarCards Test cases',()=>{
    test('check if component renders without crash',()=>{
        const{getByText}= render(<Provider store={store}><FinalScreen></FinalScreen></Provider>)
        const elemnt = getByText('All Done!')
        expect(elemnt).toBeInTheDocument()
    })
})