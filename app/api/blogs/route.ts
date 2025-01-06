import { databases, storage } from "@/lib/appwrite";
import { blogSchema } from "@/lib/schemas";
import { getImageUrl } from "@/lib/utils";
import { ID, Query } from "appwrite";
import { type NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export async function GET(request: NextRequest) {
	const searchParams = request.nextUrl.searchParams;
	const category = searchParams.get("category");
	const categoryQuery =
		category && category !== "All"
			? [Query.equal("category", category as string)]
			: [];

	try {
		const response = await databases.listDocuments(
			process.env.APPWRITE_BLOG_DATABASE_ID!,
			process.env.APPWRITE_BLOGS_COLLECTION_ID!,
			categoryQuery
		);
		return NextResponse.json({ status: "success", ...response });
	} catch (error) {
		if (error instanceof Error) {
			return NextResponse.json(
				{
					status: "error",
					message: "An unexpected error occurred",
					error: error.message || "Unknown error",
				},
				{ status: 500 }
			);
		}
	}
}

export async function POST(request: NextRequest) {
	try {
		// * Parse and validate data
		const formData = await request.formData();
		const data = Object.fromEntries(formData.entries());
		console.log(data);
		const validatedData = blogSchema.parse(data);

		// * Upload files
		const image = await storage.createFile(
			process.env.APPWRITE_BLOGS_BUCKET_ID!,
			ID.unique(),
			validatedData.image as File
		);

		// * Save to database
		const response = await databases.createDocument(
			process.env.APPWRITE_BLOG_DATABASE_ID!,
			process.env.APPWRITE_BLOGS_COLLECTION_ID!,
			ID.unique(),
			{
				...data,
				image: getImageUrl(image.$id),
			}
		);

		return NextResponse.json(
			{ status: "success", ...response },
			{ status: 201 }
		);
	} catch (error) {
		if (error instanceof z.ZodError) {
			// * Validation error
			return NextResponse.json(
				{
					status: "error",
					message: "Validation failed",
					errors: error.errors,
				},
				{ status: 400 }
			);
		}

		if (error instanceof Error) {
			return NextResponse.json(
				{
					status: "error",
					message: "An unexpected error occurred",
					error: error.message || "Unknown error",
				},
				{ status: 500 }
			);
		}
	}
}
