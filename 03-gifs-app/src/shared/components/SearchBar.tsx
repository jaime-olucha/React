import { useEffect, useState, type KeyboardEvent } from "react";

interface Props {
    placeholder: string;
    onQuery: (query: string) => void;
}

export const SearchBar = ({ placeholder = "Buscar", onQuery }: Props) => {
    const [query, setQuery] = useState("");

    // Se ejecuta cuando se renderiza el componente en pantalla;
    // UNICAMENTE DEBE HACER UNA TAREA EN ESPECIFICO;
    useEffect(() => {
        // Aparece el efecto cuando dejas de escribir.
        const timeoutId = setTimeout(() => {
            onQuery(query);
        }, 700);

        // Funcion de retorno.
        return () => {
            clearTimeout(timeoutId);
        };
    }, [query, onQuery]);

    const handleSearch = () => {
        onQuery(query);

        // Para borrarlo al enviar el evento
        setQuery("");
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            handleSearch();
        }
    };

    return (
        <div className="search-container">
            <input
                type="text"
                placeholder={placeholder}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                onKeyDown={handleKeyDown}
            />
            <button onClick={handleSearch}>Buscar</button>;
        </div>
    );
};
