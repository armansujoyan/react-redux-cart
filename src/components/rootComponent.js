import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import App from '../App';
import { Provider } from 'react-redux'
import store from '../redux/store'

export default function Root() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  )
}
