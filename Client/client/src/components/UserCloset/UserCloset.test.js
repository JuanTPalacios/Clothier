import {render, screen} from '@testing-library/react';
import UserCloset from './UserCloset';
import { Provider } from 'react-redux';
import reducers from '../../redux/reducers';
import { createStore } from 'redux';
import ReactRouter from 'react-router'
let store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__());

describe('Register Page', () => {
  test('should match the snapshot', () => {
    jest.spyOn(ReactRouter, 'useParams').mockReturnValue({ userId: 1 });
    const { container } = render(<Provider store={store}><UserCloset /></Provider>);
    expect(container.firstChild).toMatchSnapshot();
  })
  test('should have correct title', () => {
    jest.spyOn(ReactRouter, 'useParams').mockReturnValue({ userId: 1 });
    render(<Provider store={store}><UserCloset /></Provider>);
    screen.getByText(/'s Closet/);

  })
})