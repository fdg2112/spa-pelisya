const popular = 'https://api.themoviedb.org/3/discover/movie';
const key = '67793f2b9dbf21d7978096d65e31da6b';
const getPopular = async () => {
    const URL = `${popular}?api_key=${key}&sort_by=vote_count.desc`;
    try{
        const response = await fetch (URL);
        const data = await response.json();
        return data   
    }catch(error){
        console.log('Fetch Error: ', error);
    };
};

export default getPopular;