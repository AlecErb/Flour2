import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products, getProductById } from "@/data/products";

export function generateStaticParams() {
	return products.map((product) => ({
		id: product.id,
	}));
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

	return (
		<div className="mx-auto max-w-6xl px-6 py-16">
			<Link
				href="/products"
				className="text-sm text-green-700 hover:text-green-800"
			>
				← Back to Products
			</Link>

			<div className="mt-8 grid gap-12 lg:grid-cols-2">
				{/* Product Image */}
				<div className="aspect-square overflow-hidden rounded-lg bg-zinc-100">
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
					<span className="text-sm font-medium uppercase tracking-wide text-green-700">
						{product.category === "canister"
							? "Sprinkling Canister"
							: "Bulk Seeds"}
					</span>
					<h1 className="mt-2 text-3xl font-bold text-zinc-900">
						{product.name}
					</h1>
					<p className="mt-4 text-2xl font-semibold text-zinc-900">
						${product.price.toFixed(2)}
					</p>
					<p className="mt-4 text-lg text-zinc-600">{product.description}</p>

					<button className="mt-8 w-full rounded-lg bg-green-600 px-6 py-3 font-medium text-white hover:bg-green-700 sm:w-auto">
						Add to Cart
					</button>

					{/* Details */}
					<div className="mt-10 border-t border-zinc-200 pt-8">
						<h2 className="font-semibold text-zinc-900">Details</h2>
						<dl className="mt-4 space-y-4 text-sm">
							<div className="flex justify-between">
								<dt className="text-zinc-600">Sunlight</dt>
								<dd className="font-medium text-zinc-900 capitalize">
									{product.sunlight} sun
								</dd>
							</div>
							<div className="flex justify-between">
								<dt className="text-zinc-600">Bloom Season</dt>
								<dd className="font-medium text-zinc-900">
									{product.bloomSeason}
								</dd>
							</div>
						</dl>
					</div>

					{/* Flowers Included */}
					<div className="mt-8 border-t border-zinc-200 pt-8">
						<h2 className="font-semibold text-zinc-900">Flowers Included</h2>
						<ul className="mt-4 flex flex-wrap gap-2">
							{product.flowers.map((flower) => (
								<li
									key={flower}
									className="rounded-full bg-green-50 px-3 py-1 text-sm text-green-800"
								>
									{flower}
								</li>
							))}
						</ul>
					</div>

					{/* Planting Guide */}
					<div className="mt-8 border-t border-zinc-200 pt-8">
						<h2 className="font-semibold text-zinc-900">Planting Guide</h2>
						<p className="mt-4 text-zinc-600">{product.plantingGuide}</p>
					</div>
				</div>
			</div>
		</div>
	);
}
