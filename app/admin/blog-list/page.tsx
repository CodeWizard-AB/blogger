import { MdDeleteOutline } from "react-icons/md";

export default async function BlogList() {
	const blogs = (
		await fetch("http://localhost:3001/api/blogs", {
			next: { tags: ["blogs"], revalidate: 3600 },
		}).then((res) => res.json())
	)?.documents;

	const deleteBlog = async (id: string) => {
		"use server";
		await fetch(`http://localhost:3001/api/blogs/${id}`, {
			method: "DELETE",
		});
	};

	return (
		<div className="p-6 px-12">
			<h1>All blogs</h1>
			<div className="max-w-screen-md h-[78vh] overflow-x-auto mt-4 border border-black">
				<table className="w-full text-sm text-gray-600">
					<thead className=" text-gray-700 text-left uppercase bg-gray-50 *:*:py-3 *:*:px-6">
						<tr className="text-xs">
							<th>Author name</th>
							<th>Blog title</th>
							<th>Date</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{blogs?.map((blog: Blog) => (
							<tr key={blog.$id} className="*:px-6 *:py-5 border-b">
								<td>{blog.author}</td>
								<td>{blog.title}</td>
								<td>
									{new Date(blog.$createdAt).toLocaleDateString("en-US", {
										day: "numeric",
										month: "long",
										year: "numeric",
									})}
								</td>
								<td>
									<form action={deleteBlog.bind(null, blog.$id)}>
										<button>
											<MdDeleteOutline />
										</button>
									</form>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
