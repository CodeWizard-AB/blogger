import Image from "next/image";
import Facebook from "@/public/assets/facebook_icon.png";
import Twitter from "@/public/assets/twitter_icon.png";
import Google from "@/public/assets/googleplus_icon.png";

export default async function Blog({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;
	const blog: Blog = (
		await fetch(`http://localhost:3001/api/blogs/${id}`, {
			next: { tags: ["blogs"], revalidate: 3600 },
		}).then((res) => res.json())
	).data;

	return (
		<div>
			<div className="bg-gray-200 py-44 px-5 md:px-12 lg:px-28">
				<div className="text-center flex flex-col items-center gap-8">
					<h1 className="text-2xl sm:text-5xl font-semibold max-w-screen-sm mx-auto">
						{blog.title}
					</h1>
					<figure className="flex flex-col gap-3 items-center justify-center relative w-16 h-16">
						<Image
							src={blog.authorImage}
							alt="profile"
							fill
							className="object-cover"
						/>
					</figure>
					<p className="text-lg">Alex Hormoni</p>
				</div>
			</div>

			<div className="mx-5 max-w-screen-md md:mx-auto -mt-32">
				<figure className="relative w-auto h-96 mb-10">
					<Image
						fill
						src={blog.image}
						alt="blog image"
						className="border-4 object-cover border-white"
					/>
				</figure>
				<h1 className="font-semibold">Description:</h1>
				<p className="mt-2">{blog.description}</p>

				<div className="mt-20">
					<p className="text-black font-semibold my-4">
						Share this article on social media
					</p>
					<div className="flex gap-1 items-center">
						<Image src={Facebook} alt="facebook" className="w-12" />
						<Image src={Twitter} alt="twitter" className="w-12" />
						<Image src={Google} alt="google" className="w-12" />
					</div>
				</div>
			</div>
		</div>
	);
}
