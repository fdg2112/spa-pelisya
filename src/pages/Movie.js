import getHash from "../utils/getHash";
import getPelicula from "../utils/getPelicula";
import getReparto from "../utils/getReparto";

const Peliculas = async () => {
    const id = getHash();
    const pelicula = await getPelicula(id);
    const cast = await getReparto(id);
    const view = `
        <div class="pelicula-card">
            <div class="pelicula-info">
                <h2>${pelicula.original_title}</h2>
                <p>${pelicula.overview}</p><br>
                <h3>Año: </h3>
                <p>${pelicula.release_date}</p><br>
                <h3>Duración: </h3>
                <p>${pelicula.runtime} min.</p><br>
                <h3>Puntuación: </h3>
                <p>${pelicula.vote_average}</p><br>
                <h3>Géneros: </h3>
                <p>${pelicula.genres.map(gen => `${gen.name}` ).join(', ')}</p><br>
                <h3>Reparto: </h3>
                <p id="cast">${cast.cast.map(act => `${act.name}; `).join(' ')}</p>
            </div>
            <div class="pelicula-img">
                <img class="poster-img" src="https://image.tmdb.org/t/p/w500${pelicula.poster_path}" alt="img">
            </div>
        </div>
    `;
    return view;
}

export default Peliculas;