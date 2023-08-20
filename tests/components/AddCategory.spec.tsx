import { fireEvent, render, screen } from "@testing-library/react";

import { AddCategory } from "../../src/components";

describe("Pruebas en <AddCategory />", () => {
	test("should change the input value", () => {
		render(<AddCategory onNewCategory={jest.fn()} />);
		const input = screen.getByRole("textbox");
		fireEvent.input(input, { target: { value: "Saitama" } });
		expect(input).toHaveValue("Saitama");
	});

	test("should call onNewCategory if input have value", () => {
		const inputValue = "Saitama";
		const onNewCategory = jest.fn();
		render(<AddCategory onNewCategory={onNewCategory} />);
		const input = screen.getByRole("textbox");
		const form = screen.getByRole("form");

		fireEvent.input(input, { target: { value: inputValue } });
		fireEvent.submit(form);
		expect(input).toHaveValue("");
		expect(onNewCategory).toHaveBeenCalled();
		expect(onNewCategory).toHaveBeenCalledWith(inputValue);
	});

	test('should not called onNewCategory if inputValue === ""', () => {
		const onNewCategory = jest.fn();
		render(<AddCategory onNewCategory={onNewCategory} />);

		const form = screen.getByRole("form");
		fireEvent.submit(form);

		expect(onNewCategory).not.toHaveBeenCalled();
		expect(onNewCategory).toHaveBeenCalledTimes(0);
	});
});
