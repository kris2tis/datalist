// components/Dashboard/RecentOrdersTable.jsx

import Link from "next/link";

// زیر کامپوننت برای نمایش وضعیت سفارش
const StatusBadge = ({ status }) => {
  let classes = "";
  let dotClass = "";

  if (status === "تکمیل شده") {
    classes = "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
    dotClass = "bg-emerald-500";
  } else if (status === "در انتظار") {
    classes = "bg-amber-500/10 text-amber-400 border-amber-500/20";
    dotClass = "bg-amber-500";
  } else if (status === "لغو شده") {
    classes = "bg-red-500/10 text-red-400 border-red-500/20";
    dotClass = "bg-red-500";
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${classes}`}
    >
      <span className={`size-1.5 rounded-full ${dotClass}`}></span>
      {status}
    </span>
  );
};

// زیر کامپوننت برای هر ردیف جدول
const OrderRow = ({
  orderId,
  customerName,
  product,
  date,
  amount,
  status,
  avatarUrl,
}) => (
  <tr className="hover:bg-[#29382e]/50 transition-colors">
    <td className="px-6 py-4 whitespace-nowrap text-white text-sm font-medium dir-ltr text-right">
      {orderId}
    </td>
    <td className="px-6 py-4 whitespace-nowrap">
      <div className="flex items-center gap-3">
        <div
          className="size-8 rounded-full bg-[#29382e] bg-cover"
          style={{ backgroundImage: `url("${avatarUrl}")` }}
        ></div>
        <span className="text-white text-sm">{customerName}</span>
      </div>
    </td>
    <td className="px-6 py-4 whitespace-nowrap text-[#9db8a6] text-sm">
      {product}
    </td>
    <td className="px-6 py-4 whitespace-nowrap text-[#9db8a6] text-sm">
      {date}
    </td>
    <td className="px-6 py-4 whitespace-nowrap text-white text-sm font-bold dir-ltr text-right">
      {amount}
    </td>
    {/* <td className="px-6 py-4 whitespace-nowrap">
      <StatusBadge status={status} />
    </td> */}
    <td className="px-6 py-4 whitespace-nowrap text-left">
      <button className="text-[#9db8a6] hover:text-white transition-colors">
        <span className="material-symbols-outlined">more_horiz</span>
      </button>
    </td>
  </tr>
);

export default function RecentOrdersTable() {
  const orders = [
    {
      id: "#ORD-001",
      customer: "علی رضایی",
      product: "آیفون ۱۳ پرو",
      date: "۱۴۰۲/۰۷/۱۰",
      amount: "$999.00",
      status: "تکمیل شده",
      avatarUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDrRz243XITSXDvwLeXMP99DZxQTf7I0XUnRQY6PDl8ovyCDi6BdeRYe0hSNie7WYfSTNvSYDpJ-RrUWESOJXt-QCEOMlVUML0vq0C62ODun-vdj8CSo2qtNMd0atekTIrPYIwPazZDhHRglFzQRKFP81nnvqOQY46Kz7mMAEOcvrM1YjHwHVEqBsvQ-739ADUhPS1N2LAc-87LDegpjz1ob0CW4eObw1FU-IuORrFP3rwIQvTtlDJ4rlXprzCB0PHsgj7OB-tg3rM2",
    },
    {
      id: "#ORD-002",
      customer: "سارا محمدی",
      product: "مک بوک ایر",
      date: "۱۴۰۲/۰۷/۰۹",
      amount: "$1,200.00",
      status: "در انتظار",
      avatarUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAKRoj0MNo8xzNGB0bdLcmbmS9SzpXpq2vnEZ8BRCHR3bOyMrlCVeFyRUzUVng60T3MnHwJNvw7n22ltO8k_MC4UieV3UsJapm73YRKskszlA7q-fPH6ZTFWNU_Hn_YxhaNynf0pxPxAQrc5ngQl3gNAkmSDufJ3uki-t3ETtGzVZNcck3rdvD59x6fBKzUIrRKj4JpOUNwFsKKH3rrkN4XItjgowyO7x6IQH5JurpZwkGFla6PzJTmZSsVO_-EFv0s4Q26l4R-NZ28",
    },
    {
      id: "#ORD-003",
      customer: "رضا کریمی",
      product: "مانیتور دل",
      date: "۱۴۰۲/۰۷/۰۸",
      amount: "$350.00",
      status: "تکمیل شده",
      avatarUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCre7CAEscciV3FW7ubDM3CsYgSb0e7Aw49kKomNjdZAga8Ginqt6JeWBpe0rI5uZLKiPdvKGx22UX6Fmvq1QTYnVcY4qjCmbNfG2x_3iOE2lNWEkyshR8AUd-O8akoDzmkdkOy5FEC4Rjqk_BugObzT4RmBdwlwpSPQpA-ngaCVzV6bpqMBUjSK3kDNHd7uKegMk3O00UaM2_F2y5FpRLe2s5muZTht7kfFGXUPl7wb9y7WWAwZNKiKKGFbuZBVKLXKeFYxGR4Pzzc",
    },
    {
      id: "#ORD-004",
      customer: "مریم حسینی",
      product: "کیبورد مکانیکال",
      date: "۱۴۰۲/۰۷/۰۷",
      amount: "$120.00",
      status: "لغو شده",
      avatarUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC_Zh-lAHfDGe3yr4lBtjRWFd1BkQZ-UYwCcZ-d_kQYuDM7eXYFgVFMvW6vj2jNbih02mMHQrYhAyfzIYtIYuPRdRi_G5el0hfQ8E_UI3g3B6DFyG8F0iUsePOYseQMRypPX1xUf2OssJe9Kp4VqOM7FSV1UdtL8wcKBI0bPKNj__6RvxkrhrWDw_fRc4lTNCQjSBwMrykYqNDULzLZQIvsLTCBStpmVIMV-wlzu6fT9b6hnCINMKjh4MA_PxpaxW06Bwj9KMPdtfYT",
    },
  ];

  return (
    <section className="rounded-2xl bg-surface-dark border border-[#29382e] overflow-hidden">
      <div className="flex items-center justify-between p-6 md:p-8 pb-4">
        <h2 className="text-white text-lg font-bold">سفارش‌های اخیر</h2>
        <Link
          href="#"
          className="text-primary text-sm font-bold hover:underline flex items-center gap-1"
        >
          مشاهده همه
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-right">
          <thead className="bg-[#111813] text-[#9db8a6] text-xs font-semibold uppercase tracking-wider">
            <tr>
              <th className="px-6 py-4 whitespace-nowrap">شماره سفارش</th>
              <th className="px-6 py-4 whitespace-nowrap">مشتری</th>
              <th className="px-6 py-4 whitespace-nowrap">محصول</th>
              <th className="px-6 py-4 whitespace-nowrap">تاریخ</th>
              <th className="px-6 py-4 whitespace-nowrap">مبلغ</th>
              {/* <th className="px-6 py-4 whitespace-nowrap">وضعیت</th> */}
              <th className="px-6 py-4 whitespace-nowrap text-left">عملیات</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#29382e]">
            {orders.map((order) => (
              <OrderRow
                key={order.id}
                orderId={order.id}
                customerName={order.customer}
                product={order.product}
                date={order.date}
                amount={order.amount}
                status={order.status}
                avatarUrl={order.avatarUrl}
              />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
