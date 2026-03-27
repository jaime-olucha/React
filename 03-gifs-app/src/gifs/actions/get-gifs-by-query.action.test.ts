import { describe, expect, test } from "vitest";
import { getGifsByQuery } from "./get-gifs-by-query.action";

import AxiosMockAdapter from 'axios-mock-adapter';
import { giphyApi } from "../api/giphy.api";


describe('get-gifs-by-query.action', () => {

    const mock = new AxiosMockAdapter(giphyApi);
    /*
        test('sould return a list of gifs', async () => {
    
            const gifs = await getGifsByQuery('goku');
            const [gif1] = gifs;
    
            expect(gif1).toEqual({
                id: expect.any(String),
                height: expect.any(Number),
                width: expect.any(Number),
                title: expect.any(String),
                url: expect.any(String),
            });
    
    
        })
    */
    test('sould return a list of gifs', async () => {

        mock.onGet('/search').reply(200, [1, 2, 3, 4, 5])
        const gifs = await getGifsByQuery('goku');

        console.log(gifs);

    });
})