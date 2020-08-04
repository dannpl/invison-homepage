import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import history from '../../routes/history';

import SignIn from '../../pages/SignIn';

const mockedHistoryPsuh = jest.fn();

jest.mock('react-router-dom', () => ({
  userHistory: () => ({
    push: mockedHistoryPsuh,
  }),
  Link: ({ children }) => children,
}));

describe('Login Page', () => {
  it('Should be able to login', () => {
    const { getByPlaceholderText, getByText } = render(
      <SignIn history={history} />
    );

    const emailField = getByPlaceholderText('Username or Email');
    const passwordField = getByPlaceholderText('Password');
    const buttonElement = getByText('Sign in');

    fireEvent.change(emailField, { target: { value: 'dan@gmail.com' } });
    fireEvent.change(passwordField, { target: { value: '123456' } });

    fireEvent.click(buttonElement);

    setTimeout(() => {
      expect(mockedHistoryPsuh).toHaveBeenCalledWith('/home');
    }, 2000);
  });
});
