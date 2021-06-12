import React, {useState, useEffect} from 'react'
import './App.css';

const App = () => {

  const [name, setName] = useState('');
  const [age, setage] = useState(0);
  const [names, setnames] = useState([]);
  const [data, setData] = useState(null);
  const [loading, setloading] = useState(true);


  useEffect(() => {
    console.log("names", names)
    setloading(false)
  }, [names])

  const addToArray = () => {
    setnames([...names, name])
    setName("")
  }

  return (
    <div className="App">
      <input placeholder="Name"
        value={name}
        onChange={(event) => {
          setName(event.target.value);
          console.log("step2", name)
        }}
        style={{
          height: 40,
          width: '20%',
          padding: 5,
          marginBottom: 10
        }} />

      <button
        onClick={addToArray}
        style={{
          height: 40,
          width: '10%',
          padding: 5,
        }}
      >
        Click
      </button>


      {
        names &&
        names.map((item, index) => {
          return (
            <p>{item}</p>
          )
        })
      }


    </div>
  );
}

export default App;