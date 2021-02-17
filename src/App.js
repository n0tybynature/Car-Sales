import React from 'react';
import {Provider, connect } from "react-redux";

import {addMore, removeAdd} from "./actions/featuresActions";
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';





const App = (state) => {
  console.log(state)
  


  return (
      <div className="boxes">
        <div className="box">
          <Header car={state.car} />
          <AddedFeatures car={state.car} />
        </div>
        <div className="box">
          <AdditionalFeatures additionalFeatures={state.additionalFeatures} />
          <Total car={state.car} additionalPrice={state.additionalPrice} />
        </div>
      </div>
  );
};

const mapStateToProps = state => {
  return {
    ...state
  }
}

const mapDispatchToProps = dispatch => {
  return (addMore, removeAdd)
}




export default connect(mapStateToProps, mapDispatchToProps)(App);
