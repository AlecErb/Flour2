import Link from "next/link";

export default function Header() {
	return (
		<header className="border-b border-stone-200 bg-[#faf8f5]">
			<nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
				<Link href="/" className="font-serif text-2xl font-semibold text-amber-700">
					Flour
				</Link>
				<ul className="flex gap-8 text-lg">
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
