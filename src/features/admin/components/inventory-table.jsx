import React from "react";
import Link from "next/link";

export const InventoryTable = ({ data }) => {
  if (!data?.length) {
    return <span className="text-center mt-5">هشداری در انبار وجود ندارد</span>;
  }

  return (
    <div className="w-full overflow-hidden rounded-xl border border-border-dark bg-surface-dark/10">
      <div className="overflow-x-auto custom-scrollbar">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-surface-dark border-b border-border-dark">
              <th className="p-4 text-xs text-right font-medium text-text-secondary uppercase tracking-wider">
                نام محصول
              </th>
              <th className="p-4 text-xs text-right font-medium text-text-secondary uppercase tracking-wider">
                دسته بندی
              </th>
              <th className="p-4 text-xs text-center font-medium text-text-secondary uppercase tracking-wider">
                وضعیت
              </th>
              <th className="p-4 text-xs text-left font-medium text-text-secondary uppercase tracking-wider">
                عملیات ها
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border-dark">
            {data.map((product) => (
              <tr
                key={product.id}
                className="hover:bg-[#363636] transition-colors group "
              >
                <td className="p-4 flex justify-start">
                  <div className="flex flex-col">
                    <span className="text-white font-medium text-sm">
                      {product.title}
                    </span>
                  </div>
                </td>
                <td className="p-4 text-right">
                  {product?.category?.title ? (
                    <span>{product.category?.title}</span>
                  ) : (
                    <span className="bg-yellow-900/30 text-yellow-500 border-yellow-800/50 p-2 rounded-full text-xs border">
                      انتخاب نشده
                    </span>
                  )}
                  <span></span>
                </td>
                <td className="p-4 ">
                  <StatusBadge status={product.status} />
                </td>
                <td className="p-4 text-end">
                  <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-1.5 rounded-lg text-text-muted hover:text-white hover:bg-[#d7d8d731] transition-colors">
                      <Link href={`/admin/product/edit/${product.id}`}>
                        <span className="material-symbols-outlined text-[12px]">
                          ویرایش
                        </span>
                      </Link>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {/* <div className="flex items-center justify-between p-4 border-t border-border-dark bg-surface-dark/20">
        <span className="text-sm text-text-secondary">
          Showing <span className="text-white font-medium">1-5</span> of{" "}
          <span className="text-white font-medium">64</span>
        </span>
        <div className="flex gap-2">
          <button
            className="flex items-center px-3 py-1.5 rounded border border-border-dark text-text-secondary text-sm disabled:opacity-50 hover:bg-surface-dark hover:text-white transition-colors"
            disabled
          >
            <ChevronLeft size={16} className="mr-1" /> Previous
          </button>
          <button className="flex items-center px-3 py-1.5 rounded border border-border-dark text-text-secondary text-sm hover:bg-surface-dark hover:text-white transition-colors">
            Next <ChevronRight size={16} className="ml-1" />
          </button>
        </div>
      </div> */}
    </div>
  );
};

// کامپوننت کمکی برای نشان (Badge) وضعیت
const StatusBadge = ({ status }) => {
  const styles = {
    "Low Stock": "bg-yellow-900/30 text-yellow-500 border-yellow-800/50",
    "Out of Stock": "bg-red-900/30 text-red-400 border-red-800/50",
    "In Stock": "bg-green-900/30 text-green-400 border-green-800/50",
  };

  const dotColors = {
    "Low Stock": "bg-yellow-500",
    "Out of Stock": "bg-red-500",
    "In Stock": "bg-green-500",
  };

  const statusText = {
    "Low Stock": "موجودی کم",
    "Out of Stock": "موجود نیست",
    "In Stock": "موجود",
  };

  return (
    <div className="w-full flex justify-center">
      <span
        className={`inline-flex items-center  gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${styles[status]}`}
      >
        <span
          className={`w-1.5 h-1.5 rounded-full ${dotColors[status]}`}
        ></span>
        {statusText[status]}
      </span>
    </div>
  );
};

export default InventoryTable;
