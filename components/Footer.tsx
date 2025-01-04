"use client";

import Image from "next/image";
import Logo from "../public/assets/logo_light.png";
import Facebook from "../public/assets/facebook_icon.png";
import Twitter from "../public/assets/twitter_icon.png";
import Google from "../public/assets/googleplus_icon.png";
import { usePathname } from "next/navigation";

export default function Footer() {
	const pathname = usePathname();

	return pathname.includes("/admin") ? null : (
		<footer className="flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row py-5 mt-16 items-center bg-black text-white">
			<Image src={Logo} alt="Logo" className="w-32" />
			<p>All rights reserved © {new Date().getFullYear()}</p>
			<div className="*:w-10 flex items-center gap-2">
				<Image src={Facebook} alt="facebook" />
				<Image src={Twitter} alt="twitter" />
				<Image src={Google} alt="google" />
			</div>
		</footer>
	);
}
