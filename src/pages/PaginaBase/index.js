import Cabecalho from "components/Cabecalho";
import Container from "components/Container";
import Rodape from "components/Rodape";
import FavoritosProvider from "components/contexts/Favoritos";
import { Outlet } from "react-router-dom";

function PaginaBase() {
  return (
    <main>
    <Cabecalho />
    <FavoritosProvider>
        <Container>
            <Outlet />
        </Container>
    </FavoritosProvider>
    <Rodape />
</main>
  )
}

export default PaginaBase;