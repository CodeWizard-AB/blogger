import AdminHeader from "@/components/admin/AdminHeader";
import Sidebar from "@/components/admin/Sidebar";

export default function AdminLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="flex min-h-screen">
			<Sidebar />
			<div className="flex flex-col w-full h-screen">
				<AdminHeader />
				<div className="overflow-y-auto flex-1">{children}</div>
			</div>
		</div>
	);
}
