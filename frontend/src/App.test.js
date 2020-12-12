import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import store from './store';
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'antd/dist/antd.css';
import firebase from 'firebase/app';
import store from './store';
import { Provider } from "react-redux"



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCttN1H7EXdaWHsYOgKXexsSYcGcF2LKGA",
  authDomain: "dd-dinner-dog.firebaseapp.com",
  projectId: "dd-dinner-dog",
  storageBucket: "dd-dinner-dog.appspot.com",
  messagingSenderId: "61338504206",
  appId: "1:61338504206:web:4f195fab8adf8588e5805f",
  measurementId: "G-NFJBN8CM17"
};
firebase.initializeApp(firebaseConfig);

window.store = store;
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
