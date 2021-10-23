import {render, screen} from '@testing-library/react';
import { createStore } from 'redux';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'


import HomeDash from './HomeDash';
import { Provider } from 'react-redux';
import reducers from '../../redux/reducers';
let store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__());
describe('Home component', () => {
  test('should match the snapshot', () => {
    const { container } = render(<Provider store={store}><HomeDash /></Provider>);
    expect(container.firstChild).toMatchSnapshot();
  })

  test('should load the categories', () => {
    render(<Provider store={store}><HomeDash /></Provider>);
    screen.getByText(/All/);
    screen.getAllByText(/Pants/);
    screen.getByText(/Outerwear Pants and Sets/);
    screen.getByText(/Coats & Outerwear/);
    screen.getByText(/Hoodies & Sweatshirts/);
    screen.getByText(/Sweaters/);
    screen.getByText(/Shirts & Tops/);
    screen.getByText(/Underwear & Intim/);
  })

  test('should change classNames correctly', () => {
    let {container} = render(<Provider store={store}><HomeDash /></Provider>)
    userEvent.click(screen.getByText('Outerwear Pants and Sets').closest('a'))
    expect(container.getElementsByClassName('is-active').length).toBe(1)

    userEvent.click(screen.getByText('Pants').closest('a'))
    expect(container.getElementsByClassName('is-active').length).toBe(1)
  })


})