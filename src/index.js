import React, { Component } from "react"
import { render } from "react-dom"
import { combineReducers, createStore } from "redux"
import { Provider } from "react-redux"

import reducers from "./reducers"

import App from "./App"

const data = {}

const store = createStore(reducers, data)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)
