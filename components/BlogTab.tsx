"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function BlogTab({ tab }: Readonly<{ tab: string }>) {
	const query = useSearchParams();
	const category = query.get("category") || "All";

	return (
		<Link
			href={`?category=${tab}`}
			key={tab}
			className={`font-medium ${
				category === tab ? "bg-gray-950 text-white px-4 py-1" : ""
			}`}
		>
			{tab}
		</Link>
	);
}
