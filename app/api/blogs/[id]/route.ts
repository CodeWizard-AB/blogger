import { databases } from "@/lib/appwrite";
import { revalidatePath } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import toast from "react-hot-toast";

export async function GET(
	request: NextRequest,
	{ params }: { params: Promise<{ id: string }> }
) {
	const { id } = await params;
	try {
		const data = await databases.getDocument(
			process.env.APPWRITE_BLOG_DATABASE_ID!,
			process.env.APPWRITE_BLOGS_COLLECTION_ID!,
			id
		);
		return NextResponse.json({ status: "success", data });
	} catch (error) {
		if (error instanceof Error) {
			return NextResponse.json({ message: error.message });
		}
	}
}

export async function DELETE(
	request: NextRequest,
	{ params }: { params: Promise<{ id: string }> }
) {
	const { id } = await params;
	try {
		const data = await databases.deleteDocument(
			process.env.APPWRITE_BLOG_DATABASE_ID!,
			process.env.APPWRITE_BLOGS_COLLECTION_ID!,
			id
		);
		revalidatePath("/admin/blog-list");
		toast.success("Blog deleted successfully");
		return NextResponse.json({ status: "success", data });
	} catch (error) {
		if (error instanceof Error) {
			return NextResponse.json({ message: error.message });
		}
	}
}
