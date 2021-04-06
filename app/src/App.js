// function App() {
//   return (
//     <div className="App">
//       <h1>Hello World!</h1>
//       <Person name={"david"} age={"33"}/>
//     </div>
//   );
// }

// export default App;

import React, {useState} from 'react';
import Person from './Person/Person';
import './App.css';

//import {Component}
//class App extends Component
//render()
const App = props => {
    const [personsState,setPersonsState] = useState({
      persons: [
        {name: "max", age: 30},
        {name: "david", age: 33},
        {name: "chris", age: 38}
      ],
      otherState: 'some other value 2'
    });

    const [otherState, setOtherState] = useState('jhjhjhjhjh');

    console.log("---->", personsState, otherState)

    return(
      <div className="App">
        <h1>App.js</h1>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
      </div>
    )
}


export default App;



// switchNameHandler = () =>  {
//   //console.log("was clicked!")
//   // NO BUENO->this.state.persons[0].name = "Maximillian";
//   this.setState({persons:[
//     {name: "maxibillian", age: 44},
//     {name: "david a", age: 34},
//     {name: "chris", age: 38}
//   ]
// })
// }
