import React from 'react';
require('./SomeButton.scss');
let SomeButton = React.createClass({
  render :function(){
    return(
      <div className = "SomeButton">
        1111111
      </div>
    )
  }
})

// class SomeButton extends React.Component {
//   render(){
//     return(
//       <div>
//
//       </div>
//     )
//   }
// }

  
module.exports = SomeButton;
