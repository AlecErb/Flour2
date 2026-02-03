export default function Home() {
	return (
		<div className="mx-auto max-w-6xl px-6 py-16">
			{/* Hero Section */}
			<section className="py-16 text-center">
				<h1 className="text-5xl font-bold text-zinc-900">
					Bring Your Garden to Life
				</h1>
				<p className="mx-auto mt-6 max-w-2xl text-xl text-zinc-600">
					Premium wildflower seeds in convenient sprinkling canisters
					or bulk quantities. Create a colorful, pollinator-friendly
					garden with ease.
				</p>
				<div className="mt-10 flex justify-center gap-4">
					<a
						href="/products"
						className="rounded-lg bg-green-600 px-6 py-3 font-medium text-white hover:bg-green-700"
					>
						Shop Seeds
					</a>
					<a
						href="/about"
						className="rounded-lg border border-zinc-300 px-6 py-3 font-medium text-zinc-700 hover:bg-zinc-50"
					>
						Learn More
					</a>
				</div>
			</section>

			{/* Features Section */}
			<section className="grid gap-8 py-16 sm:grid-cols-3">
				<div className="text-center">
					<div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
						<span className="text-2xl">🌸</span>
					</div>
					<h3 className="text-lg font-semibold text-zinc-900">
						Curated Mixes
					</h3>
					<p className="mt-2 text-zinc-600">
						Hand-selected varieties for color, bloom time, and growing conditions
					</p>
				</div>
				<div className="text-center">
					<div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
						<span className="text-2xl">🐝</span>
					</div>
					<h3 className="text-lg font-semibold text-zinc-900">
						Pollinator Friendly
					</h3>
					<p className="mt-2 text-zinc-600">
						Support bees, butterflies, and hummingbirds in your backyard
					</p>
				</div>
				<div className="text-center">
					<div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
						<span className="text-2xl">🌱</span>
					</div>
					<h3 className="text-lg font-semibold text-zinc-900">
						Easy to Plant
					</h3>
					<p className="mt-2 text-zinc-600">
						Sprinkle canisters make sowing seeds simple for any skill level
					</p>
				</div>
			</section>
		</div>
	);
}
