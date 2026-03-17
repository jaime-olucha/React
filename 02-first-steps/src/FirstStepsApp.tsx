import { ItemCounter } from "./shopping-cart/ItemCounter";

interface ItemInCard {
    productName: string;
    quantity: number;
}

const itemsInCart: ItemInCard[] = [
    { productName: "Nintendo Switch 2", quantity: 1 },
    { productName: "Pro Controller", quantity: 2 },
    { productName: "Super Smash", quantity: 5 },
];

export function FirstStepsApp() {
    return (
        <>
            <h1>Carrito de compra</h1>
            {itemsInCart.map(({ productName, quantity }) => (
                <ItemCounter
                    key={productName}
                    name={productName}
                    quantity={quantity}
                />
            ))}

            {/* <ItemCounter name="Nintendo Switch 2" quantity={1} />
            <ItemCounter name="Pro Controller" quantity={2} />
            <ItemCounter name="Super Smash" quantity={3} /> */}
        </>
    );
}
