"use client";

import { useRouter } from "next/navigation";
import { http } from "../../../httpServices";
import { toast } from "sonner";
import Link from "next/link";

const StockBadge = ({ stock }) => {
  let classes = "w-2 h-2 rounded-full";
  let text = stock;

  if (stock > 50) {
    classes += " bg-primary shadow-[0_0_8px_rgba(23,207,84,0.6)]";
  } else if (stock > 0 && stock <= 50) {
    classes += " bg-yellow-500";
  } else {
    classes += " bg-red-500";
    text = "Out of Stock";
  }

  return (
    <div className="flex items-center gap-2">
      <span className={classes}></span>
      <span className="text-sm text-white">{text}</span>
    </div>
  );
};

const StatusBadge = ({ status }) => {
  let classes = "";

  if (status === "Active") {
    classes = "bg-primary/10 text-primary ring-primary/20";
  } else if (status === "Low Stock") {
    classes = "bg-yellow-500/10 text-yellow-500 ring-yellow-500/20";
  } else if (status === "Draft") {
    classes = "bg-input-bg text-text-muted ring-text-muted/20";
  }

  return (
    <span
      className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${classes}`}
    >
      {status}
    </span>
  );
};

function ProductTableRow({
  product,
  isChecked,
  onToggleCheck,
  onEdit,
  onDelete,
}) {
  const {
    title,
    content: description,
    id: sku,
    category,
    quantity: stock,
    price,
    imagePath,
  } = product;
  return (
    <tr className="group hover:bg-[#223328] transition-colors">
      <td className="p-4">
        <div className="flex items-center gap-3">
          <div
            className="h-12 w-12 rounded-lg bg-cover bg-center shrink-0 border border-[#29382e]"
            style={{ backgroundImage: `url('${imagePath}')` }}
          ></div>
          <div className="flex flex-col">
            <span className="font-medium text-white">
              {title.slice(0, 6)} ...
            </span>
          </div>
        </div>
      </td>

      <td className="p-4 text-sm text-white font-mono">{sku}</td>
      <td className="p-4 text-sm text-text-muted">
        {category?.title ? category.title.slice(0, 10) : "انتخاب نشده"}
      </td>
      <td className="p-4">
        <StockBadge stock={stock} />
      </td>
      <td className="p-4 text-sm font-medium text-white">
        {price.toLocaleString()}
      </td>
      <td className="p-4">
        <StatusBadge status={"موفق"} />
      </td>
      <td className="p-4 text-end">
        <div className="flex items-center justify-end gap-2">
          <button
            onClick={() => onDelete(sku)}
            className="p-1.5 rounded-lg text-text-muted hover:text-red-400 hover:bg-[#34463a] transition-colors"
          >
            <span className="material-symbols-outlined text-[12px]">حذف</span>
          </button>
          <button className="p-1.5 rounded-lg text-text-muted hover:text-white hover:bg-[#d7d8d731] transition-colors">
            <Link href={`/admin/product/edit/${sku}`}>
              <span className="material-symbols-outlined text-[12px]">
                ویرایش
              </span>
            </Link>
          </button>
        </div>
      </td>
    </tr>
  );
}

export function ProductTable({ data }) {
  const { refresh } = useRouter();
  // const handleSelectAll = (e) => {};
  // const handleToggleCheck = (id) => {};
  const handleDelete = async (id) => {
    try {
      const { message } = await http
        .post("/admin/product/delete", { productId: id })
        .then(({ data }) => data);

      toast.success(message);
      refresh();
    } catch (error) {
      const errorMessage = error?.response?.data?.message || "خطا";
      toast.error(errorMessage);
      refresh();
    }
  };

  if (!data?.length) {
    return (
      <span className="text-center mt-5">محصولی در فروشگاه وجود ندارد!</span>
    );
  }
  return (
    <div className="rounded-xl border border-[#29382e] bg-surface-dark overflow-hidden flex flex-col shadow-xl">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-input-bg border-b border-[#29382e]">
              <th className="p-4 text-xs text-right font-bold uppercase tracking-wider text-text-muted">
                محصول
              </th>
              <th className="p-4 text-xs font-bold uppercase tracking-wider text-text-muted">
                ایدی
              </th>
              <th className="p-4 text-xs font-bold uppercase tracking-wider text-text-muted">
                دسته بندی
              </th>
              <th className="p-4 text-xs font-bold uppercase tracking-wider text-text-muted">
                موجودی
              </th>
              <th className="p-4 text-xs font-bold uppercase tracking-wider text-text-muted">
                قیمت
              </th>
              <th className="p-4 text-xs font-bold uppercase tracking-wider text-text-muted">
                وضعیت
              </th>
              <th className="p-4 text-xs font-bold uppercase tracking-wider text-text-muted">
                عملیات ها
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#29382e]">
            {data.map((product) => {
              return (
                <ProductTableRow
                  key={product.id}
                  product={product}
                  isChecked={false} // Replace with actual state check
                  onToggleCheck={() => handleToggleCheck(product.id)}
                  onEdit={() => handleEdit(product.id)}
                  onDelete={() => handleDelete(product.id)}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
