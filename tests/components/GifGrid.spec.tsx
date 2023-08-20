import { render, screen } from "@testing-library/react";

import { GifGrid } from "../../src/components";
import { HookResponse, useFetchGifs } from "../../src/hooks";

jest.mock("../../src/hooks");

describe("Pruebas en <GifGrid />", () => {
	const category = "One Punch";
	test("should show loading initially", () => {
		(useFetchGifs as jest.MockedFunction<typeof useFetchGifs>).mockReturnValue({
			images: [],
			isLoading: true,
		} as HookResponse);
		render(<GifGrid category={category} />);
		expect(screen.getByText("Cargando...")).toBeTruthy();
		expect(screen.getByText(category)).toBeTruthy();
	});

	test("should shows items when it loaded", () => {
		const gifs = [
			{
				id: "ABC",
				title: "Saitama",
				url: "https://image-1.gif",
			},
			{
				id: "123",
				title: "Goku",
				url: "https://image-2.gif",
			},
		];
		(useFetchGifs as jest.MockedFunction<typeof useFetchGifs>).mockReturnValue({
			images: gifs,
			isLoading: false,
		} as HookResponse);
		render(<GifGrid category={category} />);
		expect(screen.getAllByRole("img")).toHaveLength(gifs.length);
	});
});
