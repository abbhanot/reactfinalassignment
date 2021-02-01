import {fireEvent, getByAltText, render, screen } from '@testing-library/react'
import store from '../../CarStore/Store';
import { Provider } from 'react-redux';
import SuitabilityTool from '../SuitabilityTool';

describe('CarCards Test cases',()=>{
    test('check if component renders without crash',()=>{
        const{getByText}= render(<Provider store={store}><SuitabilityTool></SuitabilityTool></Provider>)
        const elemnt = getByText('Welcome to Electric Car suitability Tool')
        expect(elemnt).toBeInTheDocument()
    })
})