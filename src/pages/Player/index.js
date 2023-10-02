import Banner from "components/Banner";
import styles from "./Player.module.css";
import Titulo from "components/Titulo";
import { useParams } from "react-router-dom";
import NaoEncontrado from "pages/NaoEncontrado";
import { useEffect, useState } from "react";
const Player = () => {
  const [video, setVideo] = useState([]);
  const parametros = useParams();
  useEffect(() => {
    fetch(
      `https://my-json-server.typicode.com/LucineiaSilvah/cinetag-api/videos?id=${parametros.id}`)
      .then((resposta) => resposta.json())
      .then((dados) => {
        setVideo(...dados);
      });
  }, []);

  if (!video) {
    return <NaoEncontrado />;
  }
  return (
    <>
      <Banner imagem="player" />
      <Titulo>
        <h1>Player</h1>
      </Titulo>
      <section className={styles.container}>
        <h2>{video.titulo}</h2>
        <iframe
          width="100%"
          height="515"
          src={video.link}
          title={video.titulo}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </section>
    </>
  );
};
export default Player;
