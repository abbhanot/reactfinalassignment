import {fireEvent, getByAltText, render, screen } from '@testing-library/react'
import store from '../../CarStore/Store';
import { Provider } from 'react-redux';
import Layout from '../Layout';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CarCards from '../../Car/CarCards';


const routing = (
    <Switch>
      <Route exact path="/" component={CarCards} />
    </Switch>
)
describe('CarCards Test cases',()=>{
    test('check if component renders without crash',()=>{
        const{getByText}= render(<Provider store={store}><BrowserRouter><Layout>{routing}</Layout></BrowserRouter></Provider>)
        const elemnt = getByText('loading...')
    })
})