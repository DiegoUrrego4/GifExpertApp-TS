describe("The Home Page", () => {
	it("successfully loads", () => {
		cy.visit("/");
		cy.findByRole("heading", {
			name: /Gif Expert App/i,
		}).should("exist");
	});
});
