import { useState } from "react";
import { GifList } from "./gifs/components/GifList";
import { PreviusSearches } from "./gifs/components/PreviusSearches";
import CustomHeader from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";
import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query.action";
import type { Gif } from "./gifs/interfaces/gif.interface";

export const GifsApp = () => {
    const [gifs, setgifs] = useState<Gif[]>([]);
    const [previusTerms, setpreviusTerms] = useState<string[]>([]);

    const handleTermClick = async (query: string) => {
        const gifs = await getGifsByQuery(query);
        setgifs(gifs);
    };

    const handleSearch = async (query: string) => {
        if (!query) return;
        query = query.trim().toLowerCase();

        if (previusTerms.includes(query)) return;

        setpreviusTerms([query, ...previusTerms].slice(0, 8));

        const gifs = await getGifsByQuery(query);

        setgifs(gifs);
    };

    return (
        <>
            {/* Header */}
            <CustomHeader
                title="Buscardor de Gifs"
                description="Descubre y comparte el gif perfecto"
            />

            {/*Search*/}
            <SearchBar placeholder="Buscar gifs" onQuery={handleSearch} />

            {/*Búsquedas previas*/}
            <PreviusSearches
                searches={previusTerms}
                onLabelClicked={handleTermClick}
            />

            {/* Gifs */}
            <GifList gifs={gifs} />
        </>
    );
};
