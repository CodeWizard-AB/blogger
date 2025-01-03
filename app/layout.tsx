import type { Metadata } from "next";
import "./globals.css";
import { Outfit } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Client } from "appwrite";

const font = Outfit({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
	title: "Blog App",
	description: "A blog application created with Next.js and Tailwind CSS.",
};

const client = new Client();
client.setProject(process.env.APPWRITE_PROJECT_ID!);

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${font.className}`}
				data-new-gr-c-s-check-loaded="14.1215.0"
				data-gr-ext-installed=""
				cz-shortcut-listen="true"
			>
				<Header />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
