import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Products from './Products';


const App = () => {
  const[Search,setSearch] = useState('');
  const[data,setdata] = useState([]);
  const YOUR_APP_ID ="a9063a7d";
  const YOUR_APP_KEY ="f4c6965cd0a4d1848c1f2e433cf5d9b7"
  const SubmitHandler = e =>{
    e.preventDefault();
    fetch(`https://api.edamam.com/search?q=${Search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=30&calories=591-722&health=alcohol-free`).then(
    Response => Response.json()
    ).then(
      data => setdata(data.hits)
    )
  }
  return (
    <div>
      <center>
        <h4>Food Recipe App</h4><br />
        <form onSubmit={SubmitHandler}>
          <input type='text'value={Search} onChange={ (e)=> setSearch(e.target.value)}/><br />
          <br />
          <input type='Submit' className='btn btn-primary' value="Search"/>
        </form>
        <br />
        {data.length>=1 ? <Products data={data} />:null}
      </center>
    </div>
  )
}

export default App