import { renderHook, waitFor } from "@testing-library/react";

import { useFetchGifs } from "../../src/hooks";

describe("Pruebas en useFetchGifs", () => {
	test("should return initial state", () => {
		const { result } = renderHook(() => useFetchGifs("One Punch"));
		const { images, isLoading } = result.current;
		expect(images).toHaveLength(0);
		expect(isLoading).toBeTruthy();
	});

	test("should return an array of images and isLoading = false", async () => {
		const { result } = renderHook(() => useFetchGifs("One Punch"));
		await waitFor(() => expect(result.current.images.length).toBeGreaterThan(0));
		const { images, isLoading } = result.current;
		expect(images).toHaveLength(10);
		expect(isLoading).toBeFalsy();
	});
});
