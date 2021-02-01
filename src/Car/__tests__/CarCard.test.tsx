import React from 'react'
import {fireEvent, getByAltText, render, screen } from '@testing-library/react'
import CarCard from '../CarCard'
import { Provider } from 'react-redux'
import { createMemoryHistory } from 'history'
import store from '../../CarStore/Store'
import { BrowserRouter, MemoryRouter, Route, Router, Switch } from 'react-router-dom'
import * as ReactRouterDom from 'react-router-dom';
import userEvent from '@testing-library/user-event'
import BrowsedCar from '../../BrowsedCar/BrowsedCar'
import CarCards from '../CarCards'

let cardValues = {
    "pricePerMonth":"10",
    "minMonths":"10",
    "image":"url",
    "name":"name",
    "efficiency":"efficiency"
}
const mockHistoryPush = jest.fn();
jest.doMock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom') as any,
    useHistory: () => ({
      push: mockHistoryPush,
    }),
  }));
  const routing = (
    <Switch>
      <Route exact path="/" component={CarCards} />
      <Route exact path="/browsedCar" component={BrowsedCar} />
    </Switch>
)
describe('Tests for CarCard Component',()=>{
     test('If component renders without crashing',()=>{
         const {getByText} = render(<Provider store={store}><CarCard item={cardValues}></CarCard></Provider>);
         const element = getByText('Explore');
         expect(element).toBeInTheDocument();
     });
     test('If button click works or not',()=>{
         const {getByText} =render(<Provider store={store}><BrowserRouter>{routing}</BrowserRouter></Provider>);
         expect(getByText('Explore')).toBeInTheDocument()
         fireEvent.click(getByText('Explore'))
         const elem = getByText('Min. Subscription Length');
         expect(elem).toBeInTheDocument();
         
    // const element = getByRole('button');
    //     //  fireEvent.click(element);
    //     //  expect(screen.getByAltText(/NoCarImage/)).toBeInTheDocument();
    // });

    // it('Redirects to correct URL on click', () => {
    //     const { getByText } = render(
    //     <Provider store={store}>
    //       <MemoryRouter>
    //         <CarCard item={cardValues}/>
    //       </MemoryRouter>
    //       </Provider>,
    //     );
    
    //     fireEvent.click(getByText('Explore'));
    //     expect(mockHistoryPush).toHaveBeenCalledWith('/browsedCar');
     });
})