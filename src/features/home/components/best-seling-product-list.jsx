import Img from "@/shared/components/ui/img";
import BestSelingCard from "./best-seling-product-card";
import Link from "next/link";

export default function BestSelingProducts({ data }) {
  const thereIsProduct = data?.length;
  return (
    <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl font-black text-gray-900">منتخب محصولات</h3>
        <Link
          className="text-gray-500 hover:text-blue-600 text-sm font-bold flex items-center gap-1 transition-all"
          href="/products"
        >
          مشاهده لیست کامل
          <Img
            src={"/icons/arrow.svg"}
            alt={"arrow icon"}
            className={"h-3 aspect-video"}
          />
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {thereIsProduct ? (
          data.map((p) => <BestSelingCard key={p.id} {...p} />)
        ) : (
          <span>محصولی وجود ندارد عجیبه نه ؟</span>
        )}
      </div>
    </div>
  );
}
