const reparto = 'https://api.themoviedb.org/3/movie/';
const key = '67793f2b9dbf21d7978096d65e31da6b';
const getReparto = async (id) => {
    const URL = `${reparto}${id}/credits?api_key=${key}`;

    try{
        const response = await fetch (URL);
        const data = await response.json();
        return data   
    }catch(error){
        console.log('Fetch Error: ', error);
        
    };
};
export default getReparto;
