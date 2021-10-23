import {render, screen} from '@testing-library/react';

import Register from './Register';
import { Provider } from 'react-redux';
import reducers from '../../redux/reducers';
import { createStore } from 'redux';

let store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__());

describe('Register Page', () => {
  test('should match the snapshot', () => {
    const { container } = render(<Provider store={store}><Register /></Provider>);
    expect(container.firstChild).toMatchSnapshot();
  })
  test('should have correct title', () => {
    render(<Provider store={store}><Register /></Provider>)
    screen.getByText(/Welcome to Clothier!/i);
    screen.getByText(/Please follow these steps to begin:/);
    screen.getByText(/Next/);
  })

})