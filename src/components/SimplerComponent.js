// Code SimplerComponent Here
import React, {Component} from 'react'
import SimpleComponent from './SimpleComponent'

const SimplerComponent = (props) => {

  return (
    <div onClick={props.handleClick}>
      I am just happy.
    </div>
  )

}//end of functional component

export default SimplerComponent;
