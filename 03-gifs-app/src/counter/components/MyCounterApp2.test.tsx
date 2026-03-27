import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test, vi } from "vitest";
import { MyCounterApp } from "./MyCounterApp";

const handleAddMock = vi.fn();
const handleSubtractMock = vi.fn();
const handleResetMock = vi.fn();

beforeEach(() => {
    vi.clearAllMocks();
});

vi.mock("../hooks/useCounter", () => ({
    useCounter: () => ({
        counter: 40,
        handleAdd: handleAddMock,
        handleSubtract: handleSubtractMock,
        handleReset: handleResetMock,
    }),
}));

describe("MyCounterApp", () => {
    test("should render the component", () => {
        render(<MyCounterApp />);

        screen.debug();

        expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(
            `counter: 40`,
        );

        expect(screen.getByRole("button", { name: "+1" })).toBeDefined();
        expect(screen.getByRole("button", { name: "-1" })).toBeDefined();
        expect(screen.getByRole("button", { name: "Reset" })).toBeDefined();
    });

    test("sould call handleAdd if button is clicked", () => {
        render(<MyCounterApp />);
        const button = screen.getByRole("button", { name: "+1" });

        fireEvent.click(button);

        expect(handleAddMock).toHaveBeenCalled();
        expect(handleResetMock).not.toHaveBeenCalled();
        expect(handleSubtractMock).not.toHaveBeenCalled();
    });

    test("sould call handleSubtract if button is clicked", () => {
        render(<MyCounterApp />);
        const button = screen.getByRole("button", { name: "-1" });

        fireEvent.click(button);

        expect(handleSubtractMock).toHaveBeenCalled();
        expect(handleAddMock).not.toHaveBeenCalled();
        expect(handleResetMock).not.toHaveBeenCalled();
    });

    test("sould call handleReset if button is clicked", () => {
        render(<MyCounterApp />);
        const button = screen.getByRole("button", { name: "Reset" });

        fireEvent.click(button);

        expect(handleSubtractMock).not.toHaveBeenCalled();
        expect(handleAddMock).not.toHaveBeenCalled();
        expect(handleResetMock).toHaveBeenCalled();
    });
});
