import { describe, test, expect, vi, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";

import { FirstStepsApp } from "./FirstStepsApp";

const mockItemCounter = vi.fn((_props: unknown) => {
    return <div data-testid="ItemCounter" />;
});

vi.mock("./shopping-cart/ItemCounter", () => ({
    ItemCounter: (props: unknown) => mockItemCounter(props),
}));

/*
vi.mock("./shopping-cart/ItemCounter", () => ({
    ItemCounter: (props: unknown) => (
        <div// Una fomra de hacerlo
            data-testid="ItemCounter"
            name={props.name}
            quantity={props.quantity}
        />
    ),
}));
*/
describe("FirstStepsApp", () => {
    // Para hacer todas las pruebas independientes
    afterEach(() => {
        vi.clearAllMocks();
    });

    test("should match snapshot", () => {
        const { container } = render(<FirstStepsApp />);

        expect(container).toMatchSnapshot();
    });

    // MOCK DE UN COMPONENTE PARA LLAMAR A UN COMPONENTE CON VARIOS ARGUMENTOS

    test("should render the correct number od ItemCounter components", () => {
        render(<FirstStepsApp />);
        const itemCounters = screen.getAllByTestId("ItemCounter");
        console.log(itemCounters.length);

        expect(itemCounters.length).toBe(3);

        screen.debug();
    });

    test("should render ItemCounter with correct props", () => {
        render(<FirstStepsApp />);

        expect(mockItemCounter).toHaveBeenCalledTimes(3);
        expect(mockItemCounter).toHaveBeenCalledWith({
            name: "Nintendo Switch 2",
            quantity: 1,
        });
        expect(mockItemCounter).toHaveBeenCalledWith({
            name: "Pro Controller",
            quantity: 2,
        });
        expect(mockItemCounter).toHaveBeenCalledWith({
            name: "Super Smash",
            quantity: 5,
        });
    });
});
