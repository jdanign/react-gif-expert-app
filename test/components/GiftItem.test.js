import { render, screen } from "@testing-library/react";
import { GiftItem } from "../../src/components/GiftItem";

describe('Pruebas en <GiftItem/>', () => {
    const title = 'Hola';
    const url = 'https://www.one-punch.com/saitama.jpg';

    test('Debe hacer match con el snapshot', () => {
        const {container} = render(
            <GiftItem title={title} url={url}/>
        );

        expect(container).toMatchSnapshot();
    });


    test('Debe mostrar la imagen con la URL y el ALT indicados', () => {
        render(<GiftItem title={title} url={url}/>);
        //screen.debug();
        //expect(screen.getByRole('img').src).toBe(url);
        //expect(screen.getByRole('img').alt).toBe(title);
        const {src, alt} = screen.getByRole('img');
        expect(src).toBe(url)
        expect(alt).toBe(title)
    });


    test('Debe mostrar el título en el componente', () => {
        render(<GiftItem title={title} url={url}/>);
        expect(screen.getByText(title)).toBeTruthy();
    })
})