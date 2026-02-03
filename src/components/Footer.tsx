export default function Footer() {
	return (
		<footer className="border-t border-zinc-200 bg-zinc-50">
			<div className="mx-auto max-w-6xl px-6 py-8">
				<div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
					<p className="text-sm text-zinc-600">
						&copy; {new Date().getFullYear()} Flour. All rights reserved.
					</p>
					<p className="text-sm text-zinc-500">
						Wildflower seeds for every garden
					</p>
				</div>
			</div>
		</footer>
	);
}
