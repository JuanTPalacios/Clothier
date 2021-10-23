import {fireEvent, render, screen} from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from '../../redux/reducers';
import SearchResults from './SearchResults';


describe('MyCloset component', () => {
  test('should match the snapshot', () => {
    let store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__());
    const { container } = render(<Provider store={store}><SearchResults /></Provider>);
    expect(container.firstChild).toMatchSnapshot();
  })

  test('it should correctly render the headers', () => {
    let store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__());
   render(<Provider store={store}><SearchResults /></Provider>);
   screen.getByText(/People:/)
   screen.getByText(/Items:/)
 })

})
  