import Link from "next/link";

export default function Header() {
	return (
		<header className="border-b border-stone-200 bg-[#faf8f5]">
			<nav className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-5 sm:flex-row sm:justify-between">
				<Link href="/" className="font-serif text-2xl font-semibold text-amber-700">
					Flour
				</Link>
				<ul className="flex flex-wrap justify-center gap-4 text-base sm:gap-8 sm:text-lg">
					<li>
						<Link
							href="/"
							className="text-stone-600 transition-colors hover:text-amber-700"
						>
							Home
						</Link>
					</li>
					<li>
						<Link
							href="/products"
							className="text-stone-600 transition-colors hover:text-amber-700"
						>
							Products
						</Link>
					</li>
					<li>
						<Link
							href="/about"
							className="text-stone-600 transition-colors hover:text-amber-700"
						>
							About
						</Link>
					</li>
					<li>
						<Link
							href="/contact"
							className="text-stone-600 transition-colors hover:text-amber-700"
						>
							Contact
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
