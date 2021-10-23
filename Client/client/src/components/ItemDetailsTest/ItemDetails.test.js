import {render, screen} from '@testing-library/react';
import { createStore } from 'redux';
import ReactRouter from 'react-router'
import { Provider } from 'react-redux';
import reducers from '../../redux/reducers';
import ItemDetail from './ItemDetail';

describe('Item Details component', () => {
  test('should match the snapshot', () => {
    jest.spyOn(ReactRouter, 'useParams').mockReturnValue({ itemId: 226 });
    let store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__());
    const { container } = render(<Provider store={store}><ItemDetail /></Provider>);
    expect(container.firstChild).toMatchSnapshot();
  })

  test('It should render the corrrect component and text', () => {

    jest.spyOn(ReactRouter, 'useParams').mockReturnValue({ itemId: 226 })
    let store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__());
    render(<Provider store={store}><ItemDetail/></Provider>);
    screen.getByText(/Add to MyCloset/)
    screen.getByText(/Similar clothes in your Closet:/)
    screen.getByText(/Other clothes in this Category:/)
    screen.getByText(/Similar clothes in your Closet:/)
    screen.getByRole('button', {name: 'Add to MyCloset'})
  })
  


})
  