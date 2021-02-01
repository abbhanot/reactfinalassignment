import React from 'react'
import {fireEvent, getByAltText, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../CarStore/Store';
import BrowsedCar from '../BrowsedCar';

describe('Testing Browsed Car Component',()=>{
    test('Test if component loads correctly',()=>{
        const {getByText} = render (<Provider store={store}><BrowsedCar></BrowsedCar></Provider>);
        const elem = getByText('Min. Subscription Length');
        expect(elem).toBeInTheDocument();
    })
})