import {fireEvent, getByAltText, render, screen } from '@testing-library/react'
import store from '../../CarStore/Store';
import { Provider } from 'react-redux';
import Question2 from '../Question2';

describe('CarCards Test cases',()=>{
    test('check if component renders without crash',()=>{
        const{getByText}= render(<Provider store={store}><Question2></Question2></Provider>)
        const elemnt = getByText('Where do you live?')
        expect(elemnt).toBeInTheDocument()
    })
})