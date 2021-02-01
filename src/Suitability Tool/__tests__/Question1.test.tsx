import {fireEvent, getByAltText, render, screen } from '@testing-library/react'
import store from '../../CarStore/Store';
import { Provider } from 'react-redux';
import Question1 from '../Question1';

describe('CarCards Test cases',()=>{
    test('check if component renders without crash',()=>{
        const{getByText}= render(<Provider store={store}><Question1></Question1></Provider>)
        const elemnt = getByText('How do you park at home ?')
        expect(elemnt).toBeInTheDocument()
    });
    test('check if first option color changes',()=>{
        const{getByText}= render(<Provider store={store}><Question1></Question1></Provider>)
        const elemnt = getByText('Private off seat parking')
        fireEvent.click(elemnt)
         expect(elemnt).toHaveStyle({backgroundColor: '#FF7BAC'})
    });
    test('check if second option color changes',()=>{
        const{getByText}= render(<Provider store={store}><Question1></Question1></Provider>)
        const elemnt = getByText('Shared parking')
        fireEvent.click(elemnt)
         expect(elemnt).toHaveStyle({backgroundColor: '#FF7BAC'})
    });
    test('check if third option color changes',()=>{
        const{getByText}= render(<Provider store={store}><Question1></Question1></Provider>)
        const elemnt = getByText('On Street parking')
        fireEvent.click(elemnt)
         expect(elemnt).toHaveStyle({backgroundColor: '#FF7BAC'})
    });
})