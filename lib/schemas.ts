import { z } from "zod";

export const blogSchema = z.object({
	title: z.string().min(1, "Title is required"),
	description: z.string().min(1, "Description is required"),
	category: z.string().min(1, "Category is required"),
	author: z.string().min(1, "Author is required"),
	image: z.instanceof(File, { message: "Image is required" }),
	authorImage: z.instanceof(File, { message: "Author image is required" }),
});
