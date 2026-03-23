import { GifList } from "./gifs/components/GifList";
import { PreviusSearches } from "./gifs/components/PreviusSearches";
import CustomHeader from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";
import { useGifs } from "./gifs/hooks/useGifs";

export const GifsApp = () => {
    const { gifs, previusTerms, handleSearch, handleTermClick } = useGifs();

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
