import { render, screen } from "@testing-library/react";

import { GifItem } from "../../src/components";

describe("Pruebas en <GifItem />", () => {
	const mockTitle = "Mock Title";
	const mockUrl = "https://my-image.gif/";

	test("should match with snapshot", () => {
		const { container } = render(<GifItem title={mockTitle} url={mockUrl} />);
		expect(container).toMatchSnapshot();
	});

	test("should show image with URL and ALT indicated", () => {
		render(<GifItem title={mockTitle} url={mockUrl} />);
		// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
		const { src, alt } = screen.getByRole("img") as HTMLImageElement;
		expect(src).toBe(mockUrl);
		expect(alt).toBe(mockTitle);
	});

	test("should shows title in component", () => {
		render(<GifItem title={mockTitle} url={mockUrl} />);
		expect(screen.getByText(mockTitle)).toBeTruthy();
	});
});
