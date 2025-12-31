"use client";

import { http } from "@/httpServices";
import Img from "@/shared/components/ui/img";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export const TopBar = ({ itemCount }) => {
  const { refresh } = useRouter();
  const deleteCartIItems = async () => {
    try {
      const { message } = await http
        .delete("/user/cart/")
        .then(({ data }) => data);

      toast.success(message);
      refresh();
    } catch (error) {
      const errorMessage = error?.response?.data?.message;
      toast.error(errorMessage);
    }
  };
  return (
    <div className="lg:col-span-8 space-y-4">
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-xl font-black text-neutral-900  flex items-center">
          سبد خرید شما
          <span className="text-sm font-medium text-neutral-500 mr-2 bg-neutral-100 px-2 py-0.5 rounded-md">
            ({itemCount} کالا)
          </span>
        </h1>
        {itemCount > 0 && (
          <button
            onClick={deleteCartIItems}
            className="text-xs sm:text-sm text-red-500 hover:text-red-600 font-bold flex items-center gap-1 transition-colors px-2 py-1 hover:bg-red-50 rounded-lg"
          >
            <Img
              src={"/icons/delete.svg"}
              alt={"delete icon"}
              className={"h-5 aspect-square"}
            />

            <span>حذف همه</span>
          </button>
        )}
      </div>
    </div>
  );
};
