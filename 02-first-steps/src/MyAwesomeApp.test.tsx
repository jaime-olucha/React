import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";

import { MyAwesomeApp } from "./MyAwesomeApp";

describe("MyAwesomeApp", () => {
    test("shold render firstName and lastname", () => {
        /*Primera Forma*/ const { container } = render(<MyAwesomeApp />);

        const h1 = container.querySelector("h1");
        expect(h1?.innerHTML).toContain("Jaime");

        const h3 = container.querySelector("h3");
        expect(h3?.innerHTML).toContain("Olucha");
    });
    test("shold render firstName and lastname - screen", () => {
        render(<MyAwesomeApp />);
        /* Segunda Forma */ screen.debug();

        // const h1 = screen.getByRole("heading", {
        //     level: 1,
        // });

        const h1 = screen.getByTestId("first-name-title");
        console.log(h1.innerHTML);
    });

    // SNAPSHOT FOTOGRAFIA DE LA ESTRUCTURA DE ESE MOMENTO
    test("should match snapshot", () => {
        const { container } = render(<MyAwesomeApp />);

        expect(container).toMatchSnapshot();
    });

    // SI ES UN RENDER NORMAL USAR EL CONTAINER PERO ACOSTUMBRARSE AL SCREEN
});
