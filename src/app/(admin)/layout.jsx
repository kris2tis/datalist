import Sidebar from "../../features/admin/components/sidebar";
import Header from "../../features/admin/components/admin-header";
import { headers } from "next/headers";
import { auth } from "../../../lib/auth";
import { redirect } from "next/navigation";
export default async function AdminLayout({ children }) {
  const { session, user } =
    (await auth.api.getSession({
      headers: await headers(),
    })) || {};
  if (!session?.id || user?.role !== "ADMIN") redirect("/");
  return (
    <div className="flex h-screen w-full bg-main antialiased overflow-hidden text-light!">
      <Sidebar />

      <main className="flex flex-1 flex-col h-full overflow-hidden">
        <Header />

        <div className="flex-1 overflow-y-auto p-6 md:p-8 scroll-smooth">
          {children}
        </div>
      </main>
    </div>
  );
}
