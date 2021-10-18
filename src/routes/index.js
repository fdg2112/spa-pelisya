import Error404 from "../pages/Error404";
import Home from '../pages/Home';
import Peliculas from "../pages/Movie";
import Header from '../templates/Header';
import getHash from "../utils/getHash";
import resolveRoutes from "../utils/resolveRoutes";

const routes = {
    '/': Home,
    '/:id': Peliculas,
};

const routesMap = async() => {
    const header = null || document.getElementById("header");
    const movie_grid = null || document.getElementById("movie-grid");
    let hash = getHash();
    let route = await resolveRoutes(hash);
    let render = routes[route] ? routes[route] : Error404;
    header.innerHTML = Header();
    movie_grid.innerHTML = await render();
}

export default routesMap;