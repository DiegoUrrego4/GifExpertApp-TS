import { getGifs } from "../../src/helpers/getGifs";

describe("Pruebas en getGifs", () => {
	test("should return a gifs array", async () => {
		const gifs = await getGifs("One Punch");
		expect(gifs.length).toBe(10);
		expect(gifs[0]).toEqual({
			id: expect.any(String) as string,
			title: expect.any(String) as string,
			url: expect.any(String) as string,
		});
	});
});
