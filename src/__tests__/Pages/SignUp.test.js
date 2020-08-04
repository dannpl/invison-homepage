import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import history from '../../routes/history';

import SignUp from '../../pages/SignUp';

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
      <SignUp history={history} />
    );

    const nameField = getByPlaceholderText('Full Name');
    const emailField = getByPlaceholderText('Username or Email');
    const passwordField = getByPlaceholderText('Create Password');
    const buttonElement = getByText('Sign Up');

    fireEvent.change(nameField, { target: { value: 'Dan' } });
    fireEvent.change(emailField, { target: { value: 'dan@gmail.com' } });
    fireEvent.change(passwordField, { target: { value: '123456' } });

    fireEvent.click(buttonElement);

    setTimeout(() => {
      expect(mockedHistoryPsuh).toHaveBeenCalledWith('/signin');
    }, 2000);
  });
});
