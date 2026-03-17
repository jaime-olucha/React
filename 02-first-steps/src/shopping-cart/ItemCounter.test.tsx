import { describe, expect, test } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { ItemCounter } from "./ItemCounter";

describe("ItemCounter", () => {
    test("should render with default values", () => {
        const name = "Test Item";
        const quantity = 10;

        render(<ItemCounter name={name} quantity={quantity} />);

        expect(screen.getByText(name)).toBeDefined();
        expect(screen.getByText(quantity)).toBeDefined();
        // screen.debug;
    });

    test("should increase count when +1 button is pressed", () => {
        render(<ItemCounter name={"Test item"} quantity={1} />);

        const [buttonAdd] = screen.getAllByRole("button");

        // PARA DISPARAR UN EVENTO EJECUTA LA FUNCION;
        fireEvent.click(buttonAdd);

        expect(screen.getByText("2")).toBeDefined();
    });

    test("should decrease count when -1 button is pressed", () => {
        const quantity = 5;

        render(<ItemCounter name={"Test item"} quantity={quantity} />);

        const [, buttonDecrise] = screen.getAllByRole("button");

        // PARA DISPARAR UN EVENTO EJECUTA LA FUNCION;
        fireEvent.click(buttonDecrise);

        expect(screen.getByText("4")).toBeDefined();
    });

    test("should not decrease count when -1 button is pressed and quantity is 0", () => {
        const quantity = 0;

        render(<ItemCounter name={"Test item"} quantity={quantity} />);

        const [, buttonDecrise] = screen.getAllByRole("button");

        // PARA DISPARAR UN EVENTO EJECUTA LA FUNCION;
        fireEvent.click(buttonDecrise);

        expect(screen.getByText("0")).toBeDefined();
    });

    test("should change to red when count is 0", () => {
        const quantity = 0;
        const name = "Test item";
        render(<ItemCounter name={name} quantity={quantity} />);

        const itemText = screen.getByText(name);
        expect(itemText.style.color).toBe("red");
    });

    test("should change to black when count is greater 1", () => {
        const quantity = 1;
        const name = "Test item";
        render(<ItemCounter name={name} quantity={quantity} />);

        const itemText = screen.getByText(name);
        expect(itemText.style.color).toBe("black");
    });
});
