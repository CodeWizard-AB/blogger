export function getImageUrl(imageId: string) {
	return `${process.env.APPWRITE_ENDPOINT_API}/storage/buckets/${process.env.APPWRITE_BLOGS_BUCKET_ID}/files/${imageId}/view?project=${process.env.APPWRITE_PROJECT_ID}&project=${process.env.APPWRITE_PROJECT_ID}&mode=admin`;
}
