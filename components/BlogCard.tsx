import Image from "next/image";
import Link from "next/link";
import Arrow from "../public/assets/arrow.png";

export default function BlogCard({ blog }: { blog: Blog }) {
	return (
		<div className="border-2 border-black shadow-md">
			<figure className="relative w-full h-[200px]">
				<Image
					src={blog.image}
					alt={blog.title}
					className="border-b-2 border-black object-cover"
					fill
				/>
			</figure>
			<div className="p-4">
				<p className="bg-black text-white px-2 py-1 w-min text-sm mb-4">
					{blog.category}
				</p>
				<h2 className="font-medium text-lg mb-2">{blog.title}</h2>
				<p className="text-sm mb-4">{blog.description}</p>
				<Link href={"/"} className="flex items-center gap-2">
					<span>Read more</span>
					<Image src={Arrow} alt="arrow icon" className="w-3" />
				</Link>
			</div>
		</div>
	);
}
