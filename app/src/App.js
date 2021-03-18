// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello World!</h1>
//     </div>
//   );
// }

// export default App;

import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component{
  render(){
    return(
      <div className="App">
        <h1>Hello World!</h1>
        <Person name="david" age="33"/>
        <Person>i am a props child</Person>
      </div>
    )
  }
}

export default App;