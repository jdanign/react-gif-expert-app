import {renderHook, waitFor} from "@testing-library/react";
import {useFetchGifs} from "../../src/hooks/useFetchGifs";


describe('Pruebas en el hook useFetchGifs', () => {
    // El estado inicial es que 'images' sea un 'array vacío' y que el 'isLoading' esté en 'true'
    test('Debe regresar el estado inicial', () => {
        // Categoría para el customHook 'useFetchGifs'
        const category = 'One Punch';

        // Permite llamar el customHook 'useFetchGifs' y manejar su resultado
        const {result} = renderHook(()=> useFetchGifs(category));

        // Desestructura el resultado anterior obtenido
        const {images, isLoading} = result.current;

        // Aserciones
        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
    });


    test('Debe retornar un array de imágenes y el isLoading en false', async () => {
        // Categoría para el customHook 'useFetchGifs'
        const category = 'One Punch';

        // Permite llamar el customHook 'useFetchGifs' y manejar su resultado
        const {result} = renderHook(()=> useFetchGifs(category));

        // Espera a la promesa
        await waitFor(
            // Función de jest para esperar a que suceda el cambio, la respuesta debe ser booleana
            ()=> expect(result.current.images.length).toBeGreaterThan(0),
            {timeout: 2000}
        );

        // Desestructura el resultado anterior obtenido
        const {images, isLoading} = result.current;

        // Aserciones
        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    });
});