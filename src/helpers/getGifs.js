
  export const getGifs = async(category) => {

        const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=RidARRlSbBylHhXw399xU0dW1gz1ETQR`;

        //peticion con async
        const resp = await fetch(url);
        const { data } = await resp.json();
        
        const gifs = data.map(img =>{
            //hago un return de las propiedades que quiero
            return{
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }

        })
        
        return gifs;
    
        
    }   
   