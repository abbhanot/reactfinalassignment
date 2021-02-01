import React from 'react'
import {fireEvent, getByAltText, render, screen } from '@testing-library/react'
import SearchAndSort from '../SearchAndSort';
import store from '../../CarStore/Store'
import { Provider } from 'react-redux';

describe('Tests for CarCard Component',()=>{
    test('If component renders without crashing',()=>{
        const {getByPlaceholderText} = render(<Provider store={store}><SearchAndSort></SearchAndSort></Provider>);
        const element = getByPlaceholderText('Search by name');
        expect(element).toBeInTheDocument();
    });
});