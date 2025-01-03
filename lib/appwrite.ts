import { Client, Databases, Storage } from "appwrite";

const client = new Client()
	.setEndpoint(process.env.APPWRITE_ENDPOINT_API!)
	.setProject(process.env.APPWRITE_PROJECT_ID!);

export const databases = new Databases(client);
export const storage = new Storage(client);
