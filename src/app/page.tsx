export default function Home() {
	return (
		<div className="mx-auto max-w-4xl px-6 py-20">
			{/* Hero Section */}
			<section className="py-12 text-center">
				<h1 className="font-serif text-5xl font-semibold leading-tight text-stone-800 sm:text-6xl">
					Rewild Your Corner
					<br />
					<span className="text-amber-700">of the World</span>
				</h1>
				<p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-stone-600">
					Wildflower seeds for sidewalk cracks, forgotten lots,
					backyard meadows, and everywhere in between.
					No lawn required.
				</p>
				<div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
					<a
						href="/products"
						className="rounded-full bg-amber-700 px-8 py-4 text-lg font-medium text-white transition-colors hover:bg-amber-800"
					>
						Browse Seeds
					</a>
					<a
						href="/about"
						className="rounded-full border-2 border-stone-300 px-8 py-4 text-lg font-medium text-stone-700 transition-colors hover:border-stone-400 hover:bg-stone-50"
					>
						Our Story
					</a>
				</div>
			</section>

			{/* Features Section */}
			<section className="mt-20 grid gap-12 sm:grid-cols-3">
				<div className="text-center">
					<div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100">
						<span className="text-3xl">🌸</span>
					</div>
					<h3 className="font-serif text-xl font-semibold text-stone-800">
						Curated Mixes
					</h3>
					<p className="mt-3 text-stone-600">
						Hand-selected for color, hardiness, and the bees
					</p>
				</div>
				<div className="text-center">
					<div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100">
						<span className="text-3xl">🐝</span>
					</div>
					<h3 className="font-serif text-xl font-semibold text-stone-800">
						Feed the Pollinators
					</h3>
					<p className="mt-3 text-stone-600">
						Every canister is a buffet for bees and butterflies
					</p>
				</div>
				<div className="text-center">
					<div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100">
						<span className="text-3xl">✊</span>
					</div>
					<h3 className="font-serif text-xl font-semibold text-stone-800">
						Guerrilla Ready
					</h3>
					<p className="mt-3 text-stone-600">
						Sprinkle canisters fit in your pocket. Just saying.
					</p>
				</div>
			</section>

			{/* Call to action */}
			<section className="mt-24 rounded-2xl bg-stone-100 p-10 text-center">
				<p className="font-serif text-2xl text-stone-700">
					&ldquo;A lawn is a missed opportunity.&rdquo;
				</p>
				<p className="mt-4 text-stone-500">
					— Someone who gets it
				</p>
			</section>
		</div>
	);
}
