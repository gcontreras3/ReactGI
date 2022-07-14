import React from 'react';
import './BasicInfo.css';



class BasicInfo extends React.Component {

  constructor(props) {

  console.log(props)

    // Calling super class constructor
    super(props);
      
    // Creating state
    this.state = {
      info: props.info
    }
      
  }
  render() {
    return <div className="profileCard">
            <h2>{`Name: ${this.state.info.name}`}</h2>
            <h3>{`Age: ${this.state.info.age}`}</h3>
            <h3>{`BirthDate: ${this.state.info.birthdate}`}</h3>
        </div>;
  }
}
export default BasicInfo;

