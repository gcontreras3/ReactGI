import React from 'react';
import BasicInfo from './components/BasicInfo'



class App extends React.Component {
  constructor(){
    super()
    this.state = {
      people: [
        {
          id: 1,
          name: "Jerry",
          age: 26,
          birthdate: "June"
        },
        {
          id: 2,
          name: "Mr. Salty",
          age: 24,
          birthdate: "March"
        },
        {
          id: 3,
          name: "Mr. Pepper",
          age: 32,
          birthdate: "November"
        }
      ]
    }
  }
  render() {
    console.log(this.state.people);
    return (
      <div>
      {this.state.people.map(personInfo =>{
        return <BasicInfo info={personInfo} key={personInfo.id}/>
  })}
      </div>
    )
  }
}
export default App;

