import getPopular from "../utils/getPopular";
import getTendencia from "../utils/getTendencia";

const Home = async() => {
    const infoPopular = await getPopular();
    const infoTendencia = await getTendencia();
    const view = `
        <div class="peliculas">
            <article class="peliculas-populares">
                <section class="seccion-titulo">
                    <h2>Las más Populares</h2>
                </section>
                <section class="seccion-pelicula id="populares">
                    ${infoPopular.results.map(pelicula => `
                        <div class="pelicula-item">
                            <a href="#/${pelicula.id}">
                                <img src="https://image.tmdb.org/t/p/w500${pelicula.backdrop_path}" alt=${pelicula.original_title}>
                                <h3>${pelicula.original_title}</h3>
                                <p>Puntuación: ${pelicula.vote_average}</p>
                            </a>
                        </div>
                        `
                    ).join('')}
                </section>
            </article>
            <article class="peliculas-tendencias">
                <section class="seccion-titulo">
                    <h2>Tendencias</h2>
                </section>
                <section class="seccion-pelicula id="tendendencia">
                    ${infoTendencia.results.map(pelicula => `
                        <div class="pelicula-item">
                            <a href="#/${pelicula.id}">
                                <img src="https://image.tmdb.org/t/p/w500${pelicula.backdrop_path}" alt=${pelicula.original_title}>
                                <h3>${pelicula.original_title}</h3>
                                <p>Puntuación: ${pelicula.vote_average}</p>
                            </a>
                        </div>
                       `
                    ).join('')}
                </section>
            </article>
        </div>
   `;

   return view;
}

export default Home;