"use client";

import Image from "next/image";
import UploadIcon from "@/public/assets/upload_area.png";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { blogSchema } from "@/lib/schemas";
import { z } from "zod";

export default function AddBlogForm() {
	const [preview, setPreview] = useState<string | null>(null);
	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm<z.infer<typeof blogSchema>>({
		resolver: zodResolver(blogSchema),
		defaultValues: {
			title: "",
			description: "",
			category: "",
			author: "Alex Hormoni",
			authorImage:
				"https://cloud.appwrite.io/v1/storage/buckets/6777898700173f197e12/files/6778095c001c77b46a1d/view?project=67777cb70020120cac21&project=67777cb70020120cac21&mode=admin",
		},
	});

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];

		if (file) {
			setValue("image", file);
			setPreview(URL.createObjectURL(file));
		}
	};

	const onSubmit = async (data: z.infer<typeof blogSchema>) => {
		const formData = new FormData();

		formData.append("image", data.image as File);
		formData.append("title", data.title);
		formData.append("description", data.description);
		formData.append("category", data.category);
		formData.append("author", data.author);
		formData.append("authorImage", data.authorImage);

		const response = await fetch("/api/blogs", {
			method: "POST",
			body: formData,
			cache: "force-cache",
			next: { revalidate: 3600 },
		});

		console.log(response);
	};

	return (
		<form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
			<label htmlFor="image">
				<p className="text-lg mb-3">Upload thumbnail</p>
				<Image
					src={preview || UploadIcon}
					alt="uploader"
					className="w-40"
					width={100}
					height={100}
					priority
				/>
				<input
					type="file"
					id="image"
					hidden
					{...register("image")}
					onChange={handleFileChange}
				/>
				{errors.image && preview === null && (
					<p className="text-red-500 text-sm mt-2">{errors.image.message}</p>
				)}
			</label>

			<label htmlFor="title">
				<p>Blog title</p>
				<input
					type="text"
					id="title"
					className="border border-black mt-2 py-2 px-4 w-96"
					{...register("title")}
				/>
				{errors.title && (
					<p className="text-red-500 text-sm mt-2">{errors.title.message}</p>
				)}
			</label>

			<label htmlFor="description">
				<p>Blog description</p>
				<textarea
					id="description"
					className="border border-black mt-2 py-2 px-4 w-96"
					{...register("description")}
				/>
				{errors.description && (
					<p className="text-red-500 text-sm mt-2">
						{errors.description.message}
					</p>
				)}
			</label>

			<label>
				<p>Blog category</p>
				<select
					id="category"
					className="w-96 px-4 py-2 border mt-2 border-black"
					{...register("category")}
				>
					<option value="">Select Category</option>
					<option value="Lifestyle">Lifestyle</option>
					<option value="Startup">Startup</option>
					<option value="Technology">Technology</option>
				</select>
				{errors.category && (
					<p className="text-red-500 text-sm mt-2">{errors.category.message}</p>
				)}
			</label>

			<button type="submit" className="w-max bg-black text-white py-3 px-4">
				Add blog
			</button>
		</form>
	);
}
