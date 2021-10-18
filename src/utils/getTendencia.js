
const tendencia = 'https://api.themoviedb.org/3/trending/movie/week';
const key = '67793f2b9dbf21d7978096d65e31da6b';
const getTendencia = async () => {
    const URL = `${tendencia}?api_key=${key}`;
    try{
        const response = await fetch (URL);
        const data = await response.json();
        return data   
    }catch(error){
        console.log('Fetch Error: ', error);   
    };
};

export default getTendencia;