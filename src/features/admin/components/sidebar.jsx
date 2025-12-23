import NavItem from "./side-bar-nav-item";
import SignoutButton from "../../../shared/components/ui/signout-button";
import { auth } from "../../../../lib/auth";
import { headers } from "next/headers";

export default async function Sidebar() {
  const session = await auth.api.getSession({ headers: await headers() });
  const name = session?.user?.name || "";
  return (
    <aside className=" hidden lg:flex w-64 flex-col border-l border-[#29382e] bg-[#111813] dark:bg-background-dark h-full  md:flex shrink-0">
      <div className="flex h-full flex-col justify-between p-4">
        <div className="flex flex-col gap-6">
          {/* Brand / User Info */}
          <div className="flex gap-3 items-center px-2">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12 border-2 border-[#29382e]"
              style={{
                backgroundImage:
                  'url("https://static.vecteezy.com/system/resources/previews/025/869/609/large_2x/profile-image-of-man-avatar-for-social-networks-with-half-circle-fashion-bright-illustration-in-trendy-style-free-vector.jpg")',
              }}
            ></div>
            <div className="flex flex-col">
              <h1 className="text-white text-base font-bold leading-normal">
                {name}
              </h1>
              <p className="text-[#9db8a6] text-xs font-normal leading-normal">
                مدیر ارشد فروشگاه
              </p>
            </div>
          </div>
          {/* Navigation Links */}
          <nav className="flex flex-col gap-2">
            <NavItem
              name={"admin"}
              href="/admin"
              label="داشبورد"
              active={true}
            />
            <NavItem name={"payment"} href="/admin/payment" label="سفارش‌ها" />
            <NavItem name={"product"} href="/admin/product" label="محصولات" />
            <NavItem
              name={"category"}
              href="/admin/category"
              label="دسته بندی"
            />
            <NavItem name={"user"} href="/admin/user" label="کاربران" />
            <NavItem name={"alert"} href="/admin/alert" label="هشدار ها" />
          </nav>
        </div>
        {/* Bottom Settings */}
        <div className="flex flex-col gap-2">
          {/* <NavItem href="#" icon="settings" label="تنظیمات" /> */}
          <SignoutButton />
        </div>
      </div>
    </aside>
  );
}
