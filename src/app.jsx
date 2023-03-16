import React,{useState,useEffect} from 'react';
import axios from 'axios'
import './main.css'
import {FaFlag} from 'react-icons/fa'
const apikey='https://restcountries.com/v3.1/all'
function App() {
  const [country,setCountry]=useState([])
  const [input,setInput]=useState('')
  const [error,setEroor]=useState('no country found')
 const fetch=()=> {
        axios.get(apikey)
        .then((res)=>{
          console.log(res)
          setCountry(res.data)
        })
        .catch((err)=>{
          console.log(err)
        })
    }

  useEffect(()=>{
 fetch('nigeria')
},[])


  return(
    <div>
    <div>

<div>

<div className='country'>
<h1> <FaFlag className='flag' /></h1>
  <input type='text' placeholder='enter a country....' value={input} onChange={(e)=>setInput(e.target.value)}/>
 </div>
 </div>
<div className='country-grid'>
  {
    country
    .filter((item)=>{
      if(item.name.common==''){
        return 
      }
else if (item.name.common.toLowerCase().includes(input.toLowerCase())){
return item
      }
  
    })
 

    
    .map((item)=>{
      return(
  
        <div key={item.id} className='flex-country'>


<div className='camp-img'>
<div className='img-country'>
<h3>flag</h3>
<img src={item.flags.png} alt={item.alt}/>
</div>
<div className='img-country'>
<h3>coat of arm</h3>
<img src={item.coatOfArms.png} alt={item.alt}/>
</div>
</div>
<h3>country: {item.name.common}</h3>
<h4> continent:{item.continents}</h4>
<p> capital: {item.capital}</p>
<p>population: {item.population}</p>
        </div>
      )
    })
  }
  </div>
</div>
    </div>
  )





}

export default App;


 