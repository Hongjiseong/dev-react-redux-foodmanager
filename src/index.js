import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReduxPromise from 'redux-promise'

import SideBar from './components/SideBar/_index';
import Header from './components/Header/_index';
import Ingredient from './components/DashBoard/Ingredient/_index';
import FoodSlider from './components/DashBoard/FoodSlider/_index';
import Cooking from './components/DashBoard/Cooking/_index';

import reducers from './reducers/_index';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)
const PUBLE_MODE = "PUBLE";
const DEV_MODE = "DEV";

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    {/* <SideBar MODE={DEV_MODE} /> */}
    <div id="contents">
      <BrowserRouter>
        <Header MODE={PUBLE_MODE} />
        <div className="content">
          <div>
            <Switch>
              <Route path="/cooking"><Cooking MODE={DEV_MODE} /></Route>
              <Route path="/foodSlider"><FoodSlider MODE={DEV_MODE} /></Route>
              <Route path="/"><Ingredient MODE={DEV_MODE} /></Route>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  </Provider>,
  document.getElementById('root')
)
