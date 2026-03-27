import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import CustomHeader from "./CustomHeader";

describe("CustomHeader", () => {
    test("should render the title correctly", () => {
        // Arrange
        const title = "My title";
        // const description = "";
        // Act
        render(<CustomHeader title={title} />);

        // Assert
        expect(screen.getByText(title)).toBeDefined();
    });

    test("should render the description when provided", () => {
        // Arrange
        const title = "My title";
        const description = "description";
        // Act
        render(<CustomHeader title={title} description={description} />);

        // Assert
        expect(screen.getByText(description)).toBeDefined();
    });

    test("should not render the description when provided", () => {
        // Arrange
        const title = "My title";
        const description = "";
        // Act
        const { container } = render(
            <CustomHeader title={title} description={description} />,
        );
        const divElement = container.querySelector(".content-center");
        const h1 = divElement?.querySelector("h1");
        const p = divElement?.querySelector("p");

        // Assert
        expect(h1?.innerHTML).toBe(title);
        expect(p?.innerHTML).not.toBe(description);
    });
});
