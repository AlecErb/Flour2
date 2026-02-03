export interface Product {
	id: string;
	name: string;
	description: string;
	price: number;
	category: "canister" | "bulk" | "empty-canister";
	image: string;
	plantingGuide: string;
	flowers: string[];
	sunlight: "full" | "partial" | "shade" | "n/a";
	bloomSeason: string;
}

export const products: Product[] = [
	// Sprinkling Canisters
	{
		id: "canister-pollinator",
		name: "Pollinator Paradise Canister",
		description:
			"A vibrant mix designed to attract bees, butterflies, and hummingbirds. Perfect for creating a buzzing garden sanctuary.",
		price: 24.99,
		category: "canister",
		image: "/images/products/canister-pollinator.jpg",
		plantingGuide:
			"Sprinkle seeds evenly over prepared soil in spring or fall. Lightly rake to cover seeds. Water gently and keep moist until established.",
		flowers: ["Purple Coneflower", "Black-Eyed Susan", "Bee Balm", "Milkweed"],
		sunlight: "full",
		bloomSeason: "Late Spring to Fall",
	},
	{
		id: "canister-shade",
		name: "Shady Meadow Canister",
		description:
			"Specially selected varieties that thrive in partial to full shade. Bring color to those tricky spots under trees.",
		price: 24.99,
		category: "canister",
		image: "/images/products/canister-shade.jpg",
		plantingGuide:
			"Best planted in early spring. Scatter seeds in shaded areas with moist soil. No need to cover deeply—press gently into soil.",
		flowers: ["Wild Columbine", "Virginia Bluebells", "Foxglove", "Bleeding Heart"],
		sunlight: "shade",
		bloomSeason: "Spring to Early Summer",
	},
	{
		id: "canister-cottage",
		name: "Cottage Garden Canister",
		description:
			"A romantic mix of traditional cottage garden favorites. Creates a charming, informal display of color.",
		price: 24.99,
		category: "canister",
		image: "/images/products/canister-cottage.jpg",
		plantingGuide:
			"Sow in spring after last frost. Scatter freely for a natural look. Water regularly until plants are 2-3 inches tall.",
		flowers: ["Larkspur", "Cosmos", "Zinnia", "Sweet William"],
		sunlight: "full",
		bloomSeason: "Summer to Fall",
	},
	{
		id: "canister-native",
		name: "Native Prairie Canister",
		description:
			"100% native North American wildflowers. Low maintenance once established and perfectly adapted to local conditions.",
		price: 26.99,
		category: "canister",
		image: "/images/products/canister-native.jpg",
		plantingGuide:
			"Plant in fall for best results (seeds need cold stratification). Clear area of weeds, scatter seeds, and let nature do the rest.",
		flowers: ["Prairie Blazing Star", "Wild Bergamot", "Goldenrod", "Aster"],
		sunlight: "full",
		bloomSeason: "Summer to Fall",
	},

	// Bulk Seeds
	{
		id: "bulk-meadow-1lb",
		name: "Wildflower Meadow Mix (1 lb)",
		description:
			"Our signature blend for creating a full wildflower meadow. Covers approximately 1,000 square feet.",
		price: 49.99,
		category: "bulk",
		image: "/images/products/bulk-meadow-1lb.jpg",
		plantingGuide:
			"Prepare soil by removing existing vegetation. Mix seeds with sand for even distribution. Broadcast by hand or with a spreader. Roll or tamp to ensure seed-to-soil contact.",
		flowers: [
			"California Poppy",
			"Cornflower",
			"Red Poppy",
			"Baby's Breath",
			"Coreopsis",
		],
		sunlight: "full",
		bloomSeason: "Spring to Fall",
	},
	{
		id: "bulk-meadow-5lb",
		name: "Wildflower Meadow Mix (5 lb)",
		description:
			"Large quantity for bigger projects. Covers approximately 5,000 square feet. Ideal for fields and large gardens.",
		price: 199.99,
		category: "bulk",
		image: "/images/products/bulk-meadow-5lb.jpg",
		plantingGuide:
			"Prepare soil by removing existing vegetation. Mix seeds with sand for even distribution. Broadcast by hand or with a spreader. Roll or tamp to ensure seed-to-soil contact.",
		flowers: [
			"California Poppy",
			"Cornflower",
			"Red Poppy",
			"Baby's Breath",
			"Coreopsis",
		],
		sunlight: "full",
		bloomSeason: "Spring to Fall",
	},

	// Empty Canisters
	{
		id: "empty-canister-small",
		name: "Empty Canister (4 oz)",
		description:
			"Our pocket-sized sprinkling canister, empty and ready for your own seed mix. Perfect for custom blends or refills.",
		price: 6.99,
		category: "empty-canister",
		image: "/images/products/empty-canister-small.jpg",
		plantingGuide:
			"Fill with your favorite seeds. The shaker top provides even distribution. Refillable and reusable.",
		flowers: [],
		sunlight: "n/a",
		bloomSeason: "N/A",
	},
	{
		id: "empty-canister-large",
		name: "Empty Canister (8 oz)",
		description:
			"Larger capacity for bigger projects. Same great shaker design, twice the seeds. Bring your own blend.",
		price: 9.99,
		category: "empty-canister",
		image: "/images/products/empty-canister-large.jpg",
		plantingGuide:
			"Fill with your favorite seeds. The shaker top provides even distribution. Refillable and reusable.",
		flowers: [],
		sunlight: "n/a",
		bloomSeason: "N/A",
	},
	{
		id: "empty-canister-3pack",
		name: "Empty Canister 3-Pack",
		description:
			"Three 4 oz canisters for the dedicated seed scatterer. Mix and match your own blends. Share with friends.",
		price: 16.99,
		category: "empty-canister",
		image: "/images/products/empty-canister-3pack.jpg",
		plantingGuide:
			"Fill with your favorite seeds. The shaker top provides even distribution. Refillable and reusable.",
		flowers: [],
		sunlight: "n/a",
		bloomSeason: "N/A",
	},
];

export function getProductById(id: string): Product | undefined {
	return products.find((p) => p.id === id);
}

export function getProductsByCategory(category: Product["category"]): Product[] {
	return products.filter((p) => p.category === category);
}
