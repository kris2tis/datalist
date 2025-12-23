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
    <div className="flex h-screen w-full bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-body antialiased overflow-hidden">
      <Sidebar />

      <main className="flex flex-1 flex-col h-full overflow-hidden">
        <Header />

        <div className="flex-1 overflow-y-auto p-6 md:p-8 scroll-smooth">
          <div className="flex flex-col gap-8 max-w-[1600px] mx-auto">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
