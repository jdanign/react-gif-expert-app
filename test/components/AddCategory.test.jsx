import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('Pruebas en <AddCategory/>', () => {
    test('Debe cambiar el valor de la caja de texto "onInputChange()"', () => {
        render(<AddCategory onNewCategory={()=>{}} />);

        const input = screen.getByRole('textbox');
        const value = 'Saitama';

        // Dispara el evento con un valor introducido por el usuario
        fireEvent.input(input, {target:{value: value}});

        // Aserción del resultado esperado después del evento
        expect(input.value).toBe(value);

        //screen.debug()
    });


    test('Debe llamar "onNewCategory()" si el input tiene un valor', () => {
        const inputValue = 'Saitama';
        // Se crea una función 'mock' en 'jest', que es una simulación de una función
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory} />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        // Dispara el evento con un valor introducido por el usuario
        fireEvent.input(input, {target:{value: inputValue}});
        // Dispara el evento de submit del formulario
        fireEvent.submit(form);

        // Como la función "onSubmit()" restablece el value del input se evalúa eso
        expect(input.value).toBe('');

        // Evalua que la función ha sido llamada
        expect(onNewCategory).toHaveBeenCalled();
        // Evalua que la función ha sido llamada solo una vez
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        // Evalua que la función ha sido llamada con el valor introducido en el input
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);

        //screen.debug()
    });


    test('No debe llamar el "onNewCategory()" si el input está vacío', () => {
        const inputValue = '';
        // Se crea una función 'mock' en 'jest', que es una simulación de una función
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory} />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        // Dispara el evento con un valor introducido por el usuario
        fireEvent.input(input, {target:{value: inputValue}});
        // Dispara el evento de submit del formulario
        fireEvent.submit(form);

        // Evalua que la función ha sido llamada
        expect(onNewCategory).toHaveBeenCalledTimes(0);
        expect(onNewCategory).not.toHaveBeenCalled();
    });
});