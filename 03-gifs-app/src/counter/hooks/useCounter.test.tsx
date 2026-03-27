import { act, renderHook } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";
import { useCounter } from "./useCounter";

describe("useCounter", () => {
    const defectValue = 10;
    let result: any;

    // Se ejecuta las veces segun las pruebas que tengamos;
    beforeEach(() => {
        const { result: hookValue } = renderHook(() => useCounter());
        result = hookValue;
    });

    test("should initialize whith value 10", () => {
        // const { result } = renderHook(() => useCounter());

        expect(result.current.counter).toBe(defectValue);
    });

    test("should increment counter when handleAdd is called", () => {
        //const { result } = renderHook(() => useCounter());

        act(() => {
            result.current.handleAdd();
        });
        expect(result.current.counter).toBe(defectValue + 1);
    });

    test("should decrement counter when handleSubstract is called", () => {
        //const { result } = renderHook(() => useCounter());

        act(() => {
            result.current.handleSubtract();
        });
        expect(result.current.counter).toBe(defectValue - 1);
    });

    test("should reset counter when handleReset is called", () => {
        // const { result } = renderHook(() => useCounter());

        act(() => {
            result.current.handleReset();
        });
        expect(result.current.counter).toBe(defectValue);
    });
});
