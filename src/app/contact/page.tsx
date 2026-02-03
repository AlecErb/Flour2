export default function Contact() {
	return (
		<div className="mx-auto max-w-3xl px-6 py-16">
			<h1 className="font-serif text-4xl font-semibold text-stone-800">
				Get in Touch
			</h1>
			<p className="mt-4 text-lg text-stone-600">
				Questions about seeds, planting, or bulk orders? We&apos;d love to hear from you.
			</p>

			<form className="mt-10 space-y-6">
				<div>
					<label htmlFor="name" className="block font-medium text-stone-800">
						Name
					</label>
					<input
						type="text"
						id="name"
						name="name"
						className="mt-2 w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-stone-800 placeholder-stone-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
						placeholder="Your name"
					/>
				</div>

				<div>
					<label htmlFor="email" className="block font-medium text-stone-800">
						Email
					</label>
					<input
						type="email"
						id="email"
						name="email"
						className="mt-2 w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-stone-800 placeholder-stone-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
						placeholder="you@example.com"
					/>
				</div>

				<div>
					<label htmlFor="subject" className="block font-medium text-stone-800">
						Subject
					</label>
					<select
						id="subject"
						name="subject"
						className="mt-2 w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-stone-800 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
					>
						<option value="">Select a topic</option>
						<option value="order">Order question</option>
						<option value="bulk">Bulk order inquiry</option>
						<option value="planting">Planting advice</option>
						<option value="wholesale">Wholesale inquiry</option>
						<option value="other">Something else</option>
					</select>
				</div>

				<div>
					<label htmlFor="message" className="block font-medium text-stone-800">
						Message
					</label>
					<textarea
						id="message"
						name="message"
						rows={5}
						className="mt-2 w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-stone-800 placeholder-stone-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
						placeholder="Tell us what's on your mind..."
					/>
				</div>

				<button
					type="submit"
					className="w-full rounded-full bg-amber-700 px-8 py-4 text-lg font-medium text-white transition-colors hover:bg-amber-800 sm:w-auto"
				>
					Send Message
				</button>
			</form>

			<div className="mt-16 rounded-2xl bg-stone-100 p-8">
				<h2 className="font-serif text-xl font-semibold text-stone-800">
					Other Ways to Reach Us
				</h2>
				<dl className="mt-6 space-y-4 text-stone-600">
					<div>
						<dt className="font-medium text-stone-800">Email</dt>
						<dd className="mt-1">hello@flour.seeds</dd>
					</div>
					<div>
						<dt className="font-medium text-stone-800">Response Time</dt>
						<dd className="mt-1">We typically respond within 1-2 business days</dd>
					</div>
				</dl>
			</div>
		</div>
	);
}
