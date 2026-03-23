import { useState } from "react";
import { getGifsByQuery } from "../actions/get-gifs-by-query.action";
import type { Gif } from "../interfaces/gif.interface";

export const useGifs = () => {
    const [gifs, setgifs] = useState<Gif[]>([]);
    const [previusTerms, setpreviusTerms] = useState<string[]>([]);

    const gifsCache: Record<string, Gif[]> = {};

    const handleTermClick = async (term: string) => {
        if (gifsCache[term]) {
            return;
        }

        const gifs = await getGifsByQuery(term);
        setgifs(gifs);
    };

    const handleSearch = async (query: string) => {
        query = query.trim().toLowerCase();
        if (!query) return;

        if (previusTerms.includes(query)) return;

        setpreviusTerms([query, ...previusTerms].slice(0, 8));

        const gifs = await getGifsByQuery(query);

        setgifs(gifs);

        gifsCache[query] = gifs;
    };

    return {
        // Props
        gifs,
        previusTerms,

        // Methods
        handleTermClick,
        handleSearch,
    };
};
