import Banner from 'components/Banner'
import styles from './Favoritos.module.css'
import Titulo from 'components/Titulo'
import Card from 'components/Cards'
import { useFavoritosContext } from 'components/contexts/Favoritos'
const Favoritos = ()=>{
  const {favorito} = useFavoritosContext()
  return(
    <>
     <Banner imagem="favoritos"/>
     <Titulo>
      <h1>Neus videos e filmes favoritos!</h1>
    </Titulo>
    <section className={styles.container}>
     {favorito.map((fav) => {
      return <Card {...fav} key={fav.id}/>
     })}
    </section>
    </>
  )
}
export default Favoritos