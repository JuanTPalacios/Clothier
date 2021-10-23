import {render, screen} from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from '../../redux/reducers';
import MyCloset from './MyCloset';
describe('MyCloset component', () => {
  test('should match the snapshot', () => {
    let store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__());
    const { container } = render(<Provider store={store}><MyCloset /></Provider>);
    expect(container.firstChild).toMatchSnapshot();
  })

  test('It Should render the correct headings', () => {
    let store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__());
    render(<Provider store={store}><MyCloset /></Provider>);
      screen.getByText(/MyCloset/)
      screen.getByText(/All/)
    })
})
  