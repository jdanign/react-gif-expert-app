/**
 * Obtiene un array de objetos con ID, TITULO y URL recibidos desde api.giphy
 * @param {string} query Cadena con el texto sobre el cual se buscará el gif.
 * @returns Array de objetos con la información de los gifs. 
 * O bien un array vacío si no encuentra nada o se produce un error.
 */
export const getGifs = async(query='')=>{
	let gifs = [];
	
	try {
		const 	apiUrl	= 'https://api.giphy.com/v1/gifs/search',
				apiKey	= 'LbGeusPGk2JIk1vKtpM72SvZHKOmKZS9',
				limit	= 5,
				resp	= await fetch(`${apiUrl}?api_key=${apiKey}&q=${query}&limit=${limit}`),
				{data}	= await resp.json();

		gifs = data.map(({id, title, images}) => ({
			id,
			title,
			url : images.preview_webp.url
		}));

		return gifs;
		
	} catch (error) {
		console.error(error);
	}
}