import React from "react";
import BlogCard from "./BlogCard";

export default function BlogList() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
			<BlogCard />
		</div>
	);
}
