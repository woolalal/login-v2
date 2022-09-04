import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bulma/css/bulma.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import userReducer from './redux/userSlice';

const store = configureStore({
  reducer: {
    user: userReducer
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  // </React.StrictMode>
);
