import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid"
import { useFetchGifs } from "../../src/hooks/useFetchGifs";


// Hace un mock completo de esta ruta
jest.mock('../../src/hooks/useFetchGifs');


describe('Pruebas en <GifGrid/>', () => {
    const category = 'One Punch';


    test('Debe mostrar el loading inicialmente', () => {
        // Establece el objeto con los valores iniciales que se deben recibir
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });


        render(<GifGrid category={category}/>);

        // Debe aparecer la categoría en algún sitio
        expect(screen.getByText(category));
        // Debe aparecer el texto de cargando en algún sitio
        expect(screen.getByText('Cargando...'));

        //screen.debug();
    });


    test('debe mostrar items cuando se cargan las imágenes con "useFetchGifs()"', () => {
        const gifs = [
            {
                id: 'ABC', 
                title: 'Saitama',
                url: 'https://localhost/saitama.jpg'
            },
            {
                id: '123', 
                title: 'Goku',
                url: 'https://localhost/goku.jpg'
            }
        ];

        // Establece el objeto con los valores que se deben recibir desde el 'mock' "useFetchGifs()"
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: true
        });

        // Hacer un 'mock' del customHook 'useFetchGifs' para no evaluar el propio customHook
        render(<GifGrid category={category}/>);

        // Hacer las aserciones
        expect(screen.getAllByRole('img').length).toBe(2)

        //screen.debug();
    });
})