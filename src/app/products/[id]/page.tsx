import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products, getProductById } from "@/data/products";

export function generateStaticParams() {
	return products.map((product) => ({
		id: product.id,
	}));
}

function getCategoryLabel(category: string) {
	switch (category) {
		case "canister":
			return "Sprinkling Canister";
		case "empty-canister":
			return "Empty Canister";
		case "bulk":
			return "Bulk Seeds";
		default:
			return category;
	}
}

export default async function ProductPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;
	const product = getProductById(id);

	if (!product) {
		notFound();
	}

	const isEmptyCanister = product.category === "empty-canister";

	return (
		<div className="mx-auto max-w-6xl px-6 py-16">
			<Link
				href="/products"
				className="text-amber-700 hover:text-amber-800"
			>
				← Back to Seeds
			</Link>

			<div className="mt-10 grid gap-12 lg:grid-cols-2">
				{/* Product Image */}
				<div className="aspect-square overflow-hidden rounded-2xl bg-stone-100">
					<Image
						src="/images/products/placeholder.svg"
						alt={product.name}
						width={600}
						height={600}
						className="h-full w-full object-cover"
						priority
					/>
				</div>

				{/* Product Info */}
				<div>
					<span className="text-sm font-medium uppercase tracking-wider text-amber-700">
						{getCategoryLabel(product.category)}
					</span>
					<h1 className="mt-3 font-serif text-4xl font-semibold text-stone-800">
						{product.name}
					</h1>
					<p className="mt-4 text-3xl font-semibold text-stone-800">
						${product.price.toFixed(2)}
					</p>
					<p className="mt-6 text-lg leading-relaxed text-stone-600">
						{product.description}
					</p>

					<button className="mt-10 w-full rounded-full bg-amber-700 px-8 py-4 text-lg font-medium text-white transition-colors hover:bg-amber-800 sm:w-auto">
						Add to Cart
					</button>

					{/* Details - hide for empty canisters */}
					{!isEmptyCanister && (
						<div className="mt-12 border-t border-stone-200 pt-8">
							<h2 className="font-serif text-xl font-semibold text-stone-800">
								Details
							</h2>
							<dl className="mt-5 space-y-4">
								<div className="flex justify-between">
									<dt className="text-stone-500">Sunlight</dt>
									<dd className="font-medium capitalize text-stone-800">
										{product.sunlight} sun
									</dd>
								</div>
								<div className="flex justify-between">
									<dt className="text-stone-500">Bloom Season</dt>
									<dd className="font-medium text-stone-800">
										{product.bloomSeason}
									</dd>
								</div>
							</dl>
						</div>
					)}

					{/* Flowers Included - hide for empty canisters */}
					{!isEmptyCanister && product.flowers.length > 0 && (
						<div className="mt-10 border-t border-stone-200 pt-8">
							<h2 className="font-serif text-xl font-semibold text-stone-800">
								What&apos;s Inside
							</h2>
							<ul className="mt-5 flex flex-wrap gap-2">
								{product.flowers.map((flower) => (
									<li
										key={flower}
										className="rounded-full bg-amber-50 px-4 py-2 text-amber-800"
									>
										{flower}
									</li>
								))}
							</ul>
						</div>
					)}

					{/* Usage / Planting Guide */}
					<div className="mt-10 border-t border-stone-200 pt-8">
						<h2 className="font-serif text-xl font-semibold text-stone-800">
							{isEmptyCanister ? "How to Use" : "How to Plant"}
						</h2>
						<p className="mt-5 leading-relaxed text-stone-600">
							{product.plantingGuide}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
