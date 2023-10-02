import Banner from "components/Banner"
import Card from "components/Cards"
import Titulo from "components/Titulo"
import styles from './Inicio.module.css'
import { useEffect, useState } from "react"
 const Inicio = ()=>{
  const [videos, setVideos] = useState([])
  useEffect(()=>{
    fetch('https://my-json-server.typicode.com/LucineiaSilvah/cinetag-api/videos').then(respostas => respostas.json()).then(dados=>{
      setVideos(dados)
    })
  },[])
  return(
   <>
   
    <Banner imagem="home" />
    <Titulo>
      <h1>Um Lugar para guardar seus videos e filmes!</h1>
    </Titulo>
    <section className={styles.container}>
    {videos.map((video) =>{
    return <Card {...video} key={video} id={video.id} />
    })
    }
    </section>
    
  
   </>
 )}

 export default Inicio