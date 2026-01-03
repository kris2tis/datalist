import { headers } from "next/headers";
import { http } from "@/httpServices";

import EditUserInfoForm from "@/features/user/components/edit-user-info-form";
import UserPaymentList from "@/features/user/components/user-payment-list";
import UserBookmarkList from "@/features/user/components/user-bookmark-list";
import Img from "@/shared/components/ui/img";
import { FavoritIcon } from "@/shared/assets/icons/icons";
import SignoutButton from "@/shared/components/ui/signout-button";

export const metadata = {
  title: "حساب کاربری",
};

export const dynamic = "force-dynamic";
export default async function Page() {
  const user = await http
    .get("/user", { headers: await headers() })
    .then(({ data }) => data.data);

  const { payment, bookmarks } = user;
  return (
    <div className="grow w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/*  Sidebar Navigation */}
        <ProfileSidebar data={user} />
        {/*  Main Content Container */}
        <div className="flex-1 space-y-8">
          {/*  Edit Profile  */}
          <section
            className="rounded-xl shadow-sm border p-6 sm:p-8"
            id="account-info"
          >
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-border-light">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Img
                  src={"/icons/edit.svg"}
                  alt={"edit icon"}
                  className={"h-8 aspect-square"}
                />
                ویرایش اطلاعات شخصی
              </h3>
            </div>
            <EditUserInfoForm data={user} />
          </section>
          {/*  Recent Orders */}
          <UserPaymentList payments={payment} />
          {/*  Wishlist  */}
          <UserBookmarkList bookmarks={bookmarks} user={user} />
        </div>
      </div>
    </div>
  );
}

const ProfileSidebar = ({data:{name , email , payment}}) => {
  
  return (
    <aside className="w-full lg:w-72 shrink-0 space-y-6 ">
      {/* <!-- User Summary Card --> */}
      <div className="bg-surface-light rounded-xl p-6 shadow-sm border border-border-light flex flex-col items-center text-center">
        <Img src={"/icons/profile.svg"} alt={"profile icon"} className={"size-20  border-2  rounded-full "}/>
        <h3 className="font-bold text-lg text-text-main ">{name}</h3>
        <p className="text-sm text-text-muted mb-4">{email}</p>
        {/* <div className="bg-green-100  text-green-700 px-3 py-1 rounded-full text-xs font-bold">
              کاربر فعال
            </div> */}
      </div>
      {/* <!-- Navigation Menu --> */}
      <nav className="bg-surface-light rounded-xl shadow-sm border border-border-light  overflow-hidden p-2">
        <a
          className="flex items-center gap-3 px-5 py-4    transition-all"
          href="#"
        >
          <Img
            src={"/icons/profile.svg"}
            alt={"profile icon"}
            className={"h-5 aspect-square"}
          />

          <span className="font-bold text-sm">اطلاعات حساب</span>
        </a>
        <a
          className="flex items-center gap-3 px-5 py-4 text-text-main  hover:bg-background-light  border-transparent hover:border-border-light  transition-all"
          href="#payments"
        >
          <Img
            src={"/icons/payment.svg"}
            alt={"payment icon"}
            className={"h-5 aspect-square"}
          />

          <span className="font-medium text-sm">سفارش‌های من</span>
          <span className="mr-auto bg-primary text-white text-[10px] px-2 py-0.5 rounded-full">
            {payment?.length || 0}
          </span>
        </a>
        <a
          className="flex items-center gap-3 px-5 py-4 text-text-main  hover:bg-background-light   border-transparent hover:border-border-light  transition-all"
          href="#bookmarks"
        >
          <FavoritIcon containerClassName="w-5! aspect-square!" />
          <span className="font-medium text-sm">علاقه‌مندی‌ها</span>
        </a>
        <SignoutButton />
      </nav>
    </aside>
  );
};
