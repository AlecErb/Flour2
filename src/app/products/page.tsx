import Image from "next/image";
import Link from "next/link";
import { products, getProductsByCategory } from "@/data/products";

export default function Products() {
	const canisters = getProductsByCategory("canister");
	const bulk = getProductsByCategory("bulk");

	return (
		<div className="mx-auto max-w-6xl px-6 py-16">
			<h1 className="text-4xl font-bold text-zinc-900">Our Products</h1>
			<p className="mt-4 text-lg text-zinc-600">
				Choose from our convenient sprinkling canisters or bulk seed options.
			</p>

			{/* Canisters Section */}
			<section className="mt-12">
				<h2 className="text-2xl font-semibold text-zinc-800">
					Sprinkling Canisters
				</h2>
				<p className="mt-2 text-zinc-600">
					Easy-to-use canisters for small gardens and targeted planting.
				</p>
				<div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{canisters.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
				</div>
			</section>

			{/* Bulk Section */}
			<section className="mt-16">
				<h2 className="text-2xl font-semibold text-zinc-800">Bulk Seeds</h2>
				<p className="mt-2 text-zinc-600">
					Larger quantities for meadows and big projects.
				</p>
				<div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
			className="group rounded-lg border border-zinc-200 bg-white p-4 transition-shadow hover:shadow-md"
		>
			<div className="aspect-square overflow-hidden rounded-md bg-zinc-100">
				<Image
					src="/images/products/placeholder.svg"
					alt={product.name}
					width={400}
					height={400}
					className="h-full w-full object-cover transition-transform group-hover:scale-105"
				/>
			</div>
			<h3 className="mt-4 font-semibold text-zinc-900">{product.name}</h3>
			<p className="mt-1 line-clamp-2 text-sm text-zinc-600">
				{product.description}
			</p>
			<p className="mt-2 font-medium text-green-700">
				${product.price.toFixed(2)}
			</p>
		</Link>
	);
}
