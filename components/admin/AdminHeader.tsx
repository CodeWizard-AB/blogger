import Image from "next/image";
import Profile from "@/public/assets/profile_icon.png";

export default function AdminHeader() {
	return (
		<div className="border-b px-12 flex justify-between border-black py-3 items-center">
			<h3 className="font-medium">Admin Panel</h3>
			<Image src={Profile} alt="profile" className="w-[37px]" />
		</div>
	);
}
