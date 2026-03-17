import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { ItemCounter } from "./ItemCounter";

describe("ItemCounter", () => {
    test("should render with default values", () => {
        const name = "Test Item";
        const quantity = 10;

        render(<ItemCounter name={name} quantity={quantity} />);

        expect(screen.getByText(name)).toBeDefined();
        expect(screen.getByText(quantity)).toBeDefined();
        screen.debug;
    });
});
