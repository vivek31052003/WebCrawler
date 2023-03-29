import { useState } from 'react';
import './App.css';
import Result from './components/Result.js';


function App() {
  
  const [query,setQuery]  = useState("");
  const [num_results,setNumresults] = useState("5");
  const [results,setResults] = useState([]);

  const search = async () =>{
      // console.log(query);
      const api_key = 'AIzaSyAmGV4u57Ej4qC692Dome4MFxUI53Pdbe4'
    const search_engine_id = '727a51931420242ed'
    const url = `https://www.googleapis.com/customsearch/v1?key=${api_key}&cx=${search_engine_id}&q=${query}&num=${num_results}`;
  fetch(url)
     .then(response => response.json())
     .then(data => {
      setResults(data.items);
     console.log(data); 
   })
  .catch(error => console.error(error));
  }


  return (
    <div className="App">
     <h1>Web Crawler</h1>
          <input onChange={(e)=>{
              setQuery(e.target.value)
            }} 
            type={"text"}>

          </input>
          <input onChange={(e)=>{
              setNumresults(e.target.value)
            }} 
            type={"number"}>

          </input>
      <button onClick={search}> Search </button>
      <Result {...results}/>
    </div>
    
  );
}

export default App;