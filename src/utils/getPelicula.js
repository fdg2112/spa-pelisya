import Error404 from "../pages/Error404";

const pelicula = 'https://api.themoviedb.org/3/movie/';
const key = '67793f2b9dbf21d7978096d65e31da6b';
const getPelicula = async (id) => {
    const URL = id ? `${pelicula}${id}?api_key=${key}&language=es` : Error404;
    try{
        const response = await fetch (URL);
        const data = await response.json();
        return data   
    }catch(error){
        console.log('Fetch Error: ', error);
    };
};

export default getPelicula;