import type { Metadata } from "next";
import { Source_Sans_3, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const sourceSans = Source_Sans_3({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const sourceSerif = Source_Serif_4({
	variable: "--font-serif",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Flour - Wildflower Seeds",
	description: "Premium wildflower seeds in convenient sprinkling canisters and bulk quantities",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${sourceSans.variable} ${sourceSerif.variable} antialiased flex min-h-screen flex-col`}
			>
				<Header />
				<main className="flex-1">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
