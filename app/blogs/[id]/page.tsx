import Image from "next/image";
import Profile from "@/public/assets/profile_icon.png";
import BlogPic from "@/public/assets/blog_pic_1.png";
import Facebook from "@/public/assets/facebook_icon.png";
import Twitter from "@/public/assets/twitter_icon.png";
import Google from "@/public/assets/googleplus_icon.png";

export default async function Blog({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;

	return (
		<div>
			<div className="bg-gray-200 py-44 px-5 md:px-12 lg:px-28">
				<div className="text-center flex flex-col items-center gap-8">
					<h1 className="text-2xl sm:text-5xl font-semibold max-w-screen-sm mx-auto">
						A detail step by step guide to manage your lifestyle
					</h1>
					<figure className="flex flex-col gap-3 items-center justify-center">
						<Image src={Profile} alt="profile" className="w-16" />
						<p className="text-lg">Alex Hormoni</p>
					</figure>
				</div>
			</div>

			<div className="mx-5 max-w-screen-md md:mx-auto -mt-32">
				<Image
					src={BlogPic}
					alt="blog image"
					className="border-4 border-white mb-10"
				/>
				<h1>Introduction</h1>
				<p>A short description about the blog</p>

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
