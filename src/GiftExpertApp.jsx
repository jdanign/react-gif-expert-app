import {useState} from 'react';
import {AddCategory, GifGrid} from './components';


export const GiftExpertApp = () => {
	const [categories, setCategories] = useState(['One punch']);


	const onAddCategory = (newCategory)=>{
		// Solo inserta la categoría si esta no existe aún
		if (!categories.includes(newCategory))
			//setCategories(categories.concat(newCategory));
			//setCategories(cat => [...cat, newCategory]);
			//setCategories([...categories, newCategory]);
			setCategories([newCategory, ...categories]);
	}


	return (
		<>
			<h1>GiftExpertApp</h1>
			{/* INPUT */}
			<AddCategory onNewCategory={onAddCategory}/>
			
			{/* LISTADO DE GIF */}
			{/* No hay que usar el índice del array de 'categories' como 'key', hay que usar un identificador único, no la posición del array interno */}
			{categories.map(category => 
				<GifGrid 
					key={category} 
					category={category}
				/>
			)}

			{/* GIF ITEM */}
		</>
	)
}