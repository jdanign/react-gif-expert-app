import {useState} from 'react';


export const AddCategory = ({onNewCategory}) => {
	const inputValueDefault = '';
	const [inputValue, setInputValue] = useState(inputValueDefault);


	// Establece el valor del estado al cambiar el input, pulsando teclas dentro por ejemplo
	const onInputChange = ({target})=>{
		setInputValue(target.value);
	}


	const onSubmit = (event)=>{
		const cleanValue = inputValue.trim();
		// Evita que el formulario se envíe y recargue la página
		event.preventDefault();

		// Si tiene más de un caracter y no está vacío
		if (cleanValue.length > 1)
			onNewCategory(cleanValue);
		
		// Limpia los caracteres del estado del input después de enviar el formulario
		setInputValue(inputValueDefault);
	}


	return (
		<form onSubmit={onSubmit}>
			<input
				type="text"
				placeholder="Buscar gifs"
				value={inputValue}
				onChange={onInputChange}
			/>
		</form>
	)
}