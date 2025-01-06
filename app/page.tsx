import BlogList from "@/components/BlogList";
import BlogTabs from "@/components/BlogTabs";
import Hero from "@/components/Hero";

export default function Home({
	searchParams,
}: {
	searchParams: { [key: string]: string };
}) {
	return (
		<div className="mt-32">
			<Hero />
			<div className="px-5 md:px-12 lg:px-28 mt-16">
				<BlogTabs />
				<BlogList searchParams={searchParams} />
			</div>
		</div>
	);
}
