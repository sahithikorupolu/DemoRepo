
import { useState } from 'react';
import './App.css';
import Product from './Product';


function App() {

  const [search, setSearch] = useState('');
  const[data, setData]  = useState([]);
  const YOUR_APP_ID = "029ec7b7";
  const YOUR_APP_KEY = "2169150c99a00d74c83d96cdf96b431f	"

  const submitHandler = e =>{
    e.preventDefault();
    fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=6&calories=591-722&health=alcohol-free`)
    .then (response => response.json()
    ).then(
      data=> setData(data.hits)
    )
  }

  return (
    <div>
      <center>
     
        <h2>Food Recepie App</h2>
        <form onSubmit={submitHandler}>
          <input type='text' onChange={(e)=> setSearch(e.target.value)}/><br/><br/>
          <input type='submit' className="btn btn-primary" value='Search' />
        </form>
        {data.length>=1 ? <Product data = {data}/> : null}
      </center>
    </div>
  );
}

export default App;
