import Link from "next/link";
import { http } from "../../../httpServices";
import Image from "next/image";

export const dynamic = "force-dynamic";

export default async function Page() {
  const { statistics, sales } = await http
    .get(`/admin/statistics`)
    .then(({ data }) => data.data);
  const { topSellingProduct, recenetyPayment } = statistics || {};
  const { totalSale, totalSaleLastMonth } = sales || {};
  return (
    <div className="flex-1 overflow-y-auto p-6 md:p-8">
      <div className="flex flex-col gap-8 max-w-[1600px] mx-auto">
        {/* KPI Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="فروش کل"
            value={totalSale.toLocaleString()}
            icon="attach_money"
          />
          <StatCard
            title="فروش این ماه"
            value={totalSaleLastMonth.toLocaleString()}
            icon="shopping_cart"
          />
        </div>

        {/* Charts & Top Products (Simple Placeholder) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 rounded-2xl bg-surface-dark border border-[#29382e] p-6">
            {/* بخش نمودار SVG خود را اینجا قرار دهید */}
            <h3 className="text-white text-lg font-bold mb-4">تحلیل فروش</h3>
            <div className="h-[300px] flex items-center justify-center border border-dashed border-[#29382e] rounded-lg">
              نمودار فروش (SVG)
            </div>
          </div>

          <TopProducts data={topSellingProduct} />
        </div>

        {/* Recent Orders Table */}
        <RecentOrders data={recenetyPayment} />
      </div>
    </div>
  );
}

const StatCard = ({ title, value }) => (
  <div className="cursor-pointer flex flex-col gap-4 rounded-2xl p-6 bg-surface-dark border border-[#29382e] shadow-sm hover:border-primary/20 transition-all group">
    <div className="flex justify-between items-start">
      <div className="  p-2 rounded-lg bg-[#29382e] text-white group-hover:bg-primary/20 group-hover:text-primary transition-colors">
        <div className="relative h-4 aspect-square">
          <Image src={"/icons/dollar.svg"} alt="dollar icon" fill />
        </div>
      </div>
      {/* <span className="flex items-center text-primary bg-primary/10 px-2 py-1 rounded-md text-xs font-bold dir-ltr">
        {change}{" "}
        <span className="material-symbols-outlined text-sm ml-1">
          {isUp ? "trending_up" : "trending_down"}
        </span>
      </span> */}
    </div>
    <div>
      <p className="text-[#9db8a6] text-sm font-medium mb-1">{title}</p>
      <h3 className="text-white text-2xl font-bold tracking-tight dir-ltr text-right">
        {value}
      </h3>
    </div>
  </div>
);

const ProductItem = ({ title, category, price, totalSale, imageUrl }) => {
  return (
    <div className="flex items-center gap-4">
      <div
        className="size-12 rounded-lg bg-[#29382e] bg-cover bg-center border border-[#29382e]"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="flex-1 min-w-0">
        <p className="text-white text-sm font-medium truncate">{title || ""}</p>
        <p className="text-[#9db8a6] text-xs mt-0.5">{category?.title || ""}</p>
      </div>
      <div className="text-left">
        <p className="text-white text-sm font-bold dir-ltr">
          ${price.toLocaleString()}
        </p>
        <p className="text-primary text-xs font-medium text-left">
          {totalSale} فروش
        </p>
      </div>
    </div>
  );
};

const TopProducts = ({ data }) => {
  if (!data?.length) return <span>کالایی خریداری نشده است</span>;

  return (
    <div className="lg:col-span-1 rounded-2xl bg-surface-dark border border-[#29382e] p-6">
      <h3 className="text-white text-lg font-bold mb-6">کالاهای پرفروش</h3>
      <div className="flex flex-col gap-5">
        {data.map((product) => (
          <ProductItem key={product.id} {...product} />
        ))}
      </div>
      <button className="w-full mt-6 py-2 text-sm font-medium text-[#9db8a6] hover:text-white border border-[#29382e] hover:border-[#9db8a6] rounded-lg transition-colors">
        <Link href={"/admin/product"}>مشاهده همه محصولات</Link>
      </button>
    </div>
  );
};

const StatusBadge = ({ status }) => {
  const styles = {
    "تکمیل شده":
      "bg-emerald-500/10 text-emerald-400 border-emerald-500/20 dot-bg-emerald-500",
    "در انتظار":
      "bg-amber-500/10 text-amber-400 border-amber-500/20 dot-bg-amber-500",
    "لغو شده": "bg-red-500/10 text-red-400 border-red-500/20 dot-bg-red-500",
  };

  const dotColors = {
    "تکمیل شده": "bg-emerald-500",
    "در انتظار": "bg-amber-500",
    "لغو شده": "bg-red-500",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${styles[status]}`}
    >
      <span className={`size-1.5 rounded-full ${dotColors[status]}`}></span>
      {status}
    </span>
  );
};

const RecentOrders = ({ data }) => {
  if (!data?.length) return <span>اخیرا کالایی خریداری نشده است</span>;
  console.log(data);
  const price = data?.product?.reduce((a, c) => (a += c.price), 0) || 0;

  return (
    <section className="rounded-2xl bg-surface-dark border border-[#29382e] overflow-hidden">
      <div className="flex items-center justify-between p-6 md:p-8 pb-4">
        <h2 className="text-white text-lg font-bold">سفارش‌های اخیر</h2>

        <button className="text-primary text-sm font-bold hover:underline flex items-center gap-1">
          <Link href={"/admin/payment"}>مشاهده همه</Link>
        </button>
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
              <th className="px-6 py-4 whitespace-nowrap">وضعیت</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#29382e]">
            {data.map((order) => {
              return (
                <tr
                  key={order.id}
                  className="hover:bg-[#29382e]/50 transition-colors"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-white text-sm font-medium dir-ltr text-right">
                    {order.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div
                        className="size-8 rounded-full bg-[#29382e] bg-cover"
                        style={{
                          backgroundImage: `url(http://googleusercontent.com/profile/picture/$})`,
                        }}
                      />
                      <span className="text-white text-sm">
                        {order.user.name}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-[#9db8a6] text-sm">
                    {order.product.map((p, index) => {
                      let lastItem = order.product.length === index + 1;
                      const { title } = p;
                      return (
                        <span key={index}>
                          {title} {!lastItem ? " , " : ""}
                        </span>
                      );
                    })}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-[#9db8a6] text-sm">
                    {order.createdAt}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-white text-sm font-bold dir-ltr text-right">
                    {price.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <StatusBadge status={"تکمیل شده"} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};
