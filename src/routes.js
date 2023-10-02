import Favoritos from "pages/Inicio/Favoritos";
import Inicio from "./pages/Inicio";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Player from "pages/Player";
import NaoEncontrado from "pages/NaoEncontrado";
import PaginaBase from "pages/PaginaBase";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      
          <Routes>
            <Route path="/" element={<PaginaBase/>}>
              <Route index element={<Inicio />}></Route>
              <Route path="favoritos" element={<Favoritos />}></Route>
              <Route path=":id" element={<Player/>}></Route>
              <Route path="*" element={<NaoEncontrado/>}></Route>

            </Route>
          </Routes>
      
    </BrowserRouter>
  );
};

export default AppRoutes;
