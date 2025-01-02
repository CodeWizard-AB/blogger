import Image from "next/image";
import Logo from "../public/assets/logo.png";
import Arrow from "../public/assets/arrow.png";
import Link from "next/link";

export default function Header() {
	return (
		<header className="py-5 px-5 md:px-12 lg:px-28">
			<nav className="flex justify-between items-center">
				<Link href="/">
					<Image src={Logo} alt="Logo" className="w-32 sm:w-auto" />
				</Link>

				<button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-md">
					<span>Get started</span>
					<Image src={Arrow} alt="arrow icon" />
				</button>
			</nav>

			<div className="text-center my-8">
				<h1 className="text-3xl sm:text-5xl font-medium">Latest Blogs</h1>
				<p className="mt-10 max-w-3xl mx-auto text-xs sm:text-base">
					Know our latest blogs and articles on how to manage your lifestyle and
					enjoy your life.
				</p>
			</div>

			<form className="flex justify-between max-w-screen-sm scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-md">
				<input
					type="email"
					placeholder="Enter your email"
					className="pl-4 outline-none"
				/>
				<button
					className="border-l border-black  py-4 px-4 sm:px-8 active:bg-gray-950 active:text-white"
					type="submit"
				>
					Subscribe
				</button>
			</form>
		</header>
	);
}
