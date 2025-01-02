import Image from "next/image";
import Link from "next/link";
import image from "../public/assets/blog_pic_1.png";
import Arrow from "../public/assets/arrow.png";

export default function BlogCard() {
	return (
		<div className="border-2 border-black shadow-md">
			<Image src={image} alt="" className="border-b-2 border-black" />
			<div className="p-4">
				<p className="bg-black text-white px-2 py-1 w-min text-sm mb-4">
					LifeStyle
				</p>
				<h2 className="font-medium text-lg mb-2">
					God wants the world to see His awesomeness
				</h2>
				<p className="text-sm mb-4">
					That happens when our God-sized prayers reveal how truly amazing God
					is.
				</p>
				<Link href={"/"} className="flex items-center gap-2">
					<span>Read more</span>
					<Image src={Arrow} alt="arrow icon" className="w-3" />
				</Link>
			</div>
		</div>
	);
}
