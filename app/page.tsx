import BlogList from "@/components/BlogList";
import BlogTabs from "@/components/BlogTabs";

export default function Home() {
	return (
		<div className="px-5 md:px-12 lg:px-28 mt-16">
			<BlogTabs />
			<BlogList />
		</div>
	);
}
