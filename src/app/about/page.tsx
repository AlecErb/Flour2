export default function About() {
	return (
		<div className="mx-auto max-w-3xl px-6 py-16">
			<h1 className="font-serif text-4xl font-semibold text-stone-800">
				About Flour
			</h1>

			<div className="mt-10 space-y-6 text-lg leading-relaxed text-stone-600">
				<p>
					We believe wildflowers belong everywhere—not just in
					carefully manicured gardens, but in the cracks of
					sidewalks, the edges of parking lots, and every forgotten
					corner that could use a little life.
				</p>

				<p>
					Flour started with a simple idea: make it ridiculously easy
					to spread wildflower seeds. Our sprinkling canisters fit in
					your pocket, your bag, or your bike basket. Take them on
					walks. Leave flowers in your wake.
				</p>

				<p>
					Whether you&apos;re transforming your backyard into a
					pollinator paradise or just want to brighten up that sad
					patch of dirt by the bus stop, we&apos;ve got seeds for
					you.
				</p>
			</div>

			<div className="mt-16 rounded-2xl bg-stone-100 p-8">
				<h2 className="font-serif text-2xl font-semibold text-stone-800">
					Why Wildflowers?
				</h2>
				<ul className="mt-6 space-y-4 text-stone-600">
					<li className="flex gap-3">
						<span className="text-xl">🐝</span>
						<span>
							<strong className="text-stone-800">Pollinators need them.</strong>{" "}
							Bees, butterflies, and hummingbirds depend on native flowers.
						</span>
					</li>
					<li className="flex gap-3">
						<span className="text-xl">💧</span>
						<span>
							<strong className="text-stone-800">Less water, less work.</strong>{" "}
							Native wildflowers thrive without constant watering or fertilizing.
						</span>
					</li>
					<li className="flex gap-3">
						<span className="text-xl">🌍</span>
						<span>
							<strong className="text-stone-800">Fight the monoculture.</strong>{" "}
							Every patch of wildflowers is a tiny act of ecological resistance.
						</span>
					</li>
				</ul>
			</div>
		</div>
	);
}
