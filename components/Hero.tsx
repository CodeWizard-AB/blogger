export default function Hero() {
	return (
		<div>
			<div className="text-center my-8">
				<h1 className="text-3xl sm:text-5xl font-medium">Latest Blogs</h1>
				<p className="mt-10 max-w-3xl mx-auto text-xs sm:text-base">
					Know our latest blogs and articles on how to manage your lifestyle and
					enjoy your life.
				</p>
			</div>

			<form className="flex justify-between max-w-screen-sm scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-md">
				<input
					type="email"
					placeholder="Enter your email"
					className="pl-4 outline-none"
				/>
				<button
					className="border-l border-black  py-4 px-4 sm:px-8 active:bg-gray-950 active:text-white"
					type="submit"
				>
					Subscribe
				</button>
			</form>
		</div>
	);
}
