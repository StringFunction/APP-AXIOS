import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [id, setId] = useState("1")
    const [nome, setnome] = useState()
    useEffect(() =>{
    const fetcData = async () =>{
      const dados =  await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      console.log(dados.data.name);
      setnome(dados.data.name)
      }
      fetcData()
    }, [id])
      
      return (
        <div>
        <input type="text" id='nome' onChange={event => setId(event.target.value)} />
        <div>
          <div>{nome ? <p>{nome}</p> : <p>Carregando....</p>}</div>
          <div>titulo</div>
          <div>artista</div>
          <div>
            <div>tag1</div>
            <div>tag2</div>
          </div>
        </div>
      </div>
  )
}

export default App
