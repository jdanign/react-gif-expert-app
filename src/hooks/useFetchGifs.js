import {useState, useEffect} from 'react';
import {getGifs} from '../helpers/getGifs';


/**
 * Custon hook que obtiene las imágenes.
 * @returns 
 */
export const useFetchGifs = (category)=>{
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    

	/* Si el segundo parámetro del 'useEffect' está vacío solo se ejecuta la primera vez que se crea el componente */
	useEffect(()=>{
		getGifs(category)
            .then(newImages => {
                setImages(newImages);
                setIsLoading(false);
        });
	}, []);

    
    return {
        images,
        isLoading
    }
}
