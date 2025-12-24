"use client";
import { http } from "../../../../httpServices";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

function CategoryTableRow({ cateogory, onDelete }) {
  const { id, title } = cateogory;

  return (
    <tr className="hover:bg-[#222e25] transition-colors group">
      {/* Id */}
      <td className="p-4">
        <span className="text-white text-sm font-mono tracking-wider">
          #{id}
        </span>
      </td>
      <td className="p-4 flex items-center justify-center">
        <span className="text-white text-sm font-mono tracking-wider">
          {title}
        </span>
      </td>

      <td className="p-4">
        <div className="flex items-center justify-end gap-2">
          <button
            onClick={() => onDelete(id)}
            className="p-1.5 rounded-lg text-text-muted hover:text-red-400 hover:bg-[#34463a] transition-colors"
          >
            <span className="material-symbols-outlined text-[12px]">حذف</span>
          </button>
          <button className="p-1.5 rounded-lg text-text-muted hover:text-white hover:bg-[#d7d8d731] transition-colors">
            <Link href={`/admin/category/edit/${id}`}>
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

export default function CategoryTable({ data }) {
  const { refresh } = useRouter();
  if (!data?.length) {
    return (
      <div className="flex justify-center pt-3">
        <span>دسته بندی در سایت ثبت نشد است</span>
      </div>
    );
  }
  const onDelete = async (id) => {
    try {
      const { message } = await http
        .post("/admin/category/delete", { categoryId: id })
        .then(({ data }) => data);
      toast.success(message);
      refresh();
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  return (
    <div className="rounded-xl border border-[#29382e] overflow-hidden bg-[#1c261f] shadow-xl">
      {/* Table Area */}
      <div className="overflow-x-auto">
        <table className="w-full text-right">
          <thead className="bg-[#29382e] text-[#9db8a6]">
            <tr>
              <th className="p-4 text-xs font-medium">شناسه دسته بندی</th>
              <th className="p-4 text-xs text-center  font-medium">نام</th>
              <th className="p-4 text-xs text-end font-medium">عملیات ها</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#29382e]">
            {data.map((cateogory) => (
              <CategoryTableRow
                key={cateogory.id}
                cateogory={cateogory}
                onDelete={onDelete}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
