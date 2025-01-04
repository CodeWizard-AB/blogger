"use client";

import Image from "next/image";
import Logo from "../public/assets/logo.png";
import Arrow from "../public/assets/arrow.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
	const pathname = usePathname();

	return pathname.includes("/admin") ? null : (
		<header className="py-5 px-5 md:px-12 lg:px-28 absolute w-full top-0">
			<nav className="flex justify-between items-center">
				<Link href="/">
					<Image src={Logo} alt="Logo" className="w-32 sm:w-auto" />
				</Link>

				<button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-md">
					<span>Get started</span>
					<Image src={Arrow} alt="arrow icon" />
				</button>
			</nav>
		</header>
	);
}
