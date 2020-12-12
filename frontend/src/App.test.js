import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import store from './store';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { BrowserRouter } from 'react-router-dom';

const mockStore = configureMockStore();
const store = mockStore({});

test('renders learn react link', () => {
  const { getByText } = render(
    <Provider store={store}>
      <BrowserRouter >
        <App />
      </BrowserRouter>
    </Provider>);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
