import React from 'react';
import { addMore } from '../actions/featuresActions';
import { connect } from "react-redux";


const AdditionalFeature = props => {
  console.log(props)



  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button"
       onClick = {() => {
         props.addMore(props.feature)
       }}
       >Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};



const mapStateToProps = (state, props) => {
  return {
    ...state,
    feature: props.feature
  }
}



export default connect(mapStateToProps, {addMore})(AdditionalFeature);
