import { useCounter } from "../hooks/useCounter";

export const MyCounterApp = () => {
    // NO SE PUEDEN HACER HOOKS CONDICIONALES; no es una buena prácticas;

    // primero se usan los useState y luego el resto.
    const { counter, handleAdd, handleSubtract, handleReset } = useCounter();

    return (
        <>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <h1>counter: {counter}</h1>
                <div style={{ display: "flex", gap: "10px" }}>
                    <button onClick={handleAdd}>+1</button>
                    <button onClick={handleSubtract}>-1</button>
                    <button onClick={handleReset}>Reset</button>
                </div>
            </div>
        </>
    );
};
