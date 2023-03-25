import { useState } from 'react'
import './styles/App.css'
import Title from './components/Title.jsx'
import Button from './components/Button.jsx'
import Joke from './components/Joke.jsx'
import Select from './components/Select.jsx'

function App() 
{
  const [Jokes, setJokes] = useState("");
  const [Categorie, setCategorie] = useState([]);
  let url = "https://api.chucknorris.io/jokes/categories";
  fetch(url).then((resp)=>{
    return resp.json();
  }).then(data=>{
    data.unshift("random");
    setCategorie(data);
  }).catch((e)=>{
    console.log(e)
  })

  let Carica = function ()
  {
    let Categoria = document.getElementById("Select").value
    let url = "https://api.chucknorris.io/jokes/" + (Categoria==="random"?"random":("random?category=") + Categoria);
    fetch(url).then((resp)=>{
      return resp.json();
    }).then(data=>{
      setJokes(data.value);
    }).catch((e)=>{
      console.log(e)
    })
  }

  let Copia = function ()
  {
    let Joke = document.getElementById("Joke");
    navigator.clipboard.writeText(Joke.innerText);
  }

  return (
    <div className="App">
      <Title />
      <p><Button text='Carica il joke' callback={Carica}/></p>
      <Select id='Select' values={Categorie}></Select>
      <Joke id="Joke">{Jokes}</Joke>
      <Button id="Clipboard" text='Copia il joke' callback={Copia}/>
    </div>
  )
}

export default App
