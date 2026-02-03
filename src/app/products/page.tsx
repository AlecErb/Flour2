import Image from "next/image";
import Link from "next/link";
import { products, getProductsByCategory } from "@/data/products";

export default function Products() {
	const canisters = getProductsByCategory("canister");
	const bulk = getProductsByCategory("bulk");
	const emptyCanisters = getProductsByCategory("empty-canister");

	return (
		<div className="mx-auto max-w-6xl px-6 py-16">
			<h1 className="font-serif text-4xl font-semibold text-stone-800">
				Our Seeds
			</h1>
			<p className="mt-4 text-lg text-stone-600">
				Grab a canister for your pocket or go big with bulk.
			</p>

			{/* Sprinkling Canisters Section */}
			<section className="mt-14 rounded-2xl bg-amber-50 p-8">
				<div className="mb-6 flex items-center gap-3">
					<span className="text-3xl">🌸</span>
					<div>
						<h2 className="font-serif text-2xl font-semibold text-stone-800">
							Sprinkling Canisters
						</h2>
						<p className="text-stone-600">
							Pocket-sized. Pre-filled. Perfect for targeted rewilding.
						</p>
					</div>
				</div>
				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{canisters.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
				</div>
			</section>

			{/* Empty Canisters Section */}
			<section className="mt-12 rounded-2xl bg-stone-100 p-8">
				<div className="mb-6 flex items-center gap-3">
					<span className="text-3xl">📦</span>
					<div>
						<h2 className="font-serif text-2xl font-semibold text-stone-800">
							Empty Canisters
						</h2>
						<p className="text-stone-600">
							Bring your own seeds. Refillable and reusable.
						</p>
					</div>
				</div>
				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{emptyCanisters.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
				</div>
			</section>

			{/* Bulk Seeds Section */}
			<section className="mt-12 rounded-2xl bg-green-50 p-8">
				<div className="mb-6 flex items-center gap-3">
					<span className="text-3xl">🌾</span>
					<div>
						<h2 className="font-serif text-2xl font-semibold text-stone-800">
							Bulk Seeds
						</h2>
						<p className="text-stone-600">
							For when you mean business. Cover serious ground.
						</p>
					</div>
				</div>
				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{bulk.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
				</div>
			</section>
		</div>
	);
}

function ProductCard({ product }: { product: (typeof products)[0] }) {
	return (
		<Link
			href={`/products/${product.id}`}
			className="group rounded-xl border border-stone-200 bg-white p-5 transition-all hover:border-amber-300 hover:shadow-md"
		>
			<div className="aspect-square overflow-hidden rounded-lg bg-stone-100">
				<Image
					src="/images/products/placeholder.svg"
					alt={product.name}
					width={400}
					height={400}
					className="h-full w-full object-cover transition-transform group-hover:scale-105"
				/>
			</div>
			<h3 className="mt-5 font-serif text-lg font-semibold text-stone-800">
				{product.name}
			</h3>
			<p className="mt-2 line-clamp-2 text-stone-600">
				{product.description}
			</p>
			<p className="mt-3 text-lg font-semibold text-amber-700">
				${product.price.toFixed(2)}
			</p>
		</Link>
	);
}
