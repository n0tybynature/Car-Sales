import React from 'react';
import {connect} from "react-redux";
import {removeAdd} from "./../actions/featuresActions";

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button
      className="button"
      onClick={() => {
          props.removeAdd(props.feature)
        }
      } >X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = (state, props) => {
  return {
    ...state,
    feature: props.feature
  }
}



export default connect(mapStateToProps,{removeAdd})(AddedFeature);
