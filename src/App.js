import React, {
  useState
} from 'react';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';
import './App.css';
import Person from "./Person/Person";

const App = props => {

  const [personState, setPersonsState] = useState(
    {
      persons: [
        {
          name: "MAAAAAX", age: 28
        },
        {
          name: "Manu", age: 29
        },
        {
          name: "Steph", age: 22
        }
      ]
    }
  );

  const [otherState, setOtherState] = userState({ otherState: "sss" });

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        {
          name: "MAX", age: 28
        },
        {
          name: "Manu", age: 29
        },
        {
          name: "Steph", age: 22
        }
      ]
    });
  }

  return (
    <div className="App" >
      <h1> Hi, i 'm a react app</h1>
      <p> this is really working </p>
      <button onClick={switchNameHandler}>Switch name</button>
      <Person name={personState.persons[0].name} age={personState.persons[0].age} />
      <Person name={personState.persons[1].name} age={personState.persons[1].age} />
      <Person name={personState.persons[2].name} age={personState.persons[2].age}>My hobbies: racing</Person>
    </div>
  );
}

export default App;

