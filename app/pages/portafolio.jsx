import portafolio from "../json/portfolio.json";
import Link from "next/link";
import Image from "next/image";
import "../globals.css";
import "../style/portafolio.css";

export default function Portafolio() {
  return (
    <div className="container portfolio">
      <h2 className="section-title">Mis Trabajos</h2>

      {portafolio.map((item, index) => (
        <Link
          href={`${item.enlace}`}
          className="portfolio-card"
          key={index}
          target="_blank"
          rel="noopener"
        >
          <Image
            className="imagen"
            src={item.imagen}
            width={400}
            height={400}
            alt={item.titulo}
          >

          </Image>
          <aside className="portfolio-card-info">
            <div>
              <h3>{item.titulo}</h3>
              <p>{item.descripcion}</p>
              <small>
                <b>FECHA: </b>
                {item.fecha}
              </small>
              <br />
              <small>
                <b>TIPO: </b>
                {item.tipo}
              </small>
              <br />
              <small>
                <b>REPOSITORIO: </b>
                <p>{item.repositorio}</p>
              </small>
            </div>
          </aside>
        </Link>
      ))}
    </div>
  );
}
