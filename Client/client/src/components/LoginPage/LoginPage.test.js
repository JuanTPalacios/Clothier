import {render, screen} from '@testing-library/react';
import LoginPage from './LoginPage';

import { BrowserRouter as Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

jest.mock('../../apiServices.tsx',  () => ({
  login: () => ({email: 'test@test.com', password: 'test'})
}))

describe('Login Page', () => {
  test('should match the snapshot', () => {
    const { container } = render(<Router><LoginPage /></Router>);
    expect(container.firstChild).toMatchSnapshot();
  })

  test('should have correct title', () => {
    render(<Router><LoginPage /></Router>);
    screen.getByText(/Welcome to Clothier!/);
    screen.getByText(/New to Clothier?/);
  })
 

  test('Should call login with the correct credentials', async () => {
    // const setUser = jest.fn();
    const setAuthenticated = jest.fn();
    const setUserLogin = jest.fn();
    render(<Router><LoginPage setAuthenticated={setAuthenticated} /></Router>);
    const emailInput = screen.getByPlaceholderText(/email/i);
    const passwordInput = screen.getByPlaceholderText(/Password/i)
    const submitBtn = screen.getByRole('button', {name: /log in/i})

    userEvent.type(emailInput, 'test@test.com')
    userEvent.type(passwordInput, 'test')

    await userEvent.click(submitBtn)
    expect(setAuthenticated).toBeCalledTimes(1)
    expect(setUserLogin).toBeCalledTimes(0)

  })
})