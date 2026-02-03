import Link from "next/link";

export default function Header() {
	return (
		<header className="border-b border-zinc-200 bg-white">
			<nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
				<Link href="/" className="text-xl font-bold text-green-700">
					Flour
				</Link>
				<ul className="flex gap-6">
					<li>
						<Link
							href="/"
							className="text-zinc-600 hover:text-zinc-900"
						>
							Home
						</Link>
					</li>
					<li>
						<Link
							href="/products"
							className="text-zinc-600 hover:text-zinc-900"
						>
							Products
						</Link>
					</li>
					<li>
						<Link
							href="/about"
							className="text-zinc-600 hover:text-zinc-900"
						>
							About
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
