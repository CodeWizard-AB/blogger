import BlogCard from "./BlogCard";

export default async function BlogList({
	searchParams,
}: {
	searchParams: { [key: string]: string };
}) {
	const category = searchParams.category || "All";

	const blogs = (
		await fetch(`http://localhost:3000/api/blogs?category=${category}`, {
			next: { tags: ["blogs"], revalidate: 3600 },
		}).then((res) => res.json())
	).documents;

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
			{blogs.map((blog: Blog) => (
				<BlogCard key={blog.$id} blog={blog} />
			))}
		</div>
	);
}
