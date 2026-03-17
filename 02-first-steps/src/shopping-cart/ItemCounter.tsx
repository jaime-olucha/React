import { useState } from "react";

//import "./ItemCounter.css";

import styles from "./ItemCounter.module.css";

interface Props {
    name: string;
    quantity?: number; // ? Propiedad opcional
}

export const ItemCounter = ({ name, quantity = 0 }: Props) => {
    // AQUI SIEMPRE VAN LOS HOOKS
    const [count, setCount] = useState(quantity);

    const handleAdd = () => {
        setCount(count + 1);
    };

    const handleSubstract = () => {
        if (count == 0) return;
        setCount(count - 1);
    };

    return (
        <>
            <section
                className={styles["item-row"]}
                // style={{
                //     display: "flex",
                //     alignItems: "center",
                //     gap: 10,
                //     marginTop: 10,
                // }}
            >
                <span
                    className={styles["item-text"]}
                    style={{
                        color: count == 0 ? "red" : "black",
                    }}
                >
                    {name}
                </span>
                <button onClick={handleAdd}>+1</button>
                <span>{count}</span>
                <button onClick={handleSubstract}>-1</button>
            </section>
        </>
    );
};
