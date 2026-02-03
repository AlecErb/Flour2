export default function Footer() {
	return (
		<footer className="border-t border-stone-200 bg-stone-100">
			<div className="mx-auto max-w-6xl px-6 py-10">
				<div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
					<p className="font-serif text-lg text-stone-700">
						Flour
					</p>
					<p className="text-stone-500">
						Scatter seeds, grow wildness
					</p>
					<p className="text-sm text-stone-400">
						&copy; {new Date().getFullYear()}
					</p>
				</div>
			</div>
		</footer>
	);
}
