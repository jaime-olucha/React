import { describe, expect, test } from "vitest";
import { giphyApi } from "./giphy.api";

describe('giphy.api', () => {

    test('sould be configured correctly', () => {

        const params = giphyApi.defaults.params;

        expect(giphyApi.defaults.baseURL).toBe('https://api.giphy.com/v1/gifs');
        expect(params).toStrictEqual({
            lang: 'es',
            api_key: import.meta.env.VITE_GIPHY_API_KEY,
        })
    })
})