import BlogTab from "./BlogTab";

const tabs = ["All", "Technology", "Startup", "Lifestyle"];

export default function BlogTabs() {
	return (
		<div className="flex items-center gap-6 my-16 justify-center">
			{tabs.map((tab) => (
				<BlogTab key={tab} tab={tab} />
			))}
		</div>
	);
}
