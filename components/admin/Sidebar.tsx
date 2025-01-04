import Logo from "@/public/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import AddIcon from "@/public/assets/add_icon.png";
import EmailIcon from "@/public/assets/email_icon.png";
import BlogIcon from "@/public/assets/blog_icon.png";

export default function Sidebar() {
	return (
		<div className="flex flex-col bg-slate-100">
			<div className="grid place-items-center py-3 border border-black border-t-0">
				<Image src={Logo} alt="Logo" className="w-32" />
			</div>

			<div className="w-28 sm:w-80 border border-black border-t-0 h-full">
				<div className="flex flex-col items-end gap-6 mt-10 *:py-3 *:border *:border-black *:border-r-0 *:sm:w-4/5 *:w-1/2 *:flex *:items-center *:px-4 *:shadow-md *:gap-2">
					<Link href="/admin/add-blog">
						<Image src={AddIcon} alt="add icon" className="w-6" />
						<span>Add blog</span>
					</Link>
					<Link href="/admin/blog-list">
						<Image src={BlogIcon} alt="blog icon" className="w-6" />
						<span>Blog list</span>
					</Link>
					<Link href="/admin/subscriptions">
						<Image src={EmailIcon} alt="email icon" className="w-6" />
						<span>Subscriptions</span>
					</Link>
				</div>
			</div>
		</div>
	);
}
